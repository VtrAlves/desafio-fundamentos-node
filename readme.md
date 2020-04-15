<h3 align="center">
  Desafio GoStack: Conceitos do Node.js
</h3>
<p align="center">
  <img alt="License" src="https://img.shields.io/badge/License-MIT-%2304D361">
  <img alt="GitHub language count" src="https://img.shields.io/github/languages/count/rocketseat/bootcamp-gostack-desafios?color=%2304D361">
  <img alt="MadeBy" src="https://img.shields.io/badge/made%20by-Vitor%20Alves-%2304D361">
</p>

## ❕ Sobre o desafio

Esse desafio foi solicitado pela Rocketseat com as instruções passadas [nesse repositório](https://github.com/Rocketseat/bootcamp-gostack-desafios/tree/master/desafio-fundamentos-nodejs). Nele fixamos o conceito de entidades, repositórios e serviços com typescript.

## 💻 Alterações do desafio

Foi baixado o [template](https://github.com/Rocketseat/gostack-template-fundamentos-node) enviado e assim criei as rotas para criação / listagem de transações e balanço.

Utilizei também dentro do padrão enviado, a criação do código para a entidade, repositório e serviços. Onde foi gerado funções de criação, visualização dos itens cadastrados e um resumo dos itens (balanço).

## 📖 Bibliotecas Utilizadas

- `Express`: Utilizado para escutar e responder requisições realizadas.
- `ts-node-dev`: Utilizado para reiniciar o servidor a cada mudança nos arquivos. (Instalado em ambiente de desenvolvimento)
- `Typescript`: Utilizado para carregar as configurações em tsconfig.json e gerar a build para produção caso necessário. (Instalado em ambiente de desenvolvimento)
- `UUIDv4`: Utilizado para gerar um ID unico em cada repositório criado.
- `Jest`: Utilizado para realização de testes automatizados na aplicação. (Instalado em ambiente de desenvolvimento)
- `Eslint`: Utilizado para verificação de erros na aplicação. O mesmo também é utilizado para ajustar o código no padrão configurado na aplicação. (Instalado em ambiente de desenvolvimento)
- `Prettier`: Utilizado para auxiliar o eslint ao ajustar o código escrito no padrão configurado na aplicação. (Instalado em ambiente de desenvolvimento)

## 🚀 Iniciar aplicação

Primeiramente é necessário baixar as dependências com o comando:

> yarn

Após a instalação, para iniciar o servidor utilize o comando:

> yarn dev:server

Caso deseja rodar os testes, utilize o seguinte comando:

> yarn test

---

Feito com ❤ por [Vitor](https://github.com/VtrAlves)
