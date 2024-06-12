const mongoose = require ('mongoose');

const InterventionSchema = new mongoose.Schema ({
    title: { type: String, required: true },
    surgeon: { type: String, required: true },
    speciality: { type: String, required: true },
    anesthesiste: { type: String, required: true },
    nurse1: { type: String, required: true },
    nurse2: { type: String, required: true },
    roomNumber: { type: Number, required: true },
})

module.exports = mongoose.model('Intervention', InterventionSchema);