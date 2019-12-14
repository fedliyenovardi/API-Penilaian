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

// LIST DATA KOTA
exports.Desa = function(req, res){
    connection.query('SELECT * FROM desa', function(error, rows, fields){
        if(error){
            response.servererror(console.log(error), res)
        }else{
            response.ok(rows, res)
        }
    });
};

// DETAIL DATA DESA
exports.detDesa = function(req, res){
    var iddesa = req.params.iddesa;

    connection.query('SELECT * FROM desa where iddesa = ?', 
    [ iddesa ],
        function(error, rows, fields){
            if(error){
                response.forbidden(console.log(error), res)
            }else{
                response.ok(rows, res)
            }
        }
    );
};

//TAMBAH DATA DESA
exports.tambahDesa = function(req, res){

    var nama = req.body.nama;
    var idkecamatan = req.body.idkecamatan;
    
    connection.query('INSERT INTO desa (nama, idkecamatan) VALUES ( ?, ? );',
    [ nama, idkecamatan ],
        function(error, rows, fields){
            if(error){
                response.servererror(console.log(error), res)
            }else{
                response.created("Data desa berhasil disimpan", res)
            }
        }
    );
};

// UPDATE DATA DESA
exports.editJabatan = function(req, res){

    var nama = req.body.nama;
    var idkecamatan = req.body.idkecamatan;
    var iddesa = req.body.iddesa;
    
    connection.query('UPDATE desa SET nama = ?, idkecamatan = ?  WHERE iddesa = ?',
    [ nama, idkecamatan, iddesa ],
        function(error, rows, fields){
            if(error){
                response.servererror(console.log(error), res)
            }else{
                response.created("Data desa berhasil diupdate !", res)
            }
        }
    );
};

// HAPUS DATA DESA
exports.hapusJabatan = function(req, res){
    
    var iddesa = req.body.iddesa;

    connection.query('DELETE FROM desa where iddesa = ?',
    [ iddesa ],
        function(error, rows, fields){
            if(error){
                response.forbidden(console.log(error), res)
            }else{
                response.ok("Data Desa berhasil di hapus!", res)
            }
        }
    );
};