const mongoose =require('mongoose');
const userSchema = new mongoose.Schema({
    id: { type: Number, required: true },
    name: { type: String, required: true },
    contactNo: { type: Number, required: true },
    address: { type: String, required: true },
    password: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    imageUrl: { type: String },
    passportPhoto: { type: String }
});

 const users = mongoose.model('users', userSchema);

module.exports = users;