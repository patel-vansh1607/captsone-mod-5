const User = require('../models/userModel')
//register user
exports.signup = async (req, res, next) => {
    try {
        const user = await User.findOne({email: req.body.email})

        if(user) {
            return next(new createError);
        }
    }catch(error)
 }




//login user
  exports.login = async (req, res, next) => { }