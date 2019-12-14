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

// LIST DATA PENILAIAN
exports.Penilaian = function(req, res){
    connection.query('SELECT * FROM penilaian', function(error, rows, fields){
        if(error){
            response.servererror(console.log(error), res)
        }else{
            response.ok(rows, res)
        }
    });
};

// DETAIL DATA PENILAIAN
exports.detPenilaian = function(req, res){
    var idpenilaian = req.params.idpenilaian;

    connection.query('SELECT * FROM penilaian where idpenilaian = ?', 
    [ idpenilaian ],
        function(error, rows, fields){
            if(error){
                response.forbidden(console.log(error), res)
            }else{
                response.ok(rows, res)
            }
        }
    );
};

//TAMBAH DATA PENILAIAN
exports.tambahPenilaian = function(req, res){

    var idkriteria = req.body.idkriteria;
    var idpetugas = req.body.idpetugas;
    var idpengguna = req.body.idpengguna;
    var nilai = req.body.nilai;
    
    connection.query('INSERT INTO penilaian (idkriteria, idpetugas, idpengguna, nilai) VALUES ( ?, ?, ?, ? );',
    [ idkriteria, idpetugas, idpengguna, nilai ],
        function(error, rows, fields){
            if(error){
                response.servererror(console.log(error), res)
            }else{
                response.created("Data Penilaian berhasil disimpan", res)
            }
        }
    );
};

// UPDATE DATA KRITERIA
exports.editPenilaian = function(req, res){

    var idkriteria = req.body.idkriteria;
    var idpetugas = req.body.idpetugas;
    var idpengguna = req.body.idpengguna;
    var nilai = req.body.nilai;
    var idpenilaian = req.body.idpenilaian;
    
    connection.query('UPDATE penilaian SET idkriteria = ?, idpetugas = ?, idpengguna = ?, nilai = ? WHERE idpenilaian = ?',
    [ idkriteria, idpetugas, idpengguna, nilai, idpenilaian ],
        function(error, rows, fields){
            if(error){
                response.servererror(console.log(error), res)
            }else{
                response.created("Data Penilaian berhasil diupdate !", res)
            }
        }
    );
};

// HAPUS DATA PENILAIAN
exports.hapusPenilaian = function(req, res){
    
    var idpenilaian = req.body.idpenilaian;

    connection.query('DELETE FROM penilaian where idpenilaian = ?',
    [ idpenilaian ],
        function(error, rows, fields){
            if(error){
                response.forbidden(console.log(error), res)
            }else{
                response.ok("Data Penilaian berhasil di hapus!", res)
            }
        }
    );
};