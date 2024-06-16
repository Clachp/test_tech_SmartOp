const express = require('express');
const { Surgeon, Intervention } = require('../Models');
const surgeonService = require('../Services/surgeonsServices');
const mongoose = require('mongoose');
const ObjectId = mongoose.Types.ObjectId;


exports.getAllSurgeons = async (req, res) => {
  try {
    const surgeons = await surgeonService.getAllSurgeons();
    res.status(200).json(surgeons);
  }
  catch (error) {
    res.status(404).json({
      error: error.message
    });
  }
}

exports.getOneSurgeon = async (req, res) => {
  try {
    const id = new ObjectId('666c787bac5a40b64cad6223');
    const surgeons = await surgeonService.getSurgeonById(id)
    res.status(200).json(surgeons);
  }
  catch (error) {
    res.status(404).json({
      error: error.message
    });
  }
}

exports.getSurgeonByName = async (req, res) => {
  try {
    const surgeons = await surgeonService.getSurgeonByName(req.params.name)
    res.status(200).json(surgeons);
  }
  catch(error) {
    res.status(404).json({
      error: error.message
    });
  }
}
