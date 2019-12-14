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

// LIST DATA KRITERIA
exports.Kriteria = function(req, res){
    connection.query('SELECT * FROM kriteria', function(error, rows, fields){
        if(error){
            response.servererror(console.log(error), res)
        }else{
            response.ok(rows, res)
        }
    });
};

// DETAIL DATA KRITERIA
exports.detKriteria = function(req, res){
    var idkriteria = req.params.idkriteria;

    connection.query('SELECT * FROM kriteria where idkriteria = ?', 
    [ idkriteria ],
        function(error, rows, fields){
            if(error){
                response.forbidden(console.log(error), res)
            }else{
                response.ok(rows, res)
            }
        }
    );
};

//TAMBAH DATA KRITERIA
exports.tambahKriteria = function(req, res){

    var kode = req.body.kode;
    var nama = req.body.nama;
    var idbobot = req.body.idbobot;
    
    connection.query('INSERT INTO kriteria (kode, nama, idbobot) VALUES ( ?, ?, ? );',
    [ kode, nama, idbobot ],
        function(error, rows, fields){
            if(error){
                response.servererror(console.log(error), res)
            }else{
                response.created("Data Kriteria berhasil disimpan", res)
            }
        }
    );
};

// UPDATE DATA KRITERIA
exports.editKriteria = function(req, res){

    var kode = req.body.kode;
    var nama = req.body.nama;
    var idbobot = req.body.idbobot;
    var idkriteria = req.body.idkriteria;
    
    connection.query('UPDATE kriteria SET kode = ?, nama = ?, idbobot = ? WHERE idkriteria = ?',
    [ kode, nama, idbobot, idkriteria ],
        function(error, rows, fields){
            if(error){
                response.servererror(console.log(error), res)
            }else{
                response.created("Data Kriteria berhasil diupdate !", res)
            }
        }
    );
};

// HAPUS DATA KRITERIA
exports.hapusKriteria = function(req, res){
    
    var idkriteria = req.body.idkriteria;

    connection.query('DELETE FROM kriteria where idkriteria = ?',
    [ idkriteria ],
        function(error, rows, fields){
            if(error){
                response.forbidden(console.log(error), res)
            }else{
                response.ok("Data Kriteria berhasil di hapus!", res)
            }
        }
    );
};