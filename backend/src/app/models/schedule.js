const mongoose = require('mongoose');

const ScheduleSchema = new mongoose.Schema({
    title: {
        type: String,
        require: true,
    },
    day: {
        type: String,
    },
    mouth: {
        type: String,
    },
    year: {
        type: String,
    },
    date: {
        type: String,
        require: true
    },
    hour: {
        type: String,
        require: true,
    }
});

const Schedule = mongoose.model('Schedule', ScheduleSchema);
module.exports = Schedule;