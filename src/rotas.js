const express = require('express');
const {traducao} = require('./controladores.js/traducao');

const rotas = express();

rotas.get("/", traducao);

module.exports = rotas;