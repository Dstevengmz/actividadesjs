const express=require('express');
const router=express.Router();
const EventosEnLineaa =require('../controllers/eventosEnLinea');


router.get("/mensaje",);
router.post("/insertar",EventosEnLineaa.insetarEventos);
router.delete("/eliminar:id",EventosEnLineaa.eliminarEvento);
router.put("/actualizar",EventosEnLineaa.actualizarEvento);
router.get("buscar",);


module.exports = router;
