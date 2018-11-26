const mongoose = require('mongoose');

const ScheduleSchema = new mongoose.Schema({
    title: {
        type: String,
        require: true,
    },
    day: {
        type: String,
        require: true,
    },
    mouth: {
        type: String,
        require: true,
    },
    year: {
        type: String,
        require: true,
    },
    hour: {
        unique: true,
        type: String,
        require: true,
    }
});

const Schedule = mongoose.model('Schedule', ScheduleSchema);
module.exports = Schedule;