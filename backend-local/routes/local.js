const express = require('express');
const LocalController = require('../controllers/local')
const mdAuth = require('../middlewares/authenticated')

const multipart = require('connect-multiparty')
const uploadImg = multipart({ uploadDir: './assets/local' })


const api = express.Router()

api.get('/probando-controlador', mdAuth.authUser, LocalController.pruebas)
api.post('/register', LocalController.create)
api.post('/login', LocalController.login)
api.put('/update/:id', uploadImg, LocalController.update)
api.post('/upload-image-user/:id', uploadImg, LocalController.uploadImg)
api.get('/get-image-user/:imgUser', LocalController.getImg)

module.exports = api;