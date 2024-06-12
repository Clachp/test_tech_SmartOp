const mongoose = require ('mongoose');

const SurgeonSchema = new mongoose.Schema ({
    name: { type: String, required: true },
    speciality: { type: String, required: true },
})

module.exports = mongoose.model('Surgeon', SurgeonSchema);