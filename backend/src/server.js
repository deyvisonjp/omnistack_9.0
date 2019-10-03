const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');


//Cria um APP
const app = express();

mongoose.connect('mongodb+srv://omnistack:omnistack@clusterapi-0lubb.mongodb.net/test?retryWrites=true&w=majority',{
    useNewUrlParser: true,
    useUnifiedTopology: true,
})

app.use(express.json()); //express pode utilizar formato json
app.use(routes);

//Inicia o servidor na porta 3333
app.listen(3333);