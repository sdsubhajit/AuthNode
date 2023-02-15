const express = require('express')
const ejs = require('ejs')
const mongoose = require('mongoose')
const flash = require('connect-flash')
const session  = require('express-session')
const cookieParser = require('cookie-parser')


const app = express()
const port = process.env.PORT || 3000
const dataConnection = "mongodb+srv://sdsubhajit24:w0hUsqRkmdYlbmRf@cluster0.uyhkjgq.mongodb.net/resgister";


app.use(express.urlencoded({extended:true}))
app.use(session({
    cookie : {maxAge : 7000},
    secret : 'subhajit',
    resave : false,
    saveUninitialized : false
}))
app.use(flash())
app.use(cookieParser())
app.set('view engine' , 'ejs')
app.set('views' , 'views')

const userRoute = require('./route/userRoute')
app.use(userRoute)

mongoose.connect(dataConnection , ({useNewUrlParser : true , useUnifiedTopology : true}))
.then(result=>{
    app.listen(port , ()=>{
        console.log(`server listening ata http://localhost:${port}`);
        console.log(`DataBase Connected....`);
    })
}).catch(err=>{
    console.log(err);
})
