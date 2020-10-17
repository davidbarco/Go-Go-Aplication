const mongoose = require('mongoose')
const Schema = mongoose.Schema


const LocalSchema = Schema({
    name: String,
    clasificacion: String,
    descripcion: String,
    sector:String,
    telefono:String,
    email:String,
    password: String,
    direccion:String,
    latitud:String,
    longitud:String,
    estado: String,
    image: String,
   /*  nickname: String,
	internalid: String,
    favorites: String, */
})


module.exports = mongoose.model('Local', LocalSchema)