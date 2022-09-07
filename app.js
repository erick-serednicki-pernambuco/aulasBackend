const express = require('express');

const indexRouter = require('./routs/index');
const contatosRouter = require('./routs/contatos');

const app = express();
app.use(express.json()); //vem algo na req JSON req.body
 

app.use('/', indexRouter); //incluir o middleware da rota
app.use('/Contatos', contatosRouter); //incluir o middleware da rota







module.exports = app;
