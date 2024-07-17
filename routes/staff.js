const express= require('express');
const routes = express.Router();
const staffController = require('../controllers/restaurant/staffController');
const categoryController = require('../controllers/restaurant/categoryController');
const menuController = require('../controllers/restaurant/menu');

routes.post('/shiftAdd',staffController.shiftAdd);
routes.post('/staffAdd',staffController.staffAdd);
routes.get('/staffList',staffController.staffList);
routes.post('/staffEdit',staffController.staffEdit);
routes.post('/staffUpdate',staffController.staffUpdate);
routes.post('/staffDelete',staffController.staffDelete);
routes.post('/cateAdd',categoryController.cateAdd);
routes.post('/subcatAdd',categoryController.subcatAdd);
routes.get('/categoryList',categoryController.categoryList);
routes.post('/menuAdd',menuController.menuAdd);
routes.get('/menuList',menuController.menuList);

module.exports = routes;
