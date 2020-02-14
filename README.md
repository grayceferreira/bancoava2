# bancoava2 :money:

O banco ideal para quem quer inovar na hora de administrar o seu dinheiro!

Como projeto final da Avanade Academy, com o curso de Angular + Node.js ministrado pelos professores da Gama Academy, a aplicação Bancoava tem como proposta ser uma plataforma de internet banking onde seus usuários possam administrar suas informações cadastrais básicas, realizar transferências, e consultar seu extrato.

### Pré-requisitos

Para utilizar essa API, é necessário ter instalado na sua máquina as tecnologias Angular, Node.JS e MongoDB.

### Instalação 

`Fork` esse repositório para seu github. `Clone` na sua máquina. Após entrar na pasta pelo **PROMPT**, dê `npm init` e `npm install` para que todas as dependências do projeto sejam instaladas corretamente.

### Utilização 

Para inicialiazar o server:

```
npm start
```

#### Rotas

A API está sendo escutada na `porta 4200`, dessa forma, para todas as rotas serem acessadas localmente, use `http://localhost:4200/` antes do caminho da rota.

As rotas apresentadas na aplicação são:

{ Usuários }

- POST `/usuarios/` - adicionar um novo usuário 

- POST `/usuarios/login` - realizar login 

- GET `/usuarios` - visualizar todos os usuários

- GET `/usuarios/:id` - visualizar um usuário através do id

- PATCH `/usuarios/:id` - atualizar um usuário através do id

- DELETE `/usuarios/:id` - remover um usuário através do id


{ Contas }

- POST `/contas/:id/novaConta` - adicionar uma nova conta bancária para o usuário


{ Transferências}

- POST `/transferencias/` - adicionar uma nova transferência bancária


{ Extratos }

- GET `/extratos/` - visualizar todos os extratos do usuário

- GET `/extratos/:id` - visualizar um extrato do usuário através do id


### Contribuindo com o projeto

1. Faça o _fork_ do projeto (<https://github.com/grayceferreira/bancoava2/fork>)
2. Crie uma _branch_ para sua modificação (`git checkout -b feature/fooBar`)
3. Faça o _commit_ (`git commit -am 'Add some fooBar'`)
4. _Push_ (`git push origin feature/fooBar`)
5. Crie um novo _Pull Request_

