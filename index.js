const express = require('express');
const path = require('path');
// const userMiddleware = require('./middleware/user');
var users = require('./routes/users');
var staff = require('./routes/staff');
var coupon = require('./routes/coupon');

// const cors = require('cors')

const dbConnect = require('./db');
const app = express();
app.use(express.static(path.join(__dirname, 'public')));
// app.use(cors())
app.use(express.json())



app.use('/users',users);
// app.use(userMiddleware);
app.use('/staff',staff);
app.use('/coupons',coupon);

dbConnect();



app.listen('3000',() =>{
    console.log("this server is listening on 3000");
})