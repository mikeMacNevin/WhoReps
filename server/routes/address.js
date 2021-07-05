const express = require('express');
const router = express.Router()



//    /ADDRESS - ROUTE
router.get('/', function (req, res) {
    res.send("Hey jude")
})

router.get('/:addressId', function (req, res) {
    res.send(`What it do? ${req.params.addressId}`)
})

module.exports = router