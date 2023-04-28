// o express é o módulo
const express = require("express");

// const app = criacao de variacao app está recebendo a funcao express que vem do modulo express, criando uma instancia, ou seja, cria uma copia inteira do framework dentro do express
const app = express();

// funcao de callback: é executada sempre que algum evento acontece

//localhost:8081
app.listen(8081);
