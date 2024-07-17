const mongoose = require('mongoose');

const shiftSchema = new mongoose.Schema({
    shift_name: String,
    start_time: Date,
    end_time: Date
});

const Shift = mongoose.model('Shift', shiftSchema);

module.exports = Shift;
