# api-node-knex
api feita em node usando o knex com sqlite


## cria socket db e configura o modulo do sqlite

npm i knex sqlite3


depois rodar na raiz o "npx knex init" para criar o arquivo de configuracao

setar filename, local onde vai ficar salvo o db e o local onde vai ficar as migrations

```javascript
  development: {
    client: 'sqlite3',
    connection: {
      filename: './src/database/db.sqlite'
    },
    migrations:{
      directory: './src/database/migrations'
    },
    useNullAsDefault: true,
  },
```


## criar migrate

```
npx knex migrate:make nome_migrate
```

## executa as migrations

```
npx knex migrate:latest   
```

`npx knex`   -   lista os comandos


`migrate:rollback`  - apaga as tabelas

`npx knex migrate:status`  - ve as migrations ja executadas
