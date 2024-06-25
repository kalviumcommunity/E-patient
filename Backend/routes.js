const express = require('express');
const router = express.Router();
const Members = require('./schema.js');
const Appointment = require('./Appointment');
const Doctor = require('./Doctor.js');
const mongoose = require('mongoose');
const Joi = require('joi');
const jwt = require('jsonwebtoken');

const secretKey = process.env.JWT_SECRET_KEY

const appointmentValidationSchema = Joi.object({
name: Joi.string().required(),
email: Joi.string().email().required(),
doctor: Joi.string().required(),
age: Joi.string().required(),
gender: Joi.string().optional(),
dateOfBirth: Joi.string().optional()
});

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

    const payload = {
        userId: newUser._id,
        email: newUser.Email 
    };


    const token = jwt.sign(payload, secretKey, { expiresIn: '1h' });


    res.status(201).json({ newUser, token });
} catch (error) {
    res.status(400).send('Failed to create user.');
}
});

router.post('/create-appointment', async (req, res) => {


const { error, value } = appointmentValidationSchema.validate(req.body);

if (error) {
    console.log(error);
    return res.send("Invalid request");
}
res.send("successful")
try {
const newAppointment = new Appointment(value);
await newAppointment.save();
res.status(201).json(newAppointment);
} catch (error) {
res.status(400).send('Failed to create appointment.');
}
});
router.post('/logout', (req, res) => {

    res.status(200).send('Logged out successfully');
  });
  

connectDB();

module.exports = router;