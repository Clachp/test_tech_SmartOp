const express = require('express');
const { Surgeon, Intervention, SurgeonResponse } = require('../Models');


exports.getAllSurgeons = async () => {
    const surgeons = await Surgeon.find()
    if (!surgeons) {
        throw new Error('surgeons not found')
    }
    const surgeonTab = []
    for (const surgeon of surgeons) {
        const response = new SurgeonResponse(surgeon.name, surgeon.speciality);
        for (const id of surgeon.interverventions) {
            const intervention = await Intervention.findById(id);
         if (!intervention)
                throw new Error('intervention not found')
            response.addIntervention(intervention);
        }
        surgeonTab.push(response);    
    }
    return surgeonTab;
}

exports.getSurgeonById = async (id) => {
    const surgeon = await Surgeon.findById(id)
    if (!surgeon) {
        console.log("erreur surgeon")
        throw new Error('surgeon not found by id')
    }
    const response = new SurgeonResponse(surgeon.name, surgeon.speciality);
    for (const id of surgeon.interverventions) {
        const intervention = await Intervention.findById(id);
        if (!intervention)
            throw new Error('intervention not found')
        response.addIntervention(intervention);
    }
    return response;
}

exports.getSurgeonByName = async (surgeonName) => {
    const surgeons = await Surgeon.find({ name: surgeonName })
    if (!surgeons) {
        console.log("erreur surgeon name")
        throw new Error('surgeon not found by name')
    }
    const surgeonTab = [];
    for (surgeon of surgeons) {
        const response = new SurgeonResponse(surgeon.name, surgeon.speciality);
        for (const id of surgeon.interverventions) {
            const intervention = await Intervention.findById(id);
            if (!intervention)
                throw new Error('intervention not found')
            response.addIntervention(intervention);
        }
        surgeonTab.push(response);
    }
    return surgeonTab;
}

