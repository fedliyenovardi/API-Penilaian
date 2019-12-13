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