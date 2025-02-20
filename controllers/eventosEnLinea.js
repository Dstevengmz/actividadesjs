let db = require("../config/database")

class Eventos {

static async listarEventos(req,res){
    const [eventos] = await db.execute('SELECT * FROM eventos');
    res.json(eventos);
    };

static async insetarEventos(req,res)
{
    let {nombre, descripcion, fechaHora,lugar,capacidad}=req.body
    await db.query("INSERT INTO eventos (nombre,descripcion ,fechaHora,lugar,capacidad) VALUES (?,?,?)",[nombre,descripcion,fechaHora,lugar,capacidad])
}

static async eliminarEvento(req,res){
    let {id}=req.params;
    await db.query("delete from eventos where id =?",[id ]);
    }

static  async actualizarEvento(req,res){
        await db.query("update eventos set nombre =? , descripcion=? , fechaHora=?, lugar=?, capacidad=? where")
    }

static async inscribirEvento(req, res) {
        const { id } = req.params;
    
        const [evento] = await db.execute('SELECT * FROM eventos WHERE id = ?', [id]);
        if (evento.length === 0) {
        alert("Evento creado")
        }
        if (evento[0].registrante.length >= evento[0].capacity) {
            alert("esta lleno")
        }
}

static async inscribirUsuario(req, res) 
{
    let { eventoid, usuario_id } = req.body;
    try {
        const [evento] = await db.execute("SELECT * FROM eventos WHERE id = ?", [eventoid]);
        if (evento[0].capacidad_max > 0) {
            await db.query("insert into inscripciones (evento_id, usuario_id) VALUES (?, ?)", [eventoid, usuarioid]);
            await db.query("update eventos set capacidad_max = capacidad_max - 1 WHERE id = ?", [eventoid]);
            res.json({ mensaje: "exitoso" });
        }
    } catch (error) {
    console.log("error")
    }
}

static async cancelarInscripcion(req, res) 
{
    let { eventoid, usuarioid } = req.body;
    try {
        await db.query("delete from  inscripciones where evento_id = ? and usuario_id = ?", [eventoid, usuarioid]);
        await db.query("update eventos set capacidad_max = capacidad_max + 1 where id = ?", [eventoid]);
        res.json({ mensaje: "la incripcion fue cancelada" });
    } catch (error) {
        console.log("error")
    }
}
static async eliminarEvento(req, res) {
    let { id } = req.params;
    try {
        await db.query("delete from eventos where id = ?", [id]);
        alert("Evento ha sido eliminado");
    } catch (error) {
        console.log("error");
    }
}

static async generarInforme(req, res) {
    try {
        const [informes] = await db.execute("select nombre, count(inscripciones.id) as numerodeincripcionbes from eventos left join inscripciones on eventos.id = inscripciones.evento_id GROUP BY eventos.id ORDER BY numerodeincripcionbes DESC");
        res.json(informes);
    } catch (error) {
        console.log("error");
    }
}

}



module.exports = Eventos;
