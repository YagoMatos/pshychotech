const mongoose = require('mongoose')
require('./mongodbMessages')

//Pega a promisse da Api do Node e Atribui a promisse do mongoose
mongoose.Promise = global.Promise

module.exports = mongoose.connect('mongodb://localhost/pshychotech')

