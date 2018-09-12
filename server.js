const express = require('express');
const mongoose = require('mongoose');
const workouts = require('./routes/api/workouts');

// run express
const app = express();

// parse POST requests
app.use(express.json());

// keys from the config file
const db = require('./config/keys').mongoURI;

// connect to mongoDB
mongoose
    .connect(db, {useNewUrlParser:true})
    .then(()=> console.log('MongoDB Connected'))
    .catch(err => console.log(err));

app.use('/api/workouts', workouts);

// set port 5000 or process.env.PORT for Heroku
const port = process.env.PORT || 5000;

app.listen(port,()=> console.log(`Sever started at port:http://localhost:${port}`))
