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
            const users = await Amigo.find();
            let notSortedUsers = [...users];
            const sortedUsers = [];

            for (let i = 0; i < users.length; i++) {
                const options = notSortedUsers.filter((u) => u._id !== users[i]._id);
                // Filtro -> Não tirar o próprio ID
                if (options.length === 0) {
                    const userIndex = Math.floor(Math.random() * sortedUsers.length);
                    await Amigo.updateOne({ _id : users[i]._id },  //Delivera o id da atual iteração
                        { $set : { amigo : sortedUsers[userIndex]._id } } );       //como amigo sorteado do Amigo sorted_id
                    sortedUsers[userIndex].amigo = users[i]._id;
                    sortedUsers.push(users[i]);
                    notSortedUsers = notSortedUsers.filter((u) => u._id !== users[i]._id);
                    continue;
                }
                 // sorteia um
                const index = Math.floor(Math.random() * options.length);
                // define como amigo
                await Amigo.updateOne({ _id : users[i]._id },  //Delivera o id da atual iteração
                    { $set : { amigo : options[index]._id } } );       //como amigo sorteado do Amigo sorted_id
                sortedUsers.push(options[index]);
                //console.log("options");

            }

        }catch(err) {
            res.json({message: err});
        }
    };