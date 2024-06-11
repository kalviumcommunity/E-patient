const express = require('express');
const router = express.Router();
const Members = require('./schema.js');
const Appointment = require('./Appointment');
const Doctor = require('./Doctor.js');
const mongoose = require('mongoose');
const Joi = require('joi');

const appointmentValidationSchema = Joi.object({
    name: Joi.string().required(),
    email: Joi.string().email().required(),
    doctor: Joi.string().required(),
    age: Joi.number().integer().min(0).required(),
    gender: Joi.string().optional(),
    dateOfBirth: Joi.string().optional()
});
const validation = (input) => {
    const { error } = appointmentValidationSchema.validate(input);
    if (error) {
        return false;
    } else {
        return true;
    }
};

require('dotenv').config();
router.use(express.json());

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.DB_URI);
        console.log("Mongo Connected");
    } catch (err) {
        console.log("Connection Failed:", err);
    }
};

router.get('/doctors', async (req, res) => {
    try {
        const doc = await Doctor.find({});
        res.json(doc);
    } catch (err) {
        res.status(500).send("Error occurred while fetching doctors");
    }
});

router.get('/users', async (req, res) => {
    try {
        const users = await Members.find({});
        res.json(users);
    } catch (error) {
        res.status(500).send('An error occurred while fetching users.');
    }
});

router.post('/signup', async (req, res) => {
    try {
        const newUser = new Members(req.body);
        await newUser.save();
        res.status(201).json(newUser);
    } catch (error) {
        res.status(400).send('Failed to create user.');
    }
});

router.post('/create-appointment', async (req, res) => {
    
    const { error, value } = appointmentValidationSchema.validate(req.body);

    if (error) {
        return res.status(400).send(error.details[0].message);
    }

    try {
        const newAppointment = new Appointment(value);
        await newAppointment.save();
        res.status(201).json(newAppointment);
    } catch (error) {
        res.status(400).send('Failed to create appointment.');
    }
});


connectDB();

module.exports = router;
