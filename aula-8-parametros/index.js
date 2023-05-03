// o express é o módulo, então vamos carregar este módulo
const express =  require("express");

// a constante app cria uma instancia, uma cópia do framework
const app = express(); 

app.get("/ola/:nome", function(req, res){
    res.send("Ola " + req.params.nome)
});


app.listen(8081, function(){ 
    console.log("Servidor rodando na url http://localhost:8081");
});

