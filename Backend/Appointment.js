const mongoose = require('mongoose');

const appointmentSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    doctor: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    },
    gender: {
        type: String,
        // not required
    },
    dateOfBirth: {
        type: String,
        // not required
    }
});

const Appointment = mongoose.model('Appointment', appointmentSchema);

module.exports = Appointment;
