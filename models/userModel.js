const mongoose =require('mongoose');

const userSchema = mongoose.Schema({
    id:Number,
    name:String,
    contactNo: Number,
    address:String,
    password:String,
    imageUrl: String, // Add a field to store the image URL
    passportPhoto: String // Add a field to store the image URL

});
 const users = mongoose.model('users', userSchema);

module.exports = users;