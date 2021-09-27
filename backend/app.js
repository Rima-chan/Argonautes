require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const memberCtrl = require('./controllers/member');


const app = express();

mongoose.connect(process.env.DB_MONGO_URL)
  .then(() => console.log('Connected to MongoDB'))
  .catch((error) => console.log(error))

app.use(cors());
app.use(express.json());
app.use(express.urlencoded());
app.post('/api/members', memberCtrl.Register);

module.exports = app;