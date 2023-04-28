var http = require("http");

//servir um servidor http
http
  .createServer(function (req, res) {
    res.end("Hello World!!");
  })
  .listen(8081);
console.log("o servidor esta rodando");
