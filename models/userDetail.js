const mongoose = require('mongoose');

const userDetailSchema = mongoose.Schema({
    user_id: { type: mongoose.Schema.Types.ObjectId, ref: 'users' }, // Assuming 'User' is the model name
    age: Number,
    permanatAddress: Number,
    city: String,
    state: String
});

const UserDetail = mongoose.model('UserDetail', userDetailSchema);


module.exports = UserDetail;
