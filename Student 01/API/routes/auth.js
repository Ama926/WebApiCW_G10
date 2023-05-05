const express = require('express');
const router = express.Router();
const User = require ('../models/userModel');
const bcrypt = require('bcryptjs');
//const jwt = require('jsonwebtoken');


router.use(express.json());

//register user
router.post('/register',  async(req, res,next) => {
    try {
        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(req.body.password,salt);


        const newUser = new User({
            username:req.body.username,
            email:req.body.email,
            password:hash
        });
        await newUser.save()
        res.status(200).json('user added');
    } catch (err) {
        next(err)
    }
})

//login user
router.post('/login',  async(req, res,next) => {
    try {
        const err = new Error()

        const user = await User.findOne({
            username: req.body.username
        })
        if(!user) {
            err.status = 404;
         err.message ="Sorry not found!";
            return next(err)}

        const isPasswordCorrect = await bcrypt.compare(req.body.password, user.password)
        if(!isPasswordCorrect) {
            err.status = 400;
         err.message ="wrong password!";
            return next(err)
        }

        const {password,isAdmin, ...otherDetails} = user._doc;

    
        res.status(200).json({...otherDetails});
    } catch (err) {
        next(err)
    }
})

//GET ALL
router.get('/', async (req, res,next) => {

    try {
        const users = await User.find({})
        res.status(200).json(users);
    } catch (err) {
        console.log(error.message);
        next(err);
    }
})
module.exports = router;
