const Amigo = require('../models/Amigo');

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
            const amigos = await Amigo.find();
            amigos.forEach(async (element, index, array) => {
                let size = amigos.length;
                let roll = getRandomInt(0, size);
                let sorted_id = amigos[roll]._id;   //Pega um id random de amigos[] em cada run
                try {
                    //TODO: Checar se o sorteado sorteou à 
                    await Amigo.updateOne({ _id : sorted_id },  //Delivera o id da atual iteração
                    { $set : { amigo : element._id } } );       //como amigo sorteado do Amigo sorted_id
                    console.log(index);
                    amigos.splice(index, 1);
                    console.log(amigos);
                    console.log("-----");
                } catch(err) {
                    res.json({message: err});
                }
            });



            //pick = amigos.forEach(getRandomId);

            res.json({ sorted_id });
        }catch(err) {
            res.json({message: err});
        }
    };