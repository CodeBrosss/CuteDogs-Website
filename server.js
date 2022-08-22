const app = require('./app');
const mongoose = require('mongoose');
const dotenv = require("dotenv");
dotenv.config({});

// CONNECT TO MONGO DB
const ConnectDB = async (cb) => {
    try {
        await mongoose.connect(`${process.env.MONGO_URI}`);
        console.log('Database connected succesfully');
        cb();
    } catch (error) {
        console.log(error);
    }
};


ConnectDB(() => {
    app.listen(process.env.PORT, () => {
        console.log(`Server is now active on port ${process.env.PORT}`);
    });
});