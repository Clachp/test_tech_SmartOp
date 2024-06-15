const express = require('express');
const { Surgeon, Intervention } = require('../Models');

const GetFavoriteIntem = (item) => {

}

/**
 * Pour chaque surgeon
 * {
 *  surgeon:
 * speciality:
 * nr of interventions:
 * favortie nurse
 * favorite anesth
 * favorite intervnetion title}
 */

exports.getSurgeonsIntervention = async (id) => {
  const surgeon = await Surgeon.findById(id);
  console.log("get surgeon: ", surgeon)
  // for (intervention_id of surgeon.interventions) {
  //   const res = Intervention.findById(intervention_id)
  //   console.log("res : ", res)
  // }
}

exports.getAllSurgeons = async () => {
  Surgeon.find({})
  .then(
    (Surgeon) => {
      res.status(200).json(Surgeon);
    })
  .catch(
    (error) => {
      res.status(404).json({
        error: error
      });
    }
  );
}

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
