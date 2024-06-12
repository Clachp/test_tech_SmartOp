require('dotenv').config();
require('./database')
const express = require('express');

const app = express();

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