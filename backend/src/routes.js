const express = require('express');
const routes = express.Router();

const Amigo = require('./models/Amigo');


//Listar
routes.get('/ListAmigos', async (req, res) => {
    try {
        const posts = await Amigo.find();
        res.json(posts);
    }catch(err) {
        res.json({message: err});
    }
});

//Cadastrar
routes.post('/CreateAmigos', async (req, res) => {
    const post = new Amigo({
        name: req.body.name,
        email: req.body.email,
        amigo: null
    });
    try {
    const savedPost = await post.save();
    res.json(savedPost);
    } catch(err) {
        res.json({message: err});
    }
    });

//Editar
    routes.get('/EditAmigos', async (req, res) => {
        try {
            const posts = await Amigo.find();
            res.json(posts);
        }catch(err) {
            res.json({message: err});
        }
    });

//Apagar
    routes.get('/DeleteAmigos', async (req, res) => {
        try {
            const posts = await Amigo.find();
            res.json(posts);
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