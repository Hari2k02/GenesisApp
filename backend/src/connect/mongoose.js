require('dotenv').config({ path: '../.env' });
const mongoose = require('mongoose');
const db = 'mongodb+srv://Rishin:Rishin%402002@cluster0.cfa3mts.mongodb.net/Genesis';

mongoose.connect(db, { useNewUrlParser: true, useUnifiedTopology: true, family: 4 })
  .then(result => console.log('connected to db'))
  .catch(err => console.log(err));