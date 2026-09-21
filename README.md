<div align="center">

# condeDeveloper

**Desenvolvedor · criador de conteúdo dev · fundador do CondeClub**

<a href="https://condecount.pages.dev/"><img src="https://img.shields.io/badge/CondeClub-781B32?style=for-the-badge&logoColor=F0F6FC" alt="CondeClub"></a>

<!-- Caixas por linguagem: sempre em degradê do mais claro ao mais escuro, na ordem em que aparecem (A52A45 → 781B32 → 541525 → 3B0F1C). Ao reordenar ou incluir uma linguagem, redistribuir as cores. -->
<a href="https://condedeveloper.github.io/csharp/"><img src="https://img.shields.io/badge/dynamic/json?url=https%3A%2F%2Fcondedeveloper.github.io%2Fcontagem.json&query=%24.csharp&label=C%23&labelColor=A52A45&color=A52A45&style=for-the-badge&logo=dotnet&logoColor=F0F6FC" alt="C#"></a>
<a href="https://condedeveloper.github.io/java/"><img src="https://img.shields.io/badge/dynamic/json?url=https%3A%2F%2Fcondedeveloper.github.io%2Fcontagem.json&query=%24.java&label=Java&labelColor=781B32&color=781B32&style=for-the-badge&logo=openjdk&logoColor=F0F6FC" alt="Java"></a>
<a href="https://condedeveloper.github.io/python/"><img src="https://img.shields.io/badge/dynamic/json?url=https%3A%2F%2Fcondedeveloper.github.io%2Fcontagem.json&query=%24.python&label=Python&labelColor=541525&color=541525&style=for-the-badge&logo=python&logoColor=F0F6FC" alt="Python"></a>
<a href="https://condedeveloper.github.io/javascript/"><img src="https://img.shields.io/badge/dynamic/json?url=https%3A%2F%2Fcondedeveloper.github.io%2Fcontagem.json&query=%24.javascript&label=JavaScript%20%C2%B7%20HTML%20%C2%B7%20CSS&labelColor=3B0F1C&color=3B0F1C&style=for-the-badge&logo=javascript&logoColor=F0F6FC" alt="JavaScript · HTML · CSS"></a>

</div>

<br>

## Sobre

Gosto de recriar coisas do zero para entender como funcionam. Meu foco hoje é **C# e .NET**: back-end, motores de negociação e integrações financeiras, sempre com testes cobrindo as regras de negócio. Também mantenho um sistema de tesouraria em **Java** com Spring Boot e uma coleção de jogos em **JavaScript puro**, sem framework e sem build.

- Back-end em C# e .NET 8: APIs, workers, event sourcing, SignalR, EF Core e benchmarks
- Java 21 com Spring Boot: ledger de partidas dobradas, câmbio e derivativos
- Jogos clássicos em HTML5 Canvas, um repositório por jogo
- Projetos pequenos e frequentes, cada um com CI e testes, e conteúdo para quem está começando

<br>

## Jogos em JavaScript puro

Todos jogáveis no navegador, com versão para celular e recordes salvos localmente.

