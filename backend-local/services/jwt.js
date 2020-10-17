const jwt = require('jwt-simple')
const moment = require('moment')
const secret = 'mi-clave-secreta'


exports.userToken = function(local){
    let payload = {
        sub: local._id,
        name: local.name,
        clasificacion: local.clasificacion,
        descripcion: local.descripcion,
        sector: local.sector,
        telefono: local.telefono,
        email:local.email,
        direccion:local.direccion,
        latitud:local.latitud,
        longitud:local.longitud,
        estado:local.estado,
        image:local.image,
        iat: moment().unix(),
        exp: moment().add(30, 'days').unix
    }

    return jwt.encode(payload, secret)
}

