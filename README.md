# Node Studies from Course Victor Lima (Youtube)

Learning node from classes at Youtube: Victor Lima

## Módulos

```js
var soma = function (a, b) {
  return a + b;
};

module.exports = soma;


//No módulo calc você cria:
var SomaFunc = require("./soma");
```

## Conceitos backend

- Como fazer requisições e servir um servidor, uma aplicacação HTTP usando node

**HTTP**

- **HTTP**: Protocolo HTTP que você consegue pedir dados, enviar dado.
- **HTTP**: é um protocolo que um cliente se comunique com um servidor
- É por causa do HTTP que conseguimos criar aplicações backend

**NODE**

- Módulo HTTP
- Existem frameworks
- Módulo HTTP no node:

```js
var http = require("http");
var http = require("fs");
```

```js
//servir um servidor http
http.createServer().listen(8081);
console.log("o servidor esta rodando");
```

## Express (Framework)

- Para o que o um framework serve?
  É uma ferramenta que serve para facilitar o seu trabalho quando você utiliza alguma tecnologia como o Node.
- o express é o módulo
- O Express serve pra criar aplicações web backend com Node JS.
- É um framework minimalista

```js
const express = require("express");
const app = express();

app.get("/", function (req, res) {
  res.send("Hello World");
});

app.listen(3000);
```

## Introdução ao Express

O Express é o módulo
```js
const express = require("express");


//const app = criacao de variacao app está recebendo a funcao express que vem do modulo express, criando uma instancia, ou seja, cria uma copia inteira do framework dentro do express

//funcao de callback: é executada sempre que algum evento acontece


const app = express();

const app.listen(8081);


