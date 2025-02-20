let db = require("../config/database")

class Usuario {
static async listarUsuario(req,res){
    const [usuario] = await db.execute('SELECT * FROM usuario');
    res.json(usuario);
    };

static async insertarUsuario(req,res)
{
    let {nombre, email, contrasena,rol}=req.body;
    await db.query("INSERT INTO usuario (nombre,email ,contrasena,rol) VALUES (?,?,?)",[nombre,email,contrasena,rol])
}

static async eliminarUsuario(req,res){
    let {id}=req.params;
    await db.query("delete from usuario where id =?",[id ]);
    }

static  async actualizarUsuario(req,res){
        await db.query("update usuario set nombre =? , email=? , contrasena=?, rol=? where")
    }
}

exports.iniciarSesion = async (req, res) => {
    const { email, contrasena } = req.body;
    const [usuario] = await db.execute('SELECT * FROM usuario WHERE email = ?', [email]);
    if (usuario.length === 0 || contrasena !== usuario[0].contrasena) 
        {
            alert("inicio correctos");
            
    }
};

module.exports = Usuario;
