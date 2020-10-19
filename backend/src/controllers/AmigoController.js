const email_api = require('../services/emailSend');
const Amigo = require('../models/Amigo');

const sendEmail = require('../services/emailSend');


function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
  }

//Listar
exports.amigosList = async (req, res) => {
    try {
        const amigos = await Amigo.find();
        res.json(amigos);
    }catch(err) {
        res.json({message: err});
    }
};

//Cadastrar
exports.amigosRegister = async (req, res) => {
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
    exports.amigosUpdate = async (req, res) => {
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
    exports.amigosDelete =  async (req, res) => {
        try {
            const removePost = await Amigo.remove({ _id : req.params.AmigoId });
            res.json(removePost);
        } catch(err) {
            res.json({message: err});
        }
    };

    //Sortear
    exports.amigosSort =  async (req, res) => {
        try {
            const users = await Amigo.find();

            function shuffle(a) {
                var j, x, i;
                for (i = a.length - 1; i > 0; i--) {
                    j = Math.floor(Math.random() * (i + 1));
                    x = a[i];
                    a[i] = a[j];
                    a[j] = x;
                }
                return a;
            }

            const sortedUsers = shuffle(users); //Embaralha o array de amigos

            for (let i = 0; i < users.length; i++) {
                if(i == users.length - 1) {         //O último tira o primeiro
                    await Amigo.updateOne({ _id : users[i]._id },
                        { $set : { amigo : users[0]._id } } );
                } else {                            //O restante tira o próximo
                    await Amigo.updateOne({ _id : users[i]._id },
                        { $set : { amigo : users[i+1]._id } } );
                }
            }

        }catch(err) {
            res.json({message: err});
        }
    };

    exports.amigosMail = async (req, res) => {
        try {  //Adicionar email à todos
            const users = await Amigo.find();
            for (let i = 0; i < users.length; i++) {
                console.log('teste');
                sendEmail(users[i].name, users[i].amigo);  
            }

        }catch(err) {
            console.log(err);
        }
    }