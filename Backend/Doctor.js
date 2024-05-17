const mongoose = require('mongoose');

const doctorSchema = new mongoose.Schema({
    Name: {
        type: String,
        required: true
    },
    Branch: {
        type: String,
        required: true
    },
    Hospital: {
        type: String,
        required: true
    },
    Experience: {
        type: Number,
        required: true
    },
    Pic: {
        type: String,
        // not required
    }
    
});

const Doctor = mongoose.model('Doctors', doctorSchema);

module.exports = Doctor;
