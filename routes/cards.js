const express = require('express');
const router = express.Router();
const {data} = require('../data/switchCardData.json');
const {cards} = data;



router.get('/', (req,res)=>{
    const numOfCards = cards.length;
    const switchcardsID = Math.floor(Math.random() * numOfCards);
    res.redirect(`/cards/${switchcardsID}?side=question`);


});




router.get('/:id', (req,res)=>{
    const {side} = req.query;
    const {id} =  req.params;


    if(!side){
       return res.redirect(`/cards/${id}?side=question`);

    }
    const text = cards[id][side];
    const {hint} = cards[id];

    const name = req.cookies.username;


    const templateData =  {text,id,name};
    if(side ==='question'){
        templateData.hint = hint;
        templateData.sideToShow= 'answer';
        templateData.sideToShowDisplay = 'Answer';
    }else if(side==='answer'){
        templateData.sideToShow= 'question';
        templateData.sideToShowDisplay = 'Question';
    }

    res.render('card',templateData);
});


module.exports = router;