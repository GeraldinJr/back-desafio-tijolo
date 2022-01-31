const express = require('express');
const {traducao} = require('./controladores.js/traducao');

const rotas = express();

rotas.post("/", traducao);

module.exports = rotas;