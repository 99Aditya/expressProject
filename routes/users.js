const express = require('express');
const routes = express.Router();
const userController = require('../controllers/userController.js');
const {registrationSchema} = require('../validation/userValidation.js');
const userDetailController = require('../controllers/userDetailController.js');
const upload = require('../middleware/multerConfig.js'); // Import multer middleware

routes.get('/', userController.getUsers);
routes.post('/add',registrationSchema, userController.addUser);
routes.post('/update', userController.updateUser);
routes.post('/login', userController.login);

routes.post('/userDetailSave', userDetailController.userDetailAdd);
routes.post('/imageUpload',upload, userController.imageUpload);
routes.post('/editUser', userController.editUser);

module.exports = routes;