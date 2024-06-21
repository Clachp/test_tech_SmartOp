const express = require('express');
const { Surgeon, Intervention, SurgeonResponse } = require('../Models');


exports.getAllSurgeons = async () => {
    const foundSurgeons = await Surgeon.find({ });
    if (!foundSurgeons || foundSurgeons.length === 0)      
        throw new Error('surgeons not found');

    const surgeonTab = [];
    for (const surgeon of foundSurgeons) {
        const surgeonResponse = new SurgeonResponse(surgeon.name, surgeon.specialty);
        const surgeonObj = await responseBuilder(surgeonResponse, surgeon);
        surgeonTab.push(surgeonObj);
    }
    
    return surgeonTab;
}

exports.getSurgeonByName = async (surgeonName) => {

    const foundSurgeons = await Surgeon.find({ name: surgeonName })
    if (!foundSurgeons || foundSurgeons.length === 0)      
        throw new Error('surgeon not found by name');

    const surgeonTab = [];
    for (const surgeon of foundSurgeons) {
        const surgeonResponse = new SurgeonResponse(surgeon.name, surgeon.specialty);
        const surgeonObj = await responseBuilder(surgeonResponse, surgeon);
        console.log("spé: ", surgeonObj.specialty);
        surgeonTab.push(surgeonObj);
    }

    return surgeonTab;
}

exports.getSurgeonById = async (id) => {
    const surgeon = await Surgeon.findById(id)
    if (!surgeon) 
        throw new Error('surgeon not found by id')

    const responseClass = new SurgeonResponse(surgeon.name, surgeon.specialty);
    const responseObj = await responseBuilder(responseClass, surgeon);

    return responseObj;
}

responseBuilder = async (surgeonResponse, foundSurgeon) => {
    for (const id of foundSurgeon.interverventions) {
        const intervention = await Intervention.findById(id);
        if (!intervention)
            throw new Error('intervention not found')
        surgeonResponse.addIntervention(intervention);
    }
    surgeonResponse.setFavoriteIntervention();
    surgeonResponse.setFavoriteAnesthesiste();
    surgeonResponse.setFavoriteRoom();
    const obj = {
        name: surgeonResponse.getName(),
        specialty: surgeonResponse.getSpecialty(),
        numberOfInterventions : surgeonResponse.getNumberOfInterventions(),
        favoriteIntervention: surgeonResponse.getFavoriteIntervention(),
        favoriteAnesthesiste: surgeonResponse.getFavoriteAnesthesiste(),
        favoriteNurse: "Marceline",
        favoriteRoom: surgeonResponse.getFavoriteRoom(),
    }
    return obj;
}

