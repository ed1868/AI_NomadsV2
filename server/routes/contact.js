const express = require('express')
const passport = require('passport')
const router = express.Router()
const User = require('../models/User')
const Message = require('../models/Message');
const { IgnorePlugin } = require('webpack');






router.get('/', (req, res, next) => {
    console.log("PULLING USERS...");

    User.find({}).then(payload => {
        console.log('PULLED USERS : ', payload);
    }).catch(err => {
        if (err) {
            console.log("ERROR : ", err);
        }
    })
})







module.exports = router