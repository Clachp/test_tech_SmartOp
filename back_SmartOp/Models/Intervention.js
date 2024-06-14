const mongoose = require ('mongoose');

const InterventionSchema = new mongoose.Schema ({
    title: { type: String, required: true },
    surgeon: { type: String, required: true },
    speciality: { type: String, required: true },
    anesthesiste: { type: String, required: false },
    nurse1: { type: String, required: true },
    nurse2: { type: String, required: false },
    roomNumber: { type: Number, required: true },
    surgeon_id: { type: mongoose.Schema.Types.ObjectId, 
        ref: 'Surgeon', 
     },
})

module.exports = mongoose.model('Intervention', InterventionSchema);