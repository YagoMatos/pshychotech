const paciente = require('./paciente')
const errorHandler = require('../common/errorHandler')

paciente.methods(['get', 'post', 'put', 'delete'])

paciente.updateOptions({ new: true, runValidators: true})

paciente.after('post', errorHandler).after('put', errorHandler)

module.exports = paciente