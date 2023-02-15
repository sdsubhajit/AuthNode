const mongoose = require('mongoose')
const schema = mongoose.Schema

const userSchema = new schema ({
    name : {
        type : String,
        require : true
    },
    email : {
        type : String,
        require : true
    },
    passward : {
        type : String,
        require : true
    },
    isVarified : {
        type : Boolean,
        default : true
    },
})

const schemaData = new mongoose.model('user' , userSchema)

module.exports = schemaData