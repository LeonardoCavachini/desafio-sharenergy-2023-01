# Desafio para o processo seletivo SHARENERGY 2023/01

## Rodando a aplicação

### Setup inicial

- `git clone https://github.com/LeonardoCavachini/desafio-sharenergy-2023-01.git`

- entre na pasta `backend`

- adicione um arquivo `.env` com as seguintes vaiaveis de ambiente.

SECRET_KEY=`digite uma senha qualquer`

PORT=`digite uma porta caso queira usar uma específica`

## Rodando a aplicação.

- Entre na pasta `Backend` e rode no terminal `npm i` agora volte a pasta raiz.

Este projeto precisa do docker para subr as aplicaçôes,na pasta raiz, no seu terminal digite `docker compose up `.
Prontinho agora você ja pode brincar com a aplicação.
caso não tenha o **Docker** instalado, acesse [Docker](https://www.docker.com/) para mais detalhes.

## Endpoints

- Criar usuario.
  url `http://localhost:PORT/user/register`.
  method: POST
  body = 
  `{name: Joao,`
   `email:joao@joao.com`
   `tel: 5556556`
   `cpf:230685326-05`
   `address: avenida leitão}`

- Logar usuario.
  url `http://localhost:PORT/login`.
  method: POST
  body = `{username: desafiosharenerg, password:sh@r3n3rgy}`

- Ver ususario específico.
  url `http://localhost:PORT/user/:id`.
  method: GET
  headers: {
  Authorization: Token

- Ver todos os usuários.
  url `http://localhost:PORT/users`.
  method: GET
  headers: {
  Authorization: Token
  }

- Atualizar usuario
  url `http://localhost:PORT/user/:id`.
  method: PATCH
  headers: {
  Authorization: Token
  body = 
    `{name: Joao,`
    `email:joao@joao.com`
    `tel: 5556556`
    `cpf:230685326-05`
    `address: avenida leitão}`
  }

- Deletar usuário
  url `http://localhost:PORT/project/:id`.
  method: DELETE
  headers: {
  Authorization: Token
  }