const express = require('express')
const app = express();
const authRouter = require('./routes/auth.route');
const cors = require('cors');

// enable cors
app.use(cors());


// body parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// routes
app.use('/api/v1/auth', authRouter)

module.exports = app;