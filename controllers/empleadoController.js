const Empleado = require("../models/Empleado");

exports.loginEmpleado = async (req,res) => {
    try{
        const {usuario, contrasenia} = req.body;
        Empleado.findOne({usuario}, (err, user) => {
            if(err){
                res.status(500).send('Error de Autentificación');
            }else if(!user){
                res.status(500).send('Empleado no existe');
            }else{
                if(contrasenia == user.contrasenia){
                    res.json({ rol: user.rol});
                }else{
                    res.status(500).send('Usuario y/o Contraseña Incorrecta');
                }
            }
        });

    }catch (e){
        console.log(e);
        res.status(500).send('Error en el ingreso');
    }
}

exports.crearEmpleado = async (req,res) => {
    try{
        let empleado;
        empleado = new Empleado(req.body);
        empleado.usuario = empleado.nombres.replace(" ", "").toLowerCase();
        await empleado.save()
        res.send(empleado);
    }catch (e){
        console.log(e);
        res.status(500).send('Error en la consulta');
    }
}

exports.obtenerEmpleados = async (req,res) => {
    try{
        const empleados = await Empleado.find({rol: 'empleado'});
        res.json(empleados)

    }catch (e) {
        console.log(e);
        res.status(500).send('Error lectura de datos');
    }
}

exports.actualizarEmpleado = async (req,res) => {
    try{
        const{ cedula, nombres, apellidos, email } = req.body;
        let empleado = await Empleado.findById(req.params.id);

        if(!empleado) {
            res.status(400).json({msg: 'El empleado no existe'});
        }

        empleado.cedula = cedula;
        empleado.nombres = nombres;
        empleado.apellidos = apellidos;
        empleado.email = email;

        empleado = await Empleado.findOneAndUpdate({_id:req.params.id}, empleado, {new :true});
        res.json(empleado);

    }catch (e) {
        console.log(e);
        res.status(500).send('Error actualización de datos');
    }
}

exports.obtenerEmpleado = async (req,res) => {
    try{
        const{ cedula, nombres, apellidos, email } = req.body;
        let empleado = await Empleado.findById(req.params.id);

        if(!empleado) {
            res.status(400).json({msg: 'El empleado no existe'});
        }

        res.json(empleado);

    }catch (e) {
        console.log(e);
        res.status(500).send('Error actualización de datos');
    }
}

exports.eliminarEmpleado = async (req,res) => {
    try{
        const{ cedula, nombres, apellidos, email } = req.body;
        let empleado = await Empleado.findById(req.params.id);

        if(!empleado) {
            res.status(400).json({msg: 'El empleado no existe'});
        }

        await Empleado.findByIdAndRemove({ _id: req.params.id });
        res.json({ msg: 'Empleado eliminado correctamente'});

    }catch (e) {
        console.log(e);
        res.status(500).send('Error actualización de datos');
    }
}

exports.actualizarInfoEmpleado = async (req,res) => {
    try{
        const{ cedula, nombres, apellidos, email, fechaNacimiento, dirDomicilio, telefonoMovil } = req.body;
        let empleado = await Empleado.findById(req.params.id);

        if(!empleado) {
            res.status(400).json({msg: 'El empleado no existe'});
        }

        empleado.cedula = cedula;
        empleado.nombres = nombres;
        empleado.apellidos = apellidos;
        empleado.email = email;
        empleado.fechaNacimiento = fechaNacimiento;
        empleado.dirDomicilio = dirDomicilio;
        empleado.telefonoMovil = telefonoMovil;

        empleado = await Empleado.findOneAndUpdate({_id:req.params.id}, empleado, {new :true});
        res.json(empleado);

    }catch (e) {
        console.log(e);
        res.status(500).send('Error actualización de datos');
    }
}