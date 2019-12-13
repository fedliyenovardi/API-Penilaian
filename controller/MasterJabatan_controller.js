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