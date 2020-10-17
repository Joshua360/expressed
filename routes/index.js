const express = require('express');
const router = express.Router();




router.get('/', (req,res)=>{
    const name = req.cookies.username;
    if(name){
        res.render('index', {name:name});  
    }else{
        res.redirect('/hello');

    }

});


router.get('/hello', (req,res)=>{
    const name = req.cookies.username;
    if(name){
        res.redirect('/');
    }else{
        res.render('hello');

    }
});

router.post('/hello', (req,res)=>{
    // console.dir(req.body)
    res.cookie('username', req.body.username);
    res.redirect('/');
});

router.post('/goodbye', (req,res)=>{
    res.clearCookie('username');
    res.redirect('/hello');
});


router.get('/wenare', (req,res)=>{
    res.render('wenare');
});










module.exports = router;