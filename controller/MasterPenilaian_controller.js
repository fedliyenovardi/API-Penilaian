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