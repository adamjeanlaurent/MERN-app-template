const express = require('express');
const test = require('../models/test');

const router = express.Router();

// @route GET /api/test 
// @desc returns test message
router.get('/', async (req, res) => {
    let result = await test.Get();
    return res.send(result);    
 });

module.exports = router;
