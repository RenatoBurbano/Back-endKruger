const express = require('express');

const router = express.Router();
const empleadoController = require('../controllers/empleadoController')

router.post('/', empleadoController.crearEmpleado);
router.get('/', empleadoController.obtenerEmpleados);
router.put('/:id', empleadoController.actualizarEmpleado)
router.get('/:id', empleadoController.obtenerEmpleado)
router.delete('/:id', empleadoController.eliminarEmpleado)
router.delete('/:id', empleadoController.eliminarEmpleado)
router.post('/login', empleadoController.loginEmpleado)
router.put('/info', empleadoController.actualizarInfoEmpleado)

module.exports = router;