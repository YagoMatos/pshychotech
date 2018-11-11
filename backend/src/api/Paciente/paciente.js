const restful = require('node-restful')
const mongoose = restful.mongoose

const pacienteSchema = new mongoose.Schema({
    nome: { type: String, require: true },
    email: { type: String, require: true }
})

module.exports = restful.model('paciente', pacienteSchema)