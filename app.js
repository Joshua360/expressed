const express = require('express');

const app = express();
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser')

app.use(bodyParser.urlencoded({ extended: false }))
app.use(cookieParser());
app.use('/static', express.static('public'));

app.set('view engine', 'pug');


const mainRoutes = require('./routes');
const cardRoutes = require('./routes/cards');


app.use(mainRoutes);
app.use('/cards', cardRoutes);


const port = process.env.PORT;
app.listen(port, ()=>{
    console.log(`App is running on post:${port}`);
});


//NB: The name attribute in forms is vital to ensure that our app can read the form submission




 




