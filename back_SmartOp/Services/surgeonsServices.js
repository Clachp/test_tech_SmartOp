const express = require('express');
const { Surgeon, Intervention, SurgeonResponse } = require('../Models');


exports.getAllSurgeons = async () => {
    const surgeons = await Surgeon.find()
    if (!surgeons) {
        throw new Error('surgeons not found')
    }
    const surgeonTab = []
    for (const surgeon of surgeons) {
        const response = new SurgeonResponse(surgeon.name, surgeon.specialty);
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
    console.log("coucou")
    const surgeon = await Surgeon.findById(id)
    if (!surgeon) {
        console.log("erreur surgeon")
        throw new Error('surgeon not found by id')
    }
    const response = new SurgeonResponse(surgeon.name, surgeon.specialty);
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
    if (!surgeons || surgeons.length === 0)      
        throw new Error('surgeon not found by name');

    const surgeonTab = [];
    for (const surgeon of surgeons) {
        const surgeonResponse = new SurgeonResponse(surgeon.name, surgeon.specialty);
        for (const id of surgeon.interverventions) {
            const intervention = await Intervention.findById(id);
            if (!intervention)
                throw new Error('intervention not found')
            surgeonResponse.addIntervention(intervention);
        }
        surgeonResponse.setFavoriteAnesthesiste();
        console.log(surgeonResponse.getFavoriteAnesthesiste());
        surgeonTab.push(surgeonResponse);
    }
    return surgeonTab;
}

getSurgeonsFavoriteitems = async (response) => {

}

