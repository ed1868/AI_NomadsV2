const express = require('express')
const passport = require('passport')
const router = express.Router()
const User = require('../models/User')
const Message = require('../models/Message');






router.get('/he', (req,res,next) => {
  console.log('THIS IS WHATS UP')  
})







module.exports = router