| | Jogo | Destaques |
|---|------|-----------|
| 🧱 | [Tetris](https://condedeveloper.github.io/tetris/) | 7-bag, hold, ghost piece, wall kicks, temas e ranking |
| 🧨 | [Breakout](https://condedeveloper.github.io/breakout/) | 5 níveis, tijolos reforçados, power-ups, partículas |
| 🏓 | [Pong](https://condedeveloper.github.io/pong/) | IA com 3 dificuldades e modo 2 jogadores |
| 💣 | [Campo Minado](https://condedeveloper.github.io/campo-minado/) | primeiro clique seguro, chord, melhores tempos |
| 🔢 | [2048](https://condedeveloper.github.io/2048/) | desfazer, partida salva, animações |
| 🐍 | [Snake](https://condedeveloper.github.io/snake/) | comida dourada, swipe e d-pad |
| 🐦 | [Flappy Bird](https://condedeveloper.github.io/flappy-bird/) | medalhas e ciclo dia/noite |
| 🧠 | [Jogo da Memória](https://condedeveloper.github.io/jogo-da-memoria/) | cartas 3D e 3 temas |
| ❌ | [Jogo da Velha](https://condedeveloper.github.io/jogo-da-velha/) | minimax imbatível, 3 dificuldades, 2 jogadores |
| 🟩 | [Termo](https://condedeveloper.github.io/termo/) | palavra do dia, estatísticas, compartilhar |
| 👾 | [Space Invaders](https://condedeveloper.github.io/space-invaders/) | pixel art, barreiras destrutíveis, nave misteriosa |
| 🎵 | [Genius](https://condedeveloper.github.io/genius/) | tons afinados, modo rígido, 20 rodadas |
| 🧩 | [Sudoku](https://condedeveloper.github.io/sudoku/) | gerador único, anotações, dicas, 4 níveis |
| ☄️ | [Asteroids](https://condedeveloper.github.io/asteroids/) | vetores, inércia, hiperespaço |
| 🦖 | [Dino Runner](https://condedeveloper.github.io/dino-runner/) | corredor infinito, pássaros, dia/noite |
| 🐹 | [Acerte a Toupeira](https://condedeveloper.github.io/acerte-a-toupeira/) | combo, dourada, bombas, 30 segundos |

<div align="center">

**[→ ver todos em condedeveloper.github.io/jogos](https://condedeveloper.github.io/jogos/)**

</div>

<br>

## Back-end

| | Projeto | Stack | Destaques |
|---|---------|-------|-----------|
| 🏦 | [Tesouraria](https://github.com/condeDeveloper/tesouraria) | Java 21 · Spring Boot 3 · JPA · Flyway · JWT | ledger de partidas dobradas, câmbio pronto, NDF com fixing PTAX, opções com Garman-Kohlhagen e gregas, VaR, limites, 80+ testes |
| 🎟️ | [Bilheteria](https://github.com/condeDeveloper/bilheteria) | Java 21 · Spring Boot 3 · PostgreSQL · Kafka · Redis · Testcontainers · Docker Compose | lugares vendidos uma vez só sob 24 pedidos simultâneos (lock pessimista em ordem fixa + versão), saga de compra com compensação e cobrança fora da transação, outbox transacional para Kafka, consumidores idempotentes com retry topics e DLT, Idempotency-Key, Resilience4j com circuit breaker, ingressos assinados com HMAC, lock distribuído em Redis, JWT, ArchUnit, mesmo cenário em H2 e em containers reais, imagem em camadas e compose com 8 serviços |
| 📈 | [Livro de Ofertas](https://github.com/condeDeveloper/livro-de-ofertas) | C# 12 · .NET 8 · ASP.NET Core · SignalR · xUnit · BenchmarkDotNet | matching engine com prioridade preço-tempo, GTC/IOC/FOK, alteração com perda de prioridade, auto-negociação, candles, event sourcing com reconstrução, simulador |
| 💸 | [Simulador Pix](https://github.com/condeDeveloper/simulador-pix) | C# 12 · .NET 8 · ASP.NET Core · EF Core · SQLite · xUnit | API no formato da API Pix do BCB: BR Code EMV com CRC16 idêntico ao exemplo oficial, chaves validadas, cobranças com QR dinâmico e expiração, endToEndId, devoluções, webhooks HMAC com backoff |
| 🛡️ | [Antifraude](https://github.com/condeDeveloper/antifraude) | C# 12 · .NET 8 · ASP.NET Core · xUnit | motor de regras com linguagem própria (lexer, parser e avaliador), funções de velocidade em janelas deslizantes, pontuação com Aprovar/Revisar/Negar, listas de negação e aprovação, explicação e simulação em lote |
| 🧾 | [Boleto Bancário](https://github.com/condeDeveloper/boleto-bancario) | C# 12 · .NET 8 · ASP.NET Core · xUnit | código de barras e linha digitável FEBRABAN, módulo 10 e 11 com vetores do manual, fator de vencimento com a virada de 2025, campo livre de BB, Bradesco, Itaú, Santander e Caixa, SVG Interleaved 2 of 5 |
| 📊 | [Motor de Crédito](https://github.com/condeDeveloper/motor-de-credito) | C# 12 · .NET 8 · ASP.NET Core · xUnit | scorecard declarativo com oito características, faixas de risco A a E com precificação, política com cortes duros e contraproposta pela capacidade de pagamento, planos Price e SAC fechando o saldo ao centavo, IOF e CET por taxa interna de retorno |
| 🗄️ | [Cofre KV](https://github.com/condeDeveloper/cofre-kv) | C# 12 · .NET 8 · System.IO.Pipelines · xUnit | banco chave-valor compatível com o protocolo do Redis: RESP2 com parser incremental sem cópia, servidor TCP com laço único de execução e pipelining, TTL passivo e ativo, despejo LRU em O(1), listas e hashes, testes de concorrência real por TCP |
| 🔗 | [Conciliador Bancário](https://github.com/condeDeveloper/conciliador-bancario) | C# 12 · .NET 8 · ASP.NET Core · xUnit | leitores de OFX 1.x e 2.x e de extrato CNAB 240 (segmento E, trailers validados, gerador para ida e volta), CSV interno tolerante, cascata de cinco regras com confiança, agrupamento n:1 por soma de subconjunto, similaridade de Jaccard, divergências de saldo e relatório |
| 🐳 | [Pedidos Distribuídos](https://github.com/condeDeveloper/pedidos-distribuidos) | C# 12 · .NET 8 · PostgreSQL · RabbitMQ · Redis · Docker Compose · GitHub Actions | Clean Architecture e CQRS com MediatR, EF Core com migrations, outbox transacional com relay e consumidor idempotente com retry e fila morta, worker separado, cache-aside no Redis, JWT, rate limit, health checks, Serilog em JSON, OpenTelemetry para o Jaeger, métricas Prometheus e dashboard Grafana, Dockerfiles multi-stage, compose com 8 serviços, CI com testes de integração contra serviços reais e imagens publicadas no GHCR |
| 💼 | [Folha de Pagamento](https://github.com/condeDeveloper/folha-de-pagamento) | C# 12 · .NET 8 · ASP.NET Core · xUnit | INSS progressivo faixa a faixa com alíquota efetiva, IRRF retido sempre pelo menor entre as deduções legais e o desconto simplificado, tabela de incidência por rubrica decidindo o que entra em INSS, IRRF e FGTS, horas extras com hora noturna reduzida de 52'30" e reflexo no DSR, falta que derruba o repouso da semana, salário-família, décimo terceiro em avos e duas parcelas, férias com tabela do artigo 130 e abono pecuniário, rescisão nos cinco motivos com aviso proporcional projetando os avos, multa do FGTS e custo do empregador com provisões |
| 📄 | [Leitor de NF-e](https://github.com/condeDeveloper/leitor-de-nfe) | C# 12 · .NET 8 · ASP.NET Core · xUnit | chave de acesso de 44 dígitos aberta campo a campo com dígito verificador módulo 11, leitura do XML da NF-e 4.00 e do procNFe com XmlReader sem DTD nem resolver externo, CNPJ e CPF, CFOP deduzindo sentido e âmbito pelo primeiro dígito, NCM, CST e CSOSN, regras que cruzam a chave com o corpo da nota, os totais com a soma dos itens, o CFOP com as UFs e o CST com o regime do emitente, erro que aponta o campo exato do XML e resumo formatado para o DANFE |
| ⏰ | [Agendador de Tarefas](https://github.com/condeDeveloper/agendador-de-tarefas) | C# 12 · .NET 8 · ASP.NET Core · SQLite · xUnit | parser de cron de cinco ou seis campos com listas, faixas, passos, faixa que dá a volta, nomes em português e inglês, `L` para último dia do mês e `#` para enésimo dia da semana, próximo disparo calculado no fuso certo tratando o buraco e a repetição do horário de verão, retentativa com recuo exponencial e embaralhamento, limite de tempo por execução, política de sobreposição, recolhimento de execuções órfãs e reserva atômica por `UPDATE ... RETURNING` para que dois processos não rodem a mesma janela |
| 🔎 | [Índice Invertido](https://github.com/condeDeveloper/indice-invertido) | C# 12 · .NET 8 · ASP.NET Core · xUnit | motor de busca textual do zero, sem Lucene: normalização e radicalizador de português baseado no RSLP (a ordem das etapas importa — "balões" vira "balão" antes da regra que corta o "ão"), índice invertido com postings posicionais, trie do vocabulário para prefixo, BM25 com saturação por `k1` e normalização de comprimento por `b`, busca por frase exata que atravessa as palavras de parada pela folga de posições, sintaxe `+obrigatório -excluído prefixo*`, trecho destacado na janela de maior concentração e índice gravado com varint e codificação por diferença |

<br>

## Python

| | Projeto | Destaques |
|---|---------|-----------|
| 🧮 | [Planilha](https://github.com/condeDeveloper/planilha) | motor de planilha em Python puro: lexer e parser de fórmulas do zero com a precedência do Excel (o sinal unário une mais forte que a potência, então `-2^2` é 4), referências `A1` com cifrão e intervalos, mais de cinquenta funções em cinco famílias, erro como valor de primeira classe que se propaga e é capturado por `SEERRO`, grafo de dependências com recálculo topológico incremental e referência circular detectada como o que sobra da ordenação topológica, com o caminho do ciclo à mostra. CLI, modo interativo, 294 testes, zero dependências |
| 🤪 | [Bobo, o chatbot idiota](https://github.com/condeDeveloper/chatbot-bobo) | chatbot de terminal em Python puro: habilidades por prioridade, memória de conversa, contas seguras com `ast`, hora e data, piadas e reflexões estilo ELIZA em português, 52 testes, zero dependências |

<br>

## Contribuições

<div align="center">

<picture>
  <source media="(prefers-color-scheme: dark)" srcset="https://raw.githubusercontent.com/condeDeveloper/condeDeveloper/output/github-snake-dark.svg">
  <source media="(prefers-color-scheme: light)" srcset="https://raw.githubusercontent.com/condeDeveloper/condeDeveloper/output/github-snake.svg">
  <img alt="Gráfico de contribuições" src="https://raw.githubusercontent.com/condeDeveloper/condeDeveloper/output/github-snake-dark.svg" width="100%">
</picture>

</div>

<br>

<div align="center">

<sub>Feito com C#, café e teimosia.</sub>

</div>
