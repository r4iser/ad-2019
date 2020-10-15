const express = require('express');
const routes = express.Router();

const Amigo = require('./models/Amigo');


//Listar
routes.get('/ListAmigos', async (req, res) => {
    try {
        const Amigos = await Amigo.find();
        res.json(Amigos);
    }catch(err) {
        res.json({message: err});
    }
});

//Cadastrar
routes.post('/CreateAmigos', async (req, res) => {
    const amigo = new Amigo({
        name: req.body.name,
        email: req.body.email,
        amigo: null
    });
    try {
    const savedAmigo = await amigo.save();
    res.json(savedAmigo);
    } catch(err) {
        res.json({message: err});
    }
    });

//Editar
    routes.patch('/UpdateAmigos/:AmigoId', async (req, res) => {
        try {
            const updateAmigo = await Amigo.updateOne({ _id : req.params.AmigoId },
                { $set : { name : req.body.name, email : req.body.email, amigo : req.body.amigo } }
            );
            res.json(updateAmigo);
        }catch(err) {
            res.json({message: err});
        }
    });

//Apagar
    routes.delete('/RemoveAmigos/:AmigoId', async (req, res) => {
        try {
            const removePost = await Amigo.remove({ _id : req.params.AmigoId });
            res.json(removePost);
        }catch(err) {
            res.json({message: err});
        }
    });

//Sortear
    routes.get('/SortAmigos', async (req, res) => {
        try {
            const posts = await Amigo.find();
            res.json(posts);
        }catch(err) {
            res.json({message: err});
        }
    });

module.exports = routes;