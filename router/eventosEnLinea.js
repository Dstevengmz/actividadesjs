const express=require('express');
const router=express.Router();
const EventosEnLineaa =require('../controllers/eventosEnLinea');

router.get("/mensaje",);
router.post("/insertar",EventosEnLineaa.insetarEventos);
router.delete("/eliminar/:id",EventosEnLineaa.eliminarEvento);
router.put("/actualizar/:id",EventosEnLineaa.actualizarEvento);
router.post("/cancelar", EventosEnLineaa.cancelarInscripcion);
router.post("/inscripcion", EventosEnLineaa.inscribirUsuario);
router.get("/informe", EventosEnLineaa.generarInforme);
module.exports = router;
