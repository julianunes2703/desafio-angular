#  Desafio Técnico Front-End - Angular + HTML/CSS

Este repositório contém a solução de um desafio técnico de Front-End dividido em **três etapas**, com foco em HTML/CSS responsivo, Angular.

---

## Estrutura do Projeto

```bash
.
├── etapa-1/             # Página estática feita com HTML e CSS puro (Etapa 1)
├── covid-news/          # Projeto Angular contendo as Etapas 2 e 3
└── README.md

## Estrutura do projeto angular
app/
├── post-create/         → Página de criação de post
├── post-detail/         → Página de detalhes de post
├── posts/               → Página de listagem de posts
├── app.component.ts     → Componente raiz
├── app.component.html   → Template raiz com <router-outlet>
├── app.config.ts        → Provedores globais
├── app.routes.ts        → Definição das rotas
├── post.service.ts      → Serviço de API (GET, POST)
└── main.ts              → Início da aplicação standalone

## Como rodar o projeto angular
-Acessar a pasta cd covid news
-Instalar as dependências npm install
-Execultar o servido ng serve
