const express=require('express');
const router=express.Router();
const EnLinea =require('../controllers/enLineaController');

router.get("/consultarusuarios",EnLinea.listarUsuario);
router.post("/insertar",EnLinea.insertarUsuario);
router.delete("/eliminar:id",EnLinea.eliminarUsuario);
router.put("/actualizar",EnLinea);
router.get("buscar",EnLinea);


router.post('/registro', EnLinea.insertarUsuario);
router.post('/login', EnLinea.iniciarSesion);


module.exports = router;
