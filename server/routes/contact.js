const express = require('express')
const passport = require('passport')
const router = express.Router()
const User = require('../models/User')
const Message = require('../models/Message');
const { IgnorePlugin } = require('webpack');

const bcrypt = require('bcrypt')
const bcryptSalt = 10



//GET ROUTE TO GET ALL USERS AND MESSAGES

router.get('/', (req, res, next) => {
    console.log("PULLING USERS...");

    User.find({}).then(payload => {
        console.log('PULLED USERS : ', payload);
    }).catch(err => {
        if (err) {
            console.log("ERROR : ", err);
        }
    });


    console.log("PULLING MESSAGES..");
    Message.find({}).then(payload => {
        console.log('PULLED MESSAGES : ', payload);
    }).catch(err => {
        if (err) {
            console.log("ERROR : ", err)
        }
    })
})


//POST ROUTE THAT WILL BE CALLED WHEN USER SUBMITS CONTACT ME FORM - THIS WILL SAVE USER AUTOMATICALLY TO KEEP TRACK OF USER QUERIES AND USE DATA TO TRAIN AI 


router.post('/request', (req, res, next) => {
    // const { email, phone, subject, text } = req.body

    const email = "info@ainomads.com";
    const username = email;
    const phone = "7866086021"
    const password = bcrypt.hashSync('aiNomads', bcrypt.genSaltSync(bcryptSalt));
    const subject = "just saying test one";
    const text = "please baby dont fuck up my vibe"


    User.findOne({ email }).then(user => {
        if (user != null) {
            // res.status(409).json({ message: "User already exist" });
            // return


            User.updateOne(
                { email: email },
                { $addToSet: { messages: [{ subject, text }] } },
                function (err, result) {
                    if (err) {
                        res.send(err);
                    } else {
                        // res.send(result);
                        console.log(result);
                    }
                }
            )


        }else{
            const salt = bcrypt.genSaltSync(bcryptSalt)
            const hashPass = bcrypt.hashSync(password, salt)
            const newUser = new User({
                username, password: hashPass, phone, email, messages: {
                    subject, text
    
                }
            });
            return newUser.save()
        }

    }).then(userSaved => {
        console.log("USER SAVED: ", userSaved);
    }).catch(err => {
        if (err) {
            console.log('ERROR : ', err);
            res.status(409).json({ message: err });
            return
        }
    })


});






module.exports = router