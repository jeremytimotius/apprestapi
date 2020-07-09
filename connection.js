var mysql = require('mysql');

//buat koneksi ke database
const conn = mysql.createConnection({
    host : 'localhost',
    user : 'root',
    password : '',
    database : 'restfulapi'
});

conn.connect((err)=>{
    if(err) throw err;
    console.log("koneksi ke database berhasil!");
});

module.exports = conn;