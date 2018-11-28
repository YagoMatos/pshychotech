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
    endereco: {
        type: String,
        require: true,
    },
    enable: {
        type: Boolean,
        require: true,
        default: true,
    }
});

const Patient = mongoose.model('Patient', PatientSchema);
module.exports = Patient;