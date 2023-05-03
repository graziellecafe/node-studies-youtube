
// o express é o módulo, então vamos carregar este módulo
const express =  require("express");

// a constante app cria uma instancia, uma cópia do framework
const app = express(); 

app.get("/", function(req, res){
    res.send("Seja bem vindo ao meu app!");
});

app.get("/sobre", function(req,res){
    res.send("Minha página sobre"); 
});

app.get("/blog", function(req,res){
    res.send("Bem-vindo ao meu blog"); 
});


// funcao de callback sempre é executada quando um evento acontece
// listen pede um único parametro que é a porta. ex: 8081
app.listen(8081, function(){ 
    console.log("Servidor rodando na url http://localhost:8081");
});