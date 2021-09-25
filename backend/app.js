require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const memberCtrl = require('./controllers/member');


const app = express();

mongoose.connect(process.env.DB_MONGO_URL)
.then(() => console.log('Connected to MongoDB'))
.catch((error) => console.log(error))

app.use(express.urlencoded({extended: false}))
app.post('/api/members', memberCtrl.Register);

module.exports = app;