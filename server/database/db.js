const mongoose = require('mongoose');
require('dotenv').config();

mongoose.connect(process.env.MONGODB_URI);
const Schema = mongoose.Schema;

const userSchema = new Schema({
    userID: Schema.ObjectId,
    firstname: String,
    lastname: String,
    email: {
        type: String,
        lowercase: true,
        index: true,
        unique: true
    },
    password: String
});

const User = mongoose.model('User', userSchema);



module.exports = User;