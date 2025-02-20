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
}



module.exports = Eventos;
