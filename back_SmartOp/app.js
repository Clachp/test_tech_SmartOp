require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');

const app = express();

mongoose.connect(process.env.DB_ADDRESS,
  { useNewUrlParser: true,
    useUnifiedTopology: true })
  .then(() => console.log('Connexion à MongoDB réussie !'))
  .catch(() => console.log('Connexion à MongoDB échouée !'));

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
  next();
});

// GET ALL SURGEONS
app.use('/api/surgeons', (req, res) => {
  const surgeons = [{
    "id": 1,
    "surgeon": "BLUC",
    "specialty": "Cardiologie"
  },
  {
    "id": 2,
    "surgeon": "COTERE",
    "specialty": "Chirurgie viscérale"
  },]
  res.status(200).json(surgeons);
});

//GET SURGEON BY NAME

//GET SURGEON BY ID

//GET ALL INTERVENTIONS

//GET INTERVENTIONS BY SURGEON 

module.exports = app;