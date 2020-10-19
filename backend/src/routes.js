const express = require('express');
const routes = express.Router();
const Amigo = require('./models/Amigo');
const AmigoController = require('./controllers/AmigoController');

//Listar
routes.get('/ListAmigos', AmigoController.amigosList);
//Cadastrar
routes.post('/CreateAmigos', AmigoController.amigosRegister);
//Editar
routes.patch('/UpdateAmigos/:AmigoId', AmigoController.amigosUpdate);
//Apagar
routes.delete('/RemoveAmigos/:AmigoId', AmigoController.amigosDelete);
//Sortear
routes.get('/SortAmigos', AmigoController.amigosMail);

module.exports = routes;