const Amigo = require('../models/Amigo');

//Listar
exports.listAmigos_get = async (req, res) => {
    try {
        const Amigos = await Amigo.find();
        res.json(Amigos);
    }catch(err) {
        res.json({message: err});
    }
};

//Cadastrar
exports.registerAmigos_post = async (req, res) => {
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
    };

    //Editar
    exports.updateAmigos_patch = async (req, res) => {
        try {
            const updateAmigo = await Amigo.updateOne({ _id : req.params.AmigoId },
                { $set : { name : req.body.name, email : req.body.email, amigo : req.body.amigo } }
            );
            res.json(updateAmigo);
        } catch(err) {
            res.json({message: err});
        }
    };

    //Apagar
    exports.removeAmigos_delete =  async (req, res) => {
        try {
            const removePost = await Amigo.remove({ _id : req.params.AmigoId });
            res.json(removePost);
        } catch(err) {
            res.json({message: err});
        }
    };

    //Sortear
    exports.sortAmigos_get =  async (req, res) => {
        try {
            const posts = await Amigo.find();
            res.json(posts);
        }catch(err) {
            res.json({message: err});
        }
    };