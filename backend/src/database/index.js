const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/codewave', { useMongoClient: true });
mongoose.Promise = global.Promise;

module.exports = mongoose;