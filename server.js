if (process.env.NODE_ENV !== 'production') { // if app is in development, load dotenv content
    require('dotenv').config()
}

const express = require('express'); // import express
const app = express();
const expressLayouts = require('express-ejs-layouts'); //import view layout package

const indexRouter = require('./routes/index') // import routes
const authRouter = require('./routes/auth.route')

// SET CONFIGURATIONS
app.set('view engine', 'ejs') // set ejs as view engine
app.set('views', __dirname + '/views'); // set path to frontend views
app.set('layout', __dirname + '/layouts/layout') // set layout file
app.use(expressLayouts)
app.use(express.static('public'))

// body parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// CONNECT TO MONGO DB
const mongoose = require('mongoose'); // Import mongoose lib
mongoose.connect(process.env.DATABASE_URL, { // connect to URL
    useNewUrlParser: true
})
const db = mongoose.connection// save mongo db connection in db variable
db.on('error', error => console.error(error)) // if error print error
db.once('open', () => console.log('connected to MongoDB')) // if connected print connected...

app.use('/', indexRouter)
app.use('/auth', authRouter)

app.listen(process.env.PORT || 3000, () => {
    console.log(`Server running on port ${process.env.PORT}`)
})

module.exports = app;