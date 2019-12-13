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