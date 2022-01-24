# 📝 Todo app - lista de tarefas

Por mais simples que pareça essa aplicação, há toda uma complexidade envolvida nos bastidores de seu desenvolvimento. A parte visual, Frontend, foi desenvolvida utilizando as seguintes tecnologias: HTML, CSS, JavaScript e ReactJS a qual faz usos das melhores práticas de desenvolvimento Frontend, como uso de componentes, hooks, e controle de estado.

Além disso, as informações das tarefas são salvas em um banco de dados não relacional, MongoDB, onde a conexão, é feita por uma RestAPI desenvolvida com NodeJS e Express.

Na branch 'master' o controle de estado do frontend foi feito com Context API e Hooks e na branch 'redux', o estado da aplicação foi gerenciado com Redux.

Para executar o projetinho localmente antes rode o <a href="https://github.com/brunohubner/todoapp-api">backend</a>, que também está disponível aqui no meu github.

-   Instalar dependecias:

```
$ npm install
```

-   Rodar em modo desenvolvedor:

```
$ npm start
```

-   Fazer build e rodar em modo produção:

```
$ npm run start:local
```
