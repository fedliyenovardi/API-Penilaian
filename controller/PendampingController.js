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

// LIST DATA PETUGAS
exports.Pendamping = function(req, res){
    connection.query('SELECT * FROM pendamping', function(error, rows, fields){
        if(error){
            response.servererror(console.log(error), res)
        }else{
            response.ok(rows, res)
        }
    });
};

// DETAIL DATA PETUGAS
exports.detPendamping = function(req, res){

    var idpendamping = req.params.idpendamping;

    connection.query('SELECT * FROM pendamping where idpendamping = ?', 
    [ idpendamping ],
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
exports.tambahPendamping = function(req, res){

    var nama = req.body.idkriteria;
    var tgl_lahir = req.body.idpetugas;
    var alamat = req.body.idpengguna;
    var aktif = req.body.nilai;
    var tempat_lahir = req.body.nilai;
    var nik = req.body.nilai;
    var foto = req.body.nilai;
    var idjabatan = req.body.nilai;
    
    connection.query('INSERT INTO pendamping (nama, alamat, tgl_lahir, aktif, tempat_lahir, nik, foto, idjabatan) VALUES ( ?, ?, ?, ?, ?, ?, ?, ? );',
    [ nama, alamat, tgl_lahir, aktif, tempat_lahir, nik, foto, idjabatan ],
        function(error, rows, fields){
            if(error){
                response.servererror(console.log(error), res)
            }else{
                response.created("Data Pendamping berhasil disimpan", res)
            }
        }
    );
};

// UPDATE DATA PETUGAS
exports.editPendamping= function(req, res){

    var nama = req.body.idkriteria;
    var tgl_lahir = req.body.idpetugas;
    var alamat = req.body.idpengguna;
    var aktif = req.body.nilai;
    var tempat_lahir = req.body.nilai;
    var nik = req.body.nilai;
    var foto = req.body.nilai;
    var idjabatan = req.body.nilai;
    var idpendamping = req.body.idpendamping;
    
    connection.query('UPDATE pendamping SET nama = ?, alamat = ?, tgl_lahir = ?, aktif = ?, tempat_lahir = ?, nik = ?, foto = ?, idjabatan = ? WHERE idpendamping = ?',
    [ nama, alamat,tgl_lahir, aktif, tempat_lahir, nik, foto, idjabatan, idpendamping ],
        function(error, rows, fields){
            if(error){
                response.servererror(console.log(error), res)
            }else{
                response.created("Data Pendamping berhasil diupdate !", res)
            }
        }
    );
};

// HAPUS DATA PETUGAS
exports.hapusPendamping = function(req, res){
    
    var idpetugas = req.body.idpetugas;

    connection.query('DELETE FROM Pendamping where idpendamping = ?',
    [ idpetugas ],
        function(error, rows, fields){
            if(error){
                response.forbidden(console.log(error), res)
            }else{
                response.ok("Data Pendamping berhasil di hapus!", res)
            }
        }
    );
};