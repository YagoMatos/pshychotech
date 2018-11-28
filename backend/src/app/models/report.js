const mongoose = require('mongoose');

const ReportSchema = new mongoose.Schema({
    title: {
        type: String,
        require: true,
    },
    description: {
        type: String,
        require: true,
    },
    date: {
        type: String,
        require: true,
    },
    patientId: {
        type: String,
        require: true,
    },
});

const Report = mongoose.model('Report', ReportSchema);
module.exports = Report;