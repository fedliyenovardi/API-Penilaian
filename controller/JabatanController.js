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

// LIST DATA JABATAN
exports.Jabatan = function(req, res){
    connection.query('SELECT * FROM jabatan', function(error, rows, fields){
        if(error){
            response.servererror(console.log(error), res)
        }else{
            response.ok(rows, res)
        }
    });
};

// DETAIL DATA JABATAN
exports.detJabatan = function(req, res){
    var idjabatan = req.params.idjabatan;

    connection.query('SELECT * FROM jabatan where idjabatan = ?', 
    [ idjabatan ],
        function(error, rows, fields){
            if(error){
                response.forbidden(console.log(error), res)
            }else{
                response.ok(rows, res)
            }
        }
    );
};

//TAMBAH DATA JABATAN
exports.tambahJabatan = function(req, res){

    var nama = req.body.nama;
    
    connection.query('INSERT INTO jabatan (nama) VALUES (?);',
    [ nama ],
        function(error, rows, fields){
            if(error){
                response.servererror(console.log(error), res)
            }else{
                response.created("Data jabatan berhasil disimpan", res)
            }
        }
    );
};

// UPDATE DATA PENGGUNA
exports.editJabatan = function(req, res){

    var username = req.body.nama;
    var idjabatan = req.body.idjabatan;
    
    connection.query('UPDATE jabatan SET nama = ?  WHERE idjabatan = ?',
    [ username, idjabatan ],
        function(error, rows, fields){
            if(error){
                response.servererror(console.log(error), res)
            }else{
                response.created("Data jabatan berhasil diupdate !", res)
            }
        }
    );
};

// HAPUS DATA PENGGUNA
exports.hapusJabatan = function(req, res){
    
    var idjabatan = req.body.idjabatan;

    connection.query('DELETE FROM jabatan where idjabatan = ?',
    [ idjabatan ],
        function(error, rows, fields){
            if(error){
                response.forbidden(console.log(error), res)
            }else{
                response.ok("Data Jabatan berhasil di hapus!", res)
            }
        }
    );
};