const { User } = require('../models/user');
const { hashedPassword, comparePassword } = require('../utils/bcrypt');
const { validateSignUp, validateLogin } = require('../validations/user.validation');
const AppError = require('../utils/appError');
const jwt = require('jsonwebtoken');

const signUp = async(req, res, next) => {
     
    const { error } = await validateSignUp(req.body);
     
    if (error) return next(new AppError(error.message, 400));

    // check if user exists
    const existingUser = await User.findOne({
        email: req.body.email, 
    });

    if (existingUser) return next(
        new AppError('User already exists', 400)
    )

    const hashedPass = await hashedPassword(req.body.password);
    
    //if user doesn't exist, create new user
    const newUser = await User.create({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        username: req.body.username,
        email: req.body.email,
        password: hashedPass,
    });

    newUser.password = hashedPass;

    res.status(201).json({
        success: true,
        message: 'registration successful',
        newUser,
    })
};


const login = async (req, res, next) => {
    // validate the body of the request.
    const { error } = await validateLogin(req.body);
    if (error) return next(new AppError(error.message, 400));

    // check if user exists
    const { username, password } = req.body;
    const existingUser = await User.findOne({ username });
    if (!existingUser)
        return next(
            new AppError(
                "Username doesn't exist, Please use the sign up route",
                401
            )
        );
    
    // check if passwords match    
    await comparePassword(password, existingUser.password);

    // return error if passwords don't match
    if (!(await comparePassword(password, existingUser.password)))
        return next(new AppError('Invalid email or password', 401));

    // if password is correct, generate a token and send to client
    const token = jwt.sign(
        { id: existingUser.id },
        process.env.JWT_SECRET,
        {
            expiresIn: process.env.JWT_EXPIRES_IN,
        }
    );
    
    return res.status(200).json({
        status: 'success',
        message: 'Login successful',
        user: existingUser,
        token: token
    });
};

module.exports = { signUp, login };