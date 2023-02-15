const userModel = require('../model/userModel')


exports.duplicateEntries = (req, res , next)=>{
    userModel.findOne({
        name : req.body.name
    }).exec((err, user)=>{
        if(err){
            console.log(err);
            return
        }
        if(user){
            req.flash('message' , 'UserName Already Exists')
            res.redirect('/')
        }
        userModel.findOne({
            email : req.body.email
        }).exec((err, email)=>{
            if(err){
                console.log(err);
                return;
            }
            if(email){
                req.flash('message' , 'Email Already Exists')
                res.redirect('/')
            }
            const passward = req.body.passward
            const confirmpassward = req.body.confirmpassward
            if(passward !== confirmpassward){
                req.flash('message' , 'Passward & Confirm Passward Are Not Same')
                return res.redirect('/')
            }
            next()
        })
    })
}