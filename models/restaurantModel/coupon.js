const mongoose = require('mongoose');

const couponSchema = mongoose.Schema({
    name: String,
    price: Number,
    type: Number,  // 1 = percentage,2 = flat
    start_date: Date,
    end_date: Date,
});

const coupon = mongoose.model('coupons', couponSchema);
module.exports=coupon;