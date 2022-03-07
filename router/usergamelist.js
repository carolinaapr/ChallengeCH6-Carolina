const express = require('express');
const router = express.Router;


router.get('/router/usergamelist', (req,res) => {
    res.json('all user biodata');
    next()
})

module.exports=router;