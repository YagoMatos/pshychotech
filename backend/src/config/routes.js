const express = require('express')

module.exports = function(server) {
    /*
    *
    * 
    */
    // Public route Acess //
    const openApi = express.Router()
    server.use('/oapi', openApi)

    const pacienteService = require('../api/Paciente/pacienteService')
    pacienteService.register(openApi, '/paciente')
}

