# node-studies-youtube

Learning node from classes at Youtube: Victor Lima

## Módulos

```js
var soma = function (a, b) {
  return a + b;
};

module.exports = soma;


No módulo calc você cria:
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
