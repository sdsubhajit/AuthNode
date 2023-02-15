const express = require('express')
const route = express.Router()
const controller = require('../controller/userController')
const middleware = require('../middleware/userMiddleware')

route.get('/', controller.register)
route.post('/register',controller.register_create)
route.get('/login', controller.login)


module.exports = route

