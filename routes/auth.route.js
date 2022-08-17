const express = require('express')
const router = express.Router() // import router from express
const authController = require('../controllers/auth.controller');


// REGISTER ROUTE
router.route('/register').post(authController.signUp);
// LOGIN ROUTE
router.route('/login').post(authController.login);

module.exports = router;