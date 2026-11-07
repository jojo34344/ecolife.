# 🌱 EcoLife (eco-battle)

Jogo educativo sobre meio ambiente e sustentabilidade, com desafios de perguntas, batalhas, missões diárias, loja de produtos ecológicos e o **Zinho**, uma IA educativa criada do zero para este projeto.

## ▶️ Como testar

Abra **dois terminais** na pasta do projeto:

```bash
npm install          # só na primeira vez
npm run server       # terminal 1: liga o Zinho (porta 3001)
npm run dev          # terminal 2: abre o jogo (porta 5173)
```

Depois acesse o endereço que o Vite mostrar (normalmente http://localhost:5173).

> Se o servidor do Zinho estiver desligado, o jogo continua funcionando com as perguntas do banco fixo. Só as funções do Zinho (chat, explicações e perguntas geradas) ficam indisponíveis.

## 🤖 Quem é o Zinho?

O Zinho é uma IA educativa **sem API externa e sem chave**: ele roda no arquivo `server.cjs`.

- **Base de conhecimento:** mais de 50 temas (reciclagem, água, energia, clima, biodiversidade, consumo consciente, produtos ecológicos e outros).
- **Como ele responde:** normaliza o texto (sem acentos, minúsculas), procura palavras-chave na base e devolve a explicação do tema encontrado.
- **Segurança:** filtro de conteúdo inadequado e foco só em meio ambiente. Se não encontra o assunto, ele avisa em vez de inventar.

### O que o Zinho faz no jogo

| Função | Onde aparece | Como funciona |
|---|---|---|
| **Tirar dúvidas** | Chat com o Zinho | Rota `POST /api/ia` |
| **Explicar respostas** | Depois de responder cada pergunta | Rota `POST /api/explicar` |
| **Criar desafios** | Cada partida mistura 3 perguntas fixas + 2 geradas | Rota `GET /api/perguntas` |
| **Adaptar ao nível** | Fácil, Médio e Difícil | Muda o número e a dificuldade das opções |

### Como as perguntas geradas mudam por nível

Cada pergunta nova é montada a partir da base de conhecimento ("Qual afirmação sobre X está correta?"). O nível muda as alternativas erradas:

- 🟢 **Fácil:** 3 opções, erradas de temas diferentes (fácil de descartar).
- 🟡 **Médio:** 4 opções, erradas de temas variados.
- 🔴 **Difícil:** 4 opções, erradas do **mesmo tema** (parecidas com a certa).

Os desafios de outras matérias (Matemática, Português, etc.) usam apenas o banco fixo de perguntas.

## 🗂️ Estrutura

- `src/App.jsx`: telas e lógica do jogo
- `src/App.css`: estilos
- `server.cjs`: o Zinho (base de conhecimento, filtro e rotas da API)

## 🛠️ Tecnologias

React 19, Vite, Node.js e Express.
