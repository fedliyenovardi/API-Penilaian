'use strict';

var response = require('../reqcode');
var connection = require('../koneksi');

// Controller Structure
// + controller
// |- List Data
// |- Detail Data
// |- Insert Data
// |- Update Data
// |- Hapus Data
// |- Custom Data

// LIST DATA KECAMATAN
exports.Kecamatan = function(req, res){
    connection.query('SELECT * FROM kecamatan', function(error, rows, fields){
        if(error){
            response.servererror(console.log(error), res)
        }else{
            response.ok(rows, res)
        }
    });
};

// DETAIL DATA KECAMATAN
exports.detKecamatan = function(req, res){
    var idkecamatan = req.params.idkecamatan;

    connection.query('SELECT * FROM kecamatan where idkecamatan = ?', 
    [ idkecamatan ],
        function(error, rows, fields){
            if(error){
                response.forbidden(console.log(error), res)
            }else{
                response.ok(rows, res)
            }
        }
    );
};

// INPUT DATA KOTA
exports.tambahKecamatan = function(req, res){

    var nama = req.body.nama;
    var idkota = req.body.idkota;
    // var timestamp = req.body.timestamp;
    
    connection.query('INSERT INTO kecamatan(nama, timestamp, idkota) VALUES (?, now(), ?);',
    [nama, idkota],
        function(error, rows, fields){
            if(error){
                response.servererror(console.log(error), res)
            }else{
                response.created("Data Kecamatan berhasil disimpan", res)
            }
        }
    );
};

// UPDATE DATA KECAMATAN
exports.editKecamatan = function(req, res){

    var idkota = req.body.idkota;
    var nama = req.body.nama;
    var idkecamatan = req.body.idkecamatan;
    
    connection.query('UPDATE kecamatan SET nama = ?, idkota = ? WHERE idkecamatan = ?',
    [ nama, idkota, idkecamatan ],
        function(error, rows, fields){
            if(error){
                response.servererror(console.log(error), res)
            }else{
                response.created("Data kota berhasil diupdate !", res)
            }
        }
    );
};

// HAPUS DATA KECAMATAN
exports.hapusKecamatan = function(req, res){
    
    var idkecamatan = req.body.idkecamatan;

    connection.query('DELETE FROM kecamatan where idkecamatan = ?',
    [ idkecamatan ],
        function(error, rows, fields){
            if(error){
                response.forbidden(console.log(error), res)
            }else{
                response.ok("Data Kota berhasil di hapus!", res)
            }
        }
    );
};