/*
============================================
; Title: Assignment 1.4
; Author: Zachary Dahir
; Date: 5/01/20/2020
; Description: config api-gateway
;===========================================
*/
var config = {};
config.web = {};
config.web.port = process.env.PORT || '3000';
config.web.secret = 'topsecret'
module.exports = config;