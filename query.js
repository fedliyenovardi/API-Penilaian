// var response = require('./reqCode');
var connection = require('./koneksi');

// FUNGSI MENAMPILKAN SEMUA DATA
const getKota = (req, res) =>{
    connection.query('SELECT * FROM kota', (error, result) =>{
        if(error){
            throw error
        }
        res.status(200).json(result.rows)
    } )
}

module.exports={
    getKota

}