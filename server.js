const express = require('express');
const mongoose = require('mongoose');
const dogsApi = require('./routes/api/dogs-api');
const uploadsApi = require('./routes/api/uploads-api');

// run express
const app = express();

// parse POST requests
app.use(express.json());

app.use(express.static('client'));


// keys from the config file
const db = require('./config/keys').mongoURI;

// connect to mongoDB
mongoose
    .connect(db, {useNewUrlParser:true})
    .then(()=> console.log('MongoDB Connected'))
    .catch(err => console.log(err));



app.use('/api/dogs-api', dogsApi);
app.use('/api/uploads-api', uploadsApi);

// set port 5000 or process.env.PORT for Heroku
const port = process.env.PORT || 5000;

app.listen(port,()=> console.log(`Sever started at port:http://localhost:${port}`))
