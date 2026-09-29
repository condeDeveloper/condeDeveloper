// Soma as contribuições de todos os anos da conta e grava um JSON que os
// badges do README leem (shields.io dynamic/json). Roda junto com a cobrinha
// e vai para a mesma branch `output`.
//
// A API só devolve até um ano por consulta, por isso um pedaço por ano,
// desde a criação da conta. Sem dependência: Node 20 já tem fetch.
//
// Uso: GITHUB_TOKEN=... USUARIO=condeDeveloper node contribuicoes.mjs dist/contribuicoes.json

import { mkdirSync, writeFileSync } from 'node:fs';
import { dirname } from 'node:path';

const token = process.env.GITHUB_TOKEN;
const usuario = process.env.USUARIO;
const saida = process.argv[2] ?? 'dist/contribuicoes.json';
if (!token || !usuario) throw new Error('faltam GITHUB_TOKEN e USUARIO');

async function graphql(query, variables) {
  const resp = await fetch('https://api.github.com/graphql', {
    method: 'POST',
    headers: { Authorization: `bearer ${token}`, 'Content-Type': 'application/json' },
    body: JSON.stringify({ query, variables }),
  });
  const json = await resp.json();
  if (!resp.ok || json.errors) throw new Error(JSON.stringify(json.errors ?? json));
  return json.data;
}

const { user } = await graphql(
  `query($u: String!) {
    user(login: $u) {
      createdAt
      repositories(privacy: PUBLIC, ownerAffiliations: OWNER) { totalCount }
    }
  }`,
  { u: usuario },
);

const agora = new Date();
let total = 0;
for (let ano = new Date(user.createdAt).getUTCFullYear(); ano <= agora.getUTCFullYear(); ano++) {
  const fim = new Date(Date.UTC(ano, 11, 31, 23, 59, 59));
  const { user: u } = await graphql(
    `query($u: String!, $de: DateTime!, $ate: DateTime!) {
      user(login: $u) {
        contributionsCollection(from: $de, to: $ate) { contributionCalendar { totalContributions } }
      }
    }`,
    { u: usuario, de: `${ano}-01-01T00:00:00Z`, ate: (fim < agora ? fim : agora).toISOString() },
  );
  total += u.contributionsCollection.contributionCalendar.totalContributions;
}

// Número com ponto de milhar, como se escreve em português: 1.678
const pt = (n) => n.toLocaleString('pt-BR');

const dados = {
  contribuicoes: pt(total),
  repositorios: pt(user.repositories.totalCount),
  atualizado: agora.toISOString(),
};
mkdirSync(dirname(saida), { recursive: true });
writeFileSync(saida, JSON.stringify(dados, null, 2) + '\n');
console.log(dados);
