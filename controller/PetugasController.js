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
exports.Petugas = function(req, res){
    connection.query('SELECT * FROM petugas', function(error, rows, fields){
        if(error){
            response.servererror(console.log(error), res)
        }else{
            response.ok(rows, res)
        }
    });
};

// DETAIL DATA PETUGAS
exports.detPetugas = function(req, res){
    var idpetugas = req.params.idpetugas;

    connection.query('SELECT * FROM petugas where idpetugas = ?', 
    [ idpetugas ],
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
exports.tambahPetugas = function(req, res){

    var nama = req.body.idkriteria;
    var tgl_lahir = req.body.idpetugas;
    var alamat = req.body.idpengguna;
    var aktif = req.body.nilai;
    var tempat_lahir = req.body.nilai;
    var nik = req.body.nilai;
    var foto = req.body.nilai;
    var idjabatan = req.body.nilai;
    
    connection.query('INSERT INTO petugas (nama, alamat, tgl_lahir, aktif, tempat_lahir, nik, foto, idjabatan) VALUES ( ?, ?, ?, ?, ?, ?, ?, ? );',
    [ nama, alamat, tgl_lahir, aktif, tempat_lahir, nik, foto, idjabatan ],
        function(error, rows, fields){
            if(error){
                response.servererror(console.log(error), res)
            }else{
                response.created("Data Penilaian berhasil disimpan", res)
            }
        }
    );
};

// UPDATE DATA PETUGAS
exports.editPetugas = function(req, res){

    var nama = req.body.idkriteria;
    var tgl_lahir = req.body.idpetugas;
    var alamat = req.body.idpengguna;
    var aktif = req.body.nilai;
    var tempat_lahir = req.body.nilai;
    var nik = req.body.nilai;
    var foto = req.body.nilai;
    var idjabatan = req.body.nilai;
    var idpetugas = req.body.idpetugas;
    
    connection.query('UPDATE pendamping SET nama = ?, alamat = ?, tgl_lahir = ?, aktif = ?, tempat_lahir = ?, nik = ?, foto = ?, idjabatan = ? WHERE idpetugas = ?',
    [ nama, alamat,tgl_lahir, aktif, tempat_lahir, nik, foto, idjabatan, idpetugas ],
        function(error, rows, fields){
            if(error){
                response.servererror(console.log(error), res)
            }else{
                response.created("Data Petugas berhasil diupdate !", res)
            }
        }
    );
};

// HAPUS DATA PETUGAS
exports.hapusPetugas = function(req, res){
    
    var idpetugas = req.body.idpetugas;

    connection.query('DELETE FROM petugas where idpetugas = ?',
    [ idpetugas ],
        function(error, rows, fields){
            if(error){
                response.forbidden(console.log(error), res)
            }else{
                response.ok("Data Petugas berhasil di hapus!", res)
            }
        }
    );
};