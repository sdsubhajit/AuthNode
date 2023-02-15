const userModel = require('../model/userModel')
const bcrypt = require('bcryptjs')
const flash = require('connect-flash')

const register = (req, res) => {
    res.render('register', {
        'message': req.flash('message')
    })
}

const login = (req, res) => {
    res.render('login', {
        'message': req.flash('message')
    })
}

const register_create = async (req, res) => {
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(req.body.password, salt);
    userModel({
        name: req.body.name,
        email: req.body.email,
        passward: hashedPassword
    }).save((err, user) => {
        if (!err) {
            req.flash('message', 'user Added')
            res.redirect('/login')
            console.log(user);
        } else {
            console.log('User Not Added', err);
        }
    })
}


module.exports = {
    register,
    login,
    register_create
}