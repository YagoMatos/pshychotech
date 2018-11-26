const mongoose = require('mongoose');

const PatientSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true,
    },
    email: {
        type: String,
        require: true,
        lowercase: true,
    },
    cpf: {
        type: String,
        require: true,
        unique: true,
    },
    rg: {
        type: String,
        require: true,
    },
    telefone: {
        type: String,
        require: true,
    },
    celular: {
        type: String,
        require: true,
    },
    plano: {
        type: String,
        require: true,
    },
    enable: {
        type: Boolean,
        require: true,
        default: true,
    },
    report: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Report',
        require: true,
    }],
});

const Patient = mongoose.model('Patient', PatientSchema);
module.exports = Patient;