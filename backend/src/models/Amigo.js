const mongoose = require('mongoose');

const AmigoSchema = new mongoose.Schema( {
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    amigo: {
        type: String,
        required: false
    }
});

module.exports = mongoose.model('Amigo', AmigoSchema);