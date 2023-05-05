const express = require('express');
const User = require('../models/userModel');
const router = express.Router();
router.use(express.json());
//const verifyToken = require ('../utils/verifyToken');




//UPDATE
router.put('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const user = await User.findByIdAndUpdate(id, req.body);
        if (!user) {
            return res.status(404).json({ message: `cannot find any user with ID ${id}` });
        }
        const updatedUser = await User.findById(id);
        res.status(200).json(updatedUser);
    } catch (error) {
        console.log(error.message);
        res.status(500).json({ message: error.message })
    }
})

//DELETE
router.delete('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const user = await User.findByIdAndDelete(id);
        if (!user) {
            return res.status(404).json({ message: `cannot find any user with ID ${id}` });
        }
        res.status(200).json(' User has been deleted');
    } catch (error) {
        console.log(error.message);
        res.status(500).json({ message: error.message })
    }
})

//GET
router.get('/:id', async (req, res, next) => {
    const failed = true
    const err = new Error()

    if (failed) {
        err.status = 404;
        err.message = "Sorry not found!";
        return next(err)
    }

    try {
        const { id } = req.params;
        const user = await User.findById(id)
        res.status(200).json(user);
    } catch (err) {
        console.log(error.message);
        next(err);
    }
})

//GET ALL
router.get('/', async (req, res, next) => {

    const failed = true
    const err = new Error()
    err.status = 404;
    err.message = 'Sorry not found!';
    if (failed) return next(err)

    try {
        const users = await User.find({})
        res.status(200).json(users);
    } catch (err) {
        console.log(error.message);
        next(err);
    }
})

// router.get('/checkauthentication', verifyToken, (req, res,next) => {
//     res.send('Hello user, you are authenticated')
// })

module.exports = router;
