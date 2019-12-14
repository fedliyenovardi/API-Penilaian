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

// LIST DATA BOBOT
exports.Bobot = function(req, res){
    connection.query('SELECT * FROM bobot', function(error, rows, fields){
        if(error){
            response.servererror(console.log(error), res)
        }else{
            response.ok(rows, res)
        }
    });
};

// DETAIL DATA BOBOT
exports.detBobot = function(req, res){

    var idbobot = req.params.idbobot;

    connection.query('SELECT * FROM bobot where dibobot = ?', 
    [ idbobot ],
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
exports.tambahBobot = function(req, res){

    var idbobot = req.body.idbobot;
    
    connection.query('INSERT INTO bobot (nilai) VALUES ( ? );',
    [ kode, nama, idbobot ],
        function(error, rows, fields){
            if(error){
                response.servererror(console.log(error), res)
            }else{
                response.created("Data Bobot berhasil disimpan", res)
            }
        }
    );
};

// UPDATE DATA BOBOT
exports.editBobot = function(req, res){

    var idbobot = req.body.idbobot;
    var nilai = req.body.nilai;
    
    connection.query('UPDATE bobot SET nilai = ? WHERE idbobot = ?',
    [ nilai, idbobot ],
        function(error, rows, fields){
            if(error){
                response.servererror(console.log(error), res)
            }else{
                response.created("Data Bobot berhasil diupdate !", res)
            }
        }
    );
};

// HAPUS DATA BOBOT
exports.hapusBobot = function(req, res){
    
    var idbobot = req.body.idbobot;

    connection.query('DELETE FROM bobot where idbobot = ?',
    [ idbobot ],
        function(error, rows, fields){
            if(error){
                response.forbidden(console.log(error), res)
            }else{
                response.ok("Data Bobot berhasil di hapus!", res)
            }
        }
    );
};