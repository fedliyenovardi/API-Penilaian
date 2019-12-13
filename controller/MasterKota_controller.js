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

// LIST DATA KOTA
exports.Kota = function(req, res){
    connection.query('SELECT * FROM kota', function(error, rows, fields){
        if(error){
            response.servererror(console.log(error), res)
        }else{
            response.ok(rows, res)
        }
    });
};
// DETAIL DATA KOTA
exports.detKota = function(req, res){
    var idkota = req.params.idkota;

    connection.query('SELECT * FROM kota where idkota = ?', 
    [ idkota ],
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
exports.tambahKota = function(req, res){

    var nama = req.body.nama;
    var timestamp = req.body.timestamp;
    
    connection.query('INSERT INTO kota(nama, timestamp) VALUES (?, now());',
    [nama, timestamp],
        function(error, rows, fields){
            if(error){
                response.servererror(console.log(error), res)
            }else{
                response.created("Data Kota berhasil disimpan", res)
            }
        }
    );
};
// UPDATE DATA KOTA
exports.editKota = function(req, res){

    var idkota = req.body.idkota;
    var nama = req.body.nama;
    var timestamp = req.body.timestamp;
    
    connection.query('UPDATE kota SET nama = ?, timestamp = now() WHERE idkota = ?',
    [ nama, idkota ],
        function(error, rows, fields){
            if(error){
                response.servererror(console.log(error), res)
            }else{
                response.created("Data kota berhasil diupdate !"+idkota+nama+timestamp, res)
            }
        }
    );
};
// HAPUS DATA KOTA
exports.hapusKota = function(req, res){
    
    var idkota = req.body.idkota;

    connection.query('DELETE FROM kota where idkota = ?',
    [ idkota ],
        function(error, rows, fields){
            if(error){
                response.forbidden(console.log(error), res)
            }else{
                response.ok("Data Kota berhasil di hapus!", res)
            }
        }
    );
};