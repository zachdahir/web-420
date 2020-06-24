/*
============================================
; Title: Assignment 2.4
; Author: Zachary Dahir
; Date: 5/05/20
; Description: api-catalog
;===========================================
*/

/*
API Routes
*/

var express = require('express');
var router = express.Router();
var auth_controller = require('../controllers/authController');
var checkToken = require('../check-token')

// POST request for registering a user
router.post('/auth/register', auth_controller.user_register);

//Login
router.post('/auth/login', auth_controller.user_login);

//Logout
router.get('/auth/logout', auth_controller.user_logout);

// GET request for verifying user tokens
router.get('/auth/token', checkToken, auth_controller.user_token);

module.exports = router;
