const express = require("express");  //ou posso usar o comando: import express from "express"
const app = express();  //cria uma cópia do framework express inteiro pra dentro da váriavel app, qualquer coisa que eu for usar do express vou usar a partir da variável
const port = 8081;

app.get(`/`, function(req, res){
    res.send(`Hello`)
})

app.get(`/sobre`, function(req, res){
    res.sendFile(__dirname + `/html/sobre.html`)
})

app.get(`/blog`, function(req, res){
    res.send(`Abrindo a página blog`)
})

app.get(`/ola/:nome/:cargo`, function(req,res){
    res.send(`<h1>Olá ${req.params.nome}<h1>`+ `<h1>Sua profissão é ${req.params.cargo}<h1>`)
})


app.listen(port, () => {
    console.log(`o servidor está rodando na porta ${port}`)
})