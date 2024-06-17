const mongoose = require ('mongoose');

const SurgeonSchema = new mongoose.Schema ({
    name: { type: String, required: true },
    specialty: { type: String, required: true },
    interverventions: [{ type: mongoose.Schema.Types.ObjectId, 
        ref: 'Intervention',
        default:[]
    }]
})

module.exports = mongoose.model('Surgeon', SurgeonSchema);