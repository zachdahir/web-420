/*
============================================
; Title: Assignment 2.4
; Author: Zachary Dahir
; Date: 5/05/20
; Description: User Model
;===========================================
*/

//require statement
var mongoose = require("mongoose");

//create user schema with three fields
var userSchema = new mongoose.Schema({
    username: String,
    password: String,
    email: String
});

//export schema
User = module.exports = mongoose.model('User', userSchema);

module.exports.add = (user, callback) => {
    user.save(callback);
};

module.exports.getById = (id, callback) => {
    var query = {_id: id};
    User.findById(query, callback);
};

module.exports.getOne = (e, callback) => {
    var query = {email: e};
    User.findOne(query, callback);
};