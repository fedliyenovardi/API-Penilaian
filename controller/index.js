'use strict';

var response = require('../reqcode');
var connection = require('../koneksi');

// INDEX API
exports.index = function (req, res){
    response.ok("Halo, Ini merupakan api dari aplikasi oleh-oleh.", res)
};