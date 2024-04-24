const mongoose = require('mongoose');
const data = new mongoose.Schema({
    Username : {
        type : String,
        required : true
    },
    Email : {
        type : String,
        required : true
    },
    Password : {
        type : String,
        required : true
    },
    Age : {
        type : Number,
        required : true
    },
    Gender: {
        type : String,
        required : true
    }
    
})
const dataSet = mongoose.model('User',data);

module.exports = dataSet