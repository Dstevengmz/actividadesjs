const express = require("express");
const app=express();
const EnLinea=require('./router/enlineaRoute');
const EventosEnLinea=require('./router/eventosEnLinea');
const PORT=4002;
app.use("/api",EnLinea);
app.use("/api",EventosEnLinea);



app.listen(PORT,()=>
{
    console.log(`Servidor corriendo en http://localhost:${PORT}`);

})