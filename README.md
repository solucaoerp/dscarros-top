# DSCarrosTop

## Sobre o Projeto

O projeto `DSCarrosTop` é um catálogo de carros desenvolvido como parte do treinamento de reciclagem e aprimoramento em React, TypeScript e Vite chamado **"ReactJS Professional"**, oferecido pela escola [DevSuperior](https://devsuperior.com.br). Este projeto tem como foco principal a fixação de conceitos em "Componentes" e "Rotas" no desenvolvimento frontend. Embora o projeto se concentre na montagem da estrutura, ele é projetado para ser uma página única e responsiva. O projeto foca na montagem da estrutura, sem se preocupar com os links, resultando em uma página única e responsiva.

## Estrutura Básica do Projeto

A estrutura do projeto é modular, o que facilita tanto a manutenção quanto a escalabilidade do código. Cada componente e rota tem sua própria pasta, contendo um arquivo `index.tsx` para o código do componente e um arquivo `styles.css` para os estilos.

```
DSCarrosTop/
├── src/
│   ├── components/
│   │   ├── Header/
│   │   │   ├── index.tsx
│   │   │   └── styles.css
│   │   ├── CarCard/
│   │   │   ├── index.tsx
│   │   │   └── styles.css
│   │   ├── CommentCard/
│   │   │   ├── index.tsx
│   │   │   └── styles.css
│   │   └── Footer/
│   │       ├── index.tsx
│   │       └── styles.css
│   ├── routes/
│   │   ├── Home/
│   │   │   ├── index.tsx
│   │   │   └── styles.css
│   ├── App.tsx
│   ├── index.tsx
│   └── index.css
├── package.json
└── vite.config.ts
└── ...
```