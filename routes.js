'use strict';

module.exports = function(app){
    var RouteToIndex = require('./controller/index');
    var RouteToKota = require('./controller/MasterKota_controller');
    var RouteToKecamatan = require('./controller/MasterKecamatan_controller');
    var RouteToJabatan = require('./controller/MasterJabatan_controller');
    var RouteToDesa = require('./controller/MasterDesa_controller');
    var RouteToKriteria = require('./controller/MasterKriteria_controller');
    var RouteToPengguna = require('./controller/MasterPengguna_controller');
    var RouteToPenilaian = require('./controller/MasterPenilaian_controller');
    var RouteToPetugas = require('./controller/MasterPetugas_controller');

    app.route('/').get(RouteToIndex.index);
    
    //KOTA
    app.route('/kota').get(RouteToKota.Kota);
    app.route('/kota').post(RouteToKota.tambahKota);
    app.route('/kota/:idkota').get(RouteToKota.detKota);
    app.route('/kota/').put(RouteToKota.editKota);
    app.route('/kota/').delete(RouteToKota.hapusKota);
    
    //KECAMATAN
    app.route('/kecamatan').get(RouteToKecamatan.Kecamatan);
    app.route('/kecamatan/:idkecamatan').get(RouteToKecamatan.detKecamatan);
    app.route('/kecamatan').post(RouteToKecamatan.tambahKecamatan);
    app.route('/kecamatan/').put(RouteToKecamatan.editKecamatan);
    app.route('/kecamatan/').delete(RouteToKecamatan.hapusKecamatan);

    //JABATAN
    app.route('/jabatan').get(RouteToJabatan.Jabatan);
    app.route('/jabatan/:idjabatan').get(RouteToJabatan.detJabatan);

    //DESA
    app.route('/desa').get(RouteToDesa.Desa);
    app.route('/desa/:iddesa').get(RouteToDesa.detDesa);

    //KRITERIA
    app.route('/kriteria').get(RouteToKriteria.Kriteria);
    app.route('/kriteria/:idkriteria').get(RouteToKriteria.detKriteria);

    //PENGGUNA
    app.route('/pengguna').get(RouteToPengguna.Pengguna);
    app.route('/pengguna/:idpengguna').get(RouteToPengguna.detPengguna);

    //PENILAIAN
    app.route('/penilaian').get(RouteToPenilaian.Penilaian);
    app.route('/penilaian/:idpenilaian').get(RouteToPenilaian.detPenilaian);

    //PENTUGAS
    app.route('/petugas').get(RouteToPetugas.Petugas);
    app.route('/petugas/:idpetugas').get(RouteToPetugas.detPetugas);

}