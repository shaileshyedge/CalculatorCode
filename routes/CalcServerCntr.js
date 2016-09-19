/**
 * Created by SHAILESH-PC on 3/4/2016.
 */
var express = require('express');
var router = express.Router();
var serverpath = require('../BusinessLogic/CalcProcess.js');
router.post('/add',function(req,res)
{   console.log(req.body.mass);
    console.log(req.body.height);
    var result = serverpath.add(req.body.mass,req.body.height);
    res.send(String(result));
})

module.exports = router;