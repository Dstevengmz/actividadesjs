const mysql=require('mysql2');

const db = mysql.createPool(
{
        host:"localhost",
        user:"root",
        password:null,
        database:"darwin",
        port:3306
});

module.exports = db.promise();
