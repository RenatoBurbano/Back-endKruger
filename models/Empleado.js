const mongoose = require('mongoose');

const EmpleadoSchema = mongoose.Schema({
    cedula: {
        type: String,
        required: true
    },
    nombres: {
        type: String,
        required: true
    },
    apellidos: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    fechaCreacion: {
        type: Date,
        default: Date.now()
    },
    fechaNacimiento: {
        type: String,
        default: ""
    },
    dirDomicilio: {
        type: String,
        default: ""
    },
    telefonoMovil: {
        type: String,
        default: ""
    },
    usuario: {
        type: String,
        default: "abc123"
    },
    contrasenia: {
        type: String,
        default: "abc123"
    },
    rol: {
        type: String,
        default: "empleado"
    }

})

EmpleadoSchema.methods.isCorrectPassord = function(contrasenia, callback){
    bcrypt.compare(contrasenia, this.contrasenia, function(err, same){
        if(err){
            callback(err);
        }else{
            callback(err,same)
        }
    })
}

module.exports = mongoose.model('Empleado', EmpleadoSchema);