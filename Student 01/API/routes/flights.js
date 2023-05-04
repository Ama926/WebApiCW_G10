const express = require('express');
const router = express.Router();

const app = express()

//CREATE
router.post('/', async (req, res) => {
    try {
        const product = await Product.create(req.body)
        res.status(200).json(product);
    } catch (error) {
        console.log(error.message);
        res.status(500).json({ message: error.message })
    }
});

//UPDATE
//DELETE
//GET
//GET ALL
router.get('/',  (req, res) => {
    res.send('Hello this is flight')
})

module.exports = router;
