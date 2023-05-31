const express = require('express')
const app = express()
const Home = require('./routes/Home')
require("dotenv").config();
const bodyParser = require('body-parser');


app.use('', Home)
app.use('/resource', express.static("contents"))
app.set('view engine', 'ejs')
app.set('views', 'views')
app.use(bodyParser.urlencoded({ extended: true }));

const PORT = process.env.PORT || 5100;

const server = app.listen(PORT, () => {
    console.log('Server started on ', PORT);
})



