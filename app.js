const express = require('express')
const app = express();
const authRouter = require('./routes/auth.route')


// body parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use('/api/v1/auth', authRouter)

module.exports = app;