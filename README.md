<div align="center">

# condeDeveloper

**Back-end em C# e .NET · coisas feitas do zero, com teste provando**

<br>

<!-- Caixas por linguagem: sempre em degradê do mais claro ao mais escuro, na ordem em que aparecem (A52A45, 781B32, 541525, 3B0F1C, 290A14). Ao reordenar ou incluir uma linguagem, redistribuir as cores. -->
<a href="https://condedeveloper.github.io/csharp/"><img src="https://img.shields.io/badge/dynamic/json?url=https%3A%2F%2Fcondedeveloper.github.io%2Fcontagem.json&query=%24.csharp&label=C%23&labelColor=A52A45&color=A52A45&style=for-the-badge&logo=dotnet&logoColor=F0F6FC" alt="C#"></a>
<a href="https://condedeveloper.github.io/java/"><img src="https://img.shields.io/badge/dynamic/json?url=https%3A%2F%2Fcondedeveloper.github.io%2Fcontagem.json&query=%24.java&label=Java&labelColor=781B32&color=781B32&style=for-the-badge&logo=openjdk&logoColor=F0F6FC" alt="Java"></a>
<a href="https://condedeveloper.github.io/python/"><img src="https://img.shields.io/badge/dynamic/json?url=https%3A%2F%2Fcondedeveloper.github.io%2Fcontagem.json&query=%24.python&label=Python&labelColor=541525&color=541525&style=for-the-badge&logo=python&logoColor=F0F6FC" alt="Python"></a>
<a href="https://condedeveloper.github.io/javascript/"><img src="https://img.shields.io/badge/dynamic/json?url=https%3A%2F%2Fcondedeveloper.github.io%2Fcontagem.json&query=%24.javascript&label=JavaScript%20%C2%B7%20HTML%20%C2%B7%20CSS&labelColor=3B0F1C&color=3B0F1C&style=for-the-badge&logo=javascript&logoColor=F0F6FC" alt="JavaScript · HTML · CSS"></a>
<a href="https://condedeveloper.github.io/node/"><img src="https://img.shields.io/badge/dynamic/json?url=https%3A%2F%2Fcondedeveloper.github.io%2Fcontagem.json&query=%24.node&label=Node&labelColor=290A14&color=290A14&style=for-the-badge&logo=nodedotjs&logoColor=F0F6FC" alt="Node"></a>

<br><br>

<a href="https://condedeveloper.github.io/"><img src="https://img.shields.io/badge/dynamic/json?url=https%3A%2F%2Fcondedeveloper.github.io%2Fcontagem.json&query=%24.total&label=projetos%20no%20cat%C3%A1logo&labelColor=1C0A10&color=A52A45&style=flat-square" alt="Projetos"></a>
<img src="https://img.shields.io/badge/dynamic/json?url=https%3A%2F%2Fraw.githubusercontent.com%2FcondeDeveloper%2FcondeDeveloper%2Foutput%2Fcontribuicoes.json&query=%24.contribuicoes&label=contribui%C3%A7%C3%B5es&labelColor=1C0A10&color=781B32&style=flat-square&logo=github&logoColor=F0F6FC" alt="Contribuições">
<img src="https://img.shields.io/badge/depend%C3%AAncias%20nos%20projetos%20do%20zero-nenhuma-541525?style=flat-square&labelColor=1C0A10" alt="Sem dependências">

<br><br>

**[▸ catálogo completo, com busca e filtro por linguagem](https://condedeveloper.github.io/)**

</div>

<br>

---

## Sobre

Recrio coisas do zero para entender como funcionam por dentro: o parser de URL que o
navegador usa, os objetos do Git, o formato de arquivo do SQLite, um motor de regex, uma
árvore B+ em disco. Meu foco profissional é **C# e .NET** — back-end, motores de
negociação e integrações financeiras.

Cada projeto é pequeno, tem CI, e entrega um **número que alguém pode conferir**. Não
"implementei X": *869 dos 896 casos do web-platform-tests*, *hashes idênticos aos do git
de verdade*, *as 162 imagens da PngSuite*.

<br>

## Como cada projeto é feito

Isto é o que separa um repositório de estudo de um que vale a pena existir — e vale para
todos os do catálogo.

| | Regra | Por quê |
|---|-------|---------|
| ⛏️ | **Varredura completa, não amostra** | se o domínio é finito, ele é varrido inteiro: a tabela diz *provado*, não *testei alguns* |
| ⚖️ | **Um juiz independente** | uma segunda implementação, que não compartilha uma linha com a primeira. Se as duas concordam, o número é bom; se discordam, mora ali o achado |
| 📌 | **Os números presos em teste** | cada valor do README está num `test_medidas`. Se o código mudar e a medida mudar junto, a bateria quebra **antes** de o texto virar mentira |
| 🩹 | **A seção dos meus erros** | todo README tem *"o que as medidas me corrigiram"*: o que eu esperava, o que saiu, e por que eu estava errado |
| 🧪 | **CI em matriz** | três sistemas operacionais, e três versões da linguagem quando ela tem |

<br>

---

## CondePlay

Um serviço de streaming inteiro, repartido em **seis repositórios e cinco linguagens**.
O conteúdo é inventado para o projeto e as mídias apontam para fluxos HLS públicos de
teste: não há um arquivo de vídeo nem uma imagem de terceiros em lugar nenhum.

| | Parte | Stack | O que ela prova |
|---|-------|-------|-----------------|
| 🍿 | **[CondePlay](https://condedeveloper.github.io/conde-play/)** | JavaScript · HTML · CSS | a tela inteira sem framework, sem build e **sem um arquivo de imagem**: cada capa é um SVG gerado do nome |
| 🎬 | **[Catálogo](https://github.com/condeDeveloper/catalogo)** | C# 12 · .NET 8 · EF Core | paginação por cursor opaco, porque `OFFSET` repete e pula itens quando o catálogo muda entre duas páginas |
| 📺 | **[Player HLS](https://github.com/condeDeveloper/player-hls)** | JavaScript · MSE | sem `hls.js`: o estimador descarta amostras de menos de 50 ms, porque cache em 5 ms diz 92 Mbps e não mediu rede nenhuma |
| 🎞️ | **[MP4](https://github.com/condeDeveloper/mp4)** | Node puro | o `avc1.64001f` montado de três bytes é o mesmo que a Apple escreve no `CODECS=` das playlists dela |
| 🧮 | **[Recomendações](https://github.com/condeDeveloper/recomendacoes)** | Python puro | o viés de popularidade medido: a co-ocorrência crua aponta o campeão de audiência em **metade** do catálogo; o cosseno, uma vez |
| 📡 | **[Telemetria](https://github.com/condeDeveloper/eventos-de-reproducao)** | Java 21 | cem embaralhamentos de uma semana de eventos, um em cada cinco duplicado, têm de chegar ao mesmo estado |

<br>

---

## Em destaque

Oito do acervo, um por tipo de problema. O resto está no
**[catálogo](https://condedeveloper.github.io/)**.

| | Projeto | Stack | O número |
|---|---------|-------|----------|
| 🔗 | **[URL](https://github.com/condeDeveloper/url)** | C# · .NET 8 | o WHATWG URL Standard, que é o que o navegador faz — e não a RFC 3986. **869 dos 896** casos do web-platform-tests, a mesma suíte do Chrome e do Firefox |
| 🌳 | **[Mini Git](https://github.com/condeDeveloper/mini-git)** | Node puro | blob, tree, commit, SHA-1, índice e referências, com **hashes idênticos** aos do git de verdade |
| 🖼️ | **[PNG](https://github.com/condeDeveloper/png)** | Python puro | sem Pillow, julgado pela PngSuite oficial: as **162 válidas** decodificam e as **14 corrompidas** são recusadas pela razão exata de cada uma |
| 🗄️ | **[SQLite](https://github.com/condeDeveloper/sqlite)** | Python puro | lê o formato de arquivo sem a biblioteca do SQLite; o módulo `sqlite3` gera os arquivos e as duas respostas têm de bater **linha a linha** |
| ⚙️ | **[Bytecode](https://github.com/condeDeveloper/bytecode)** | Java 21 | gera arquivos `.class` sem ASM — e **a própria JVM carrega e executa** a saída do compilador de expressões |
| 🔤 | **[Motor de Regex](https://github.com/condeDeveloper/motor-de-regex)** | Java 21 | construção de Thompson e simulação por conjunto de estados, **sem retrocesso**: nada de explodir em `(a+)+b` |
| 🔀 | **[Merge](https://github.com/condeDeveloper/merge)** | Node puro | fusão de três vias conferida contra o próprio `git merge-file` em 2.500 triplas sorteadas: **97,56%** byte a byte |
| 🏦 | **[Tesouraria](https://github.com/condeDeveloper/tesouraria)** | Java 21 · Spring Boot | ledger de partidas dobradas, NDF com fixing PTAX, opções com Garman-Kohlhagen, gregas, VaR e limites |

<br>

---

## O acervo

<div align="center">

| | Linguagem | O que tem lá |
|---|-----------|--------------|
| ![C#](https://img.shields.io/badge/dynamic/json?url=https%3A%2F%2Fcondedeveloper.github.io%2Fcontagem.json&query=%24.csharp&label=&labelColor=A52A45&color=A52A45&style=flat-square) | **[C# · .NET](https://condedeveloper.github.io/csharp/)** | APIs, workers, event sourcing, SignalR, EF Core, benchmarks e integrações financeiras |
| ![Java](https://img.shields.io/badge/dynamic/json?url=https%3A%2F%2Fcondedeveloper.github.io%2Fcontagem.json&query=%24.java&label=&labelColor=781B32&color=781B32&style=flat-square) | **[Java 21](https://condedeveloper.github.io/java/)** | Spring Boot, estruturas em disco, compiladores, e combinatória varrida por força bruta com juiz |
| ![Python](https://img.shields.io/badge/dynamic/json?url=https%3A%2F%2Fcondedeveloper.github.io%2Fcontagem.json&query=%24.python&label=&labelColor=541525&color=541525&style=flat-square) | **[Python](https://condedeveloper.github.io/python/)** | formatos de arquivo, teoria dos números e sequências, tudo só com a biblioteca padrão |
| ![JS](https://img.shields.io/badge/dynamic/json?url=https%3A%2F%2Fcondedeveloper.github.io%2Fcontagem.json&query=%24.javascript&label=&labelColor=3B0F1C&color=3B0F1C&style=flat-square) | **[JavaScript](https://condedeveloper.github.io/javascript/)** | jogos clássicos em HTML5 Canvas, um repositório por jogo, sem framework |
| ![Node](https://img.shields.io/badge/dynamic/json?url=https%3A%2F%2Fcondedeveloper.github.io%2Fcontagem.json&query=%24.node&label=&labelColor=290A14&color=290A14&style=flat-square) | **[Node](https://condedeveloper.github.io/node/)** | protocolos e formatos em Node puro: **nenhuma dependência, nenhum build**, testes no `node:test` |

<br>

**[▸ ver o catálogo completo, com busca e filtro](https://condedeveloper.github.io/)**

</div>

<br>

---

## Contribuições

<div align="center">

<!-- Números gerados pela Action da cobrinha (.github/scripts/contribuicoes.mjs) na branch output, a cada 6 horas. -->
<img src="https://img.shields.io/badge/dynamic/json?url=https%3A%2F%2Fraw.githubusercontent.com%2FcondeDeveloper%2FcondeDeveloper%2Foutput%2Fcontribuicoes.json&query=%24.contribuicoes&label=Contribui%C3%A7%C3%B5es&labelColor=A52A45&color=A52A45&style=for-the-badge&logo=github&logoColor=F0F6FC" alt="Contribuições">
<a href="https://github.com/condeDeveloper?tab=repositories"><img src="https://img.shields.io/badge/dynamic/json?url=https%3A%2F%2Fraw.githubusercontent.com%2FcondeDeveloper%2FcondeDeveloper%2Foutput%2Fcontribuicoes.json&query=%24.repositorios&label=Reposit%C3%B3rios&labelColor=781B32&color=781B32&style=for-the-badge&logoColor=F0F6FC" alt="Repositórios"></a>

<br><br>

<picture>
  <source media="(prefers-color-scheme: dark)" srcset="https://raw.githubusercontent.com/condeDeveloper/condeDeveloper/output/github-snake-dark.svg">
  <source media="(prefers-color-scheme: light)" srcset="https://raw.githubusercontent.com/condeDeveloper/condeDeveloper/output/github-snake.svg">
  <img alt="Gráfico de contribuições" src="https://raw.githubusercontent.com/condeDeveloper/condeDeveloper/output/github-snake-dark.svg" width="100%">
</picture>

</div>

<br>

<div align="center">

<sub>Feito com C#, café e teimosia · fundador do <a href="https://condecount.pages.dev/">CondeClub</a></sub>

</div>
