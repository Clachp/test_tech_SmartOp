const express = require('express');
const { Surgeon, Intervention } = require('./Models');

const getSurgeonById = (req, res) => {
    Surgeon.findOne({
        _id: req.params.id
      }).then(
        (Surgeon) => {
          res.status(200).json(Surgeon);
        }
      ).catch(
        (error) => {
          res.status(404).json({
            error: error
          });
        }
      );
}

const getSurgeonByName = (req, res) => {
    Surgeon.findOne({
        name: req.params.name
      }).then(
        (Surgeon) => {
          res.status(200).json(Surgeon);
        }
      ).catch(
        (error) => {
          res.status(404).json({
            error: error
          });
        }
      );
}

module.exports = controller;