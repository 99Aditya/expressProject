const express= require('express');
const routes = express.Router();
const couponRoute = require('../controllers/restaurant/couponController');
// const {couponValidations} = require('../validation/couponValidation');

routes.post('/addCoupon',couponRoute.addCoupon);
routes.get('/allCoupons',couponRoute.allCoupons);
routes.post('/getCoupon',couponRoute.getCoupon);

module.exports = routes;