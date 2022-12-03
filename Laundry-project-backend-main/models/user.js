const mongoose = require('mongoose');
const { Schema } = mongoose

const userSchema = new Schema({
    name: { type: String , required: true},
    email: { type: String , unique:true, required: true},
    phone: { type: Number , unique:true, required: true},
    state: { type: String, required: true },
    district: { type: String, required: true },
    address: { type: String, required: true },
    pincode: { type: String, required: true },
    password: {type: String, required:true}
})

const User = mongoose.model('User',userSchema)

module.exports = User;