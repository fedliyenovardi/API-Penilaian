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

// LIST DATA PENGGUNA
exports.Pengguna = function(req, res){
    connection.query('SELECT * FROM pengguna', function(error, rows, fields){
        if(error){
            response.servererror(console.log(error), res)
        }else{
            response.ok(rows, res)
        }
    });
};

// DETAIL DATA PENGGUNA
exports.detPengguna = function(req, res){
    var idpengguna = req.params.idpengguna;

    connection.query('SELECT * FROM pengguna where idpengguna = ?', 
    [ idpengguna ],
        function(error, rows, fields){
            if(error){
                response.forbidden(console.log(error), res)
            }else{
                response.ok(rows, res)
            }
        }
    );
};

//TAMBAH DATA PENGGUNA
exports.tambahPengguna = function(req, res){

    var username = req.body.username;
    var password = req.body.password;
    var idjabatan = req.body.idjabatan;
    var idpetugas = req.body.idpetugas;
    var idpendamping = req.body.idpendamping;
    
    connection.query('INSERT INTO pengguna (username, password, idjabatan, idpetugas, idpendamping) VALUES (?, ?, ?, ?, ?);',
    [ username, password, idjabatan, idpetugas, idpendamping ],
        function(error, rows, fields){
            if(error){
                response.servererror(console.log(error), res)
            }else{
                response.created("Data pengguna berhasil disimpan", res)
            }
        }
    );
};

// UPDATE DATA PENGGUNA
exports.editPengguna = function(req, res){

    var username = req.body.username;
    var password = req.body.password;
    var idjabatan = req.body.idjabatan;
    var idpetugas = req.body.idpetugas;
    var idpendamping = req.body.idpendamping;
    var idpengguna = req.body.idpengguna;
    
    connection.query('UPDATE pengguna SET username = ?, password = ?, idjabatan = ?, idpetugas = ?, idpendamping = ? WHERE idpengguna = ?',
    [ username, password, idjabatan, idpetugas, idpendamping, idpengguna ],
        function(error, rows, fields){
            if(error){
                response.servererror(console.log(error), res)
            }else{
                response.created("Data pengguna berhasil diupdate !", res)
            }
        }
    );
};

// HAPUS DATA PENGGUNA
exports.hapusPengguna = function(req, res){
    
    var idpengguna = req.body.idpengguna;

    connection.query('DELETE FROM pengguna where idpengguna = ?',
    [ idpengguna ],
        function(error, rows, fields){
            if(error){
                response.forbidden(console.log(error), res)
            }else{
                response.ok("Data Pengguna berhasil di hapus!", res)
            }
        }
    );
};