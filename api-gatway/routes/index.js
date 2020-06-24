/*
============================================
; Title: Assignment 2.3
; Author: Zachary Dahir
; Date: 5/10/20/2020
; Description: Index 
;===========================================
*/

var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
