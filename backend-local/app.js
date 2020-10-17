const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

const app = express()
app.use(cors())
//cualquier tipo de peticion la convierte en json
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

/* //Rutas

const song_routes = require('./routes/song')
const serie_routes = require('./routes/serie') */
const Local_routes = require('./routes/local')



//middleware
app.use('/api', Local_routes)


// app.get('/pruebas', (req, res) =>{
//     res.status(200).send({message: 'Está conectada nuestra API'})
// })

module.exports = app;