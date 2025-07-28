const bcrypt = require('bcryptjs');
const User = require('../models/userModel')
const createError = require('../utils/appError');
//register user
exports.signup = async (req, res, next) => {
    try {
        const user = await User.findOne({email: req.body.email})

        if(user) {
            return next(new createError('User already exists', 400));
        }
        const hashedPassword = await bcrypt.has(req.body.password, 12);
        const newUser = await User.create({
            ...req.body,
            password: hashedPassword
        })

        //jwt
    }catch(error){
        next(error)
    }
 }




//login user
  exports.login = async (req, res, next) => { }