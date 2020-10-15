const express = require('express');
const routes = express.Router();
const Amigo = require('./models/Amigo');
const AmigoController = require('./controllers/AmigoController');



//Listar
routes.get('/ListAmigos', AmigoController.listAmigos_get);
//Cadastrar
routes.post('/CreateAmigos', AmigoController.registerAmigos_post);
//Editar
routes.patch('/UpdateAmigos/:AmigoId', AmigoController.updateAmigos_patch);
//Apagar
routes.delete('/RemoveAmigos/:AmigoId', AmigoController.removeAmigos_delete);

//Sortear
routes.get('/SortAmigos', AmigoController.sortAmigos_get);

module.exports = routes;