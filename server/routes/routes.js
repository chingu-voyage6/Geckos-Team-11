const express = require('express');
const route = express();

//:::::HANDLE ALL BOARD REQUESTS
route.get('/board', (req, res)=>{
    res.send({'board': 'Success!'});
});

//:::::HANDLE ALL PRACTICE REQUESTS
route.get('/practice', (req, res)=>{
    res.send({'practice': 'Success!'});
});

//:::::HANDLE ALL PROFILE REQUESTS
route.get('/profile', (req, res)=>{
    res.send({'profile': 'Success!'});
});

module.exports = routes;