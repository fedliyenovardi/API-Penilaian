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

// LIST DATA KRITERIA
exports.Kriteria = function(req, res){
    connection.query('SELECT * FROM kriteria', function(error, rows, fields){
        if(error){
            response.servererror(console.log(error), res)
        }else{
            response.ok(rows, res)
        }
    });
};

// DETAIL DATA KRITERIA
exports.detKriteria = function(req, res){
    var idkriteria = req.params.idkriteria;

    connection.query('SELECT * FROM kriteria where idkriteria = ?', 
    [ idkriteria ],
        function(error, rows, fields){
            if(error){
                response.forbidden(console.log(error), res)
            }else{
                response.ok(rows, res)
            }
        }
    );
};