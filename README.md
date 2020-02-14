# Bancoava :dollar:

O banco ideal para quem quer inovar na hora de administrar o seu dinheiro!

Como projeto final da Avanade Academy, com o curso de Angular + Node.js ministrado pelos professores da Gama Academy, a aplicação Bancoava tem como proposta ser uma plataforma de internet banking onde seus usuários possam administrar suas informações cadastrais básicas, realizar transferências, e consultar seu extrato.


### Pré-requisitos e tecnologias utilizadas

Para utilizar essa API, é necessário que instale na sua máquina as tecnologias Angular, Node.JS e MongoDB.


### Instalação 

1º passo: `Fork` esse repositório para seu github:

```
https://github.com/grayceferreira/bancoava2/fork
```

2º passo: `Clone` na sua máquina:

```
https://github.com/grayceferreira/bancoava2.git
```

3º passo: após entrar na pasta pelo **PROMPT**, dê `npm install` para que todas as dependências do projeto sejam instaladas corretamente.


### Utilização 

Para inicialiazar o server:

```
npm start
```


#### Rotas

A API está sendo escutada na `porta 3000`, dessa forma, para todas as rotas serem acessadas localmente, use `http://localhost:3000/` antes do caminho da rota.

As rotas apresentadas na aplicação são:

{ Usuários }

- POST `/usuario/` - adicionar um novo usuário 

- POST `/usuario/login` - realizar login 

- GET `/usuario` - visualizar todos os usuários

- GET `/usuario/:id` - visualizar um usuário através do id

- PATCH `/usuario/:id` - atualizar um usuário através do id

- DELETE `/usuario/:id` - remover um usuário através do id


{ Contas }

- POST `/conta/novaConta/:usuarioId` - adicionar uma nova conta bancária para o usuário

- GET `/conta` - visualizar todas as contas

- GET `/conta/detalhes/:id` - visualizar detalhes de uma conta

- GET `conta/:usuarioId` - visualizar todas as contas de um determinado usuário


{ Transferências}

- POST `/transferencia/outrosBancos/:contaId` - adicionar uma nova transferência bancária para banco externo

- POST `/transferencia/ava/:contaDestino/:contaId` - adicionar uma nova transferência bancária para uma conta Bancoava


{ Extratos }

- GET `/extrato/detalhes/:transferenciaId` - visualizar detalhes de uma determinada transferência

- GET `/extrato/:contaOrigemId` - visualizar o extrato de uma conta através de seu id

### API online

Nós fizemos questão de disponibilizar nossa API online através do Heroku! Corre lá pra conferir :)

(<https://bancoava.herokuapp.com/>)



### Contribuindo com o projeto

1. Faça o _fork_ do projeto (<https://github.com/grayceferreira/bancoava2/fork>)
2. Crie uma _branch_ para sua modificação (`git checkout -b feature/nomedasuabranch`)
3. Faça o _commit_ (`git commit -m 'Adicione o nome do seu commit de maneira clara aqui'`)
4. Faça o _Push_ (`git push origin feature/fooBar`)
5. Crie um novo _Pull Request_


#### Orgulhosamente desenvolvido por:

- https://github.com/caioabreu
- https://github.com/diogo65
- https://github.com/kruschewskyfe
- https://github.com/grayceferreira
