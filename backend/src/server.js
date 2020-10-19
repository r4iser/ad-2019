require('dotenv').config();

const databaseConnect = require('./services/mongoDB.js');
const express = require('express');
//const mongoose = require('mongoose');
const cors = require('cors');

const routes = require('./routes');

const app = express();

databaseConnect();
/*const db_username = process.env.DB_USER;
const db_password = process.env.DB_PASS;
const db_name = process.env.DB_NAME;
const URI = 'mongodb+srv://' + db_username + ':' + db_password + '@cluster0.re8o9.mongodb.net/' + db_name + '?retryWrites=true&w=majority';
mongoose.connect(URI, { useUnifiedTopology: true, useNewUrlParser: true })
  .then(db => console.log("Conectado com sucesso ao banco de dados."))
  .catch(err => console.log(">> ERROR: ",err));*/

app.use(cors({ origin: 'http://localhost:3001' }));
app.use(express.json());
app.use(routes);



app.listen(3000);