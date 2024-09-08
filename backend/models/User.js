const mongoose = require('mongoose');

const Userschema = new mongoose.Schema({
    username: { typr: String, required: true, unique:true},
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
})

module.exports = mongoose.model('User', UserSchema); 