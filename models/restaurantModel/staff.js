const mongoose = require('mongoose');

const staffSchema =new mongoose.Schema({
    name: String,
    staff_id: String,
    staff_role: Number,
    email: String,
    phone: Number,
    employee_type: Number,
    shift_id: Number,
    days:[Object],
    permission:[Object]
});

const staff = mongoose.model('staff', staffSchema);
module.exports = staff;