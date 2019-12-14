'use strict';

module.exports = function(app){
    var RouteToIndex = require('./controller/index');
    var RouteToKota = require('./controller/KotaController');
    var RouteToKecamatan = require('./controller/KecamatanController');
    var RouteToJabatan = require('./controller/JabatanController');
    var RouteToDesa = require('./controller/DesaController');
    var RouteToKriteria = require('./controller/KriteriaController');
    var RouteToPengguna = require('./controller/PenggunaController');
    var RouteToPenilaian = require('./controller/PenilaianController');
    var RouteToPetugas = require('./controller/PetugasController');
    var RouteToBobot = require('./controller/BobotController');
    var RouteToPendamping = require('./controller/PendampingController');

    app.route('/').get(RouteToIndex.index);
    
    //KOTA
    app.route('/kota').get(RouteToKota.Kota);
    app.route('/kota').post(RouteToKota.tambahKota);
    app.route('/kota/:idkota').get(RouteToKota.detKota);
    app.route('/kota').put(RouteToKota.editKota);
    app.route('/kota').delete(RouteToKota.hapusKota);
    
    //KECAMATAN
    app.route('/kecamatan').get(RouteToKecamatan.Kecamatan);
    app.route('/kecamatan/:idkecamatan').get(RouteToKecamatan.detKecamatan);
    app.route('/kecamatan').post(RouteToKecamatan.tambahKecamatan);
    app.route('/kecamatan').put(RouteToKecamatan.editKecamatan);
    app.route('/kecamatan').delete(RouteToKecamatan.hapusKecamatan);

    //JABATAN
    app.route('/jabatan').get(RouteToJabatan.Jabatan);
    app.route('/jabatan/:idjabatan').get(RouteToJabatan.detJabatan);
    app.route('/jabatan').post(RouteToJabatan.tambahJabatan);
    app.route('/jabatan').put(RouteToJabatan.editJabatan);
    app.route('/jabatan').delete(RouteToJabatan.hapusJabatan);

    //DESA
    app.route('/desa').get(RouteToDesa.Desa);
    app.route('/desa/:iddesa').get(RouteToDesa.detDesa);
    app.route('/desa').post(RouteToDesa.tambahDesa);
    app.route('/desa').put(RouteToDesa.editDesa);
    app.route('/desa').delete(RouteToDesa.hapusDesa);

    //KRITERIA
    app.route('/kriteria').get(RouteToKriteria.Kriteria);
    app.route('/kriteria/:idkriteria').get(RouteToKriteria.detKriteria);
    app.route('/kriteria').post(RouteToKriteria.tambahKriteria);
    app.route('/kriteria').put(RouteToKriteria.editKriteria);
    app.route('/kriteria').delete(RouteToKriteria.hapusKriteria);

    //PENGGUNA
    app.route('/pengguna').get(RouteToPengguna.Pengguna);
    app.route('/pengguna/:idpengguna').get(RouteToPengguna.detPengguna);
    app.route('/petugas').post(RouteToPengguna.tambahPengguna);
    app.route('/petugas').put(RouteToPengguna.editPengguna);
    app.route('/petugas').delete(RouteToPengguna.hapusPengguna);


    //PENILAIAN
    app.route('/penilaian').get(RouteToPenilaian.Penilaian);
    app.route('/penilaian/:idpenilaian').get(RouteToPenilaian.detPenilaian);
    app.route('/penilaian').post(RouteToPenilaian.tambahPenilaian);
    app.route('/penilaian').put(RouteToPenilaian.editPenilaian);
    app.route('/penilaian').delete(RouteToPenilaian.hapusPenilaian);

    //PENTUGAS
    app.route('/petugas').get(RouteToPetugas.Petugas);
    app.route('/petugas/:idpetugas').get(RouteToPetugas.detPetugas);
    app.route('/petugas').post(RouteToPetugas.tambahPetugas);
    app.route('/petugas').put(RouteToPetugas.editPetugas);
    app.route('/petugas').delete(RouteToPetugas.hapusPetugas);

    //BOBOT
    app.route('/bobot').get(RouteToBobot.Bobot);
    app.route('/bobot/:idbobot').get(RouteToBobot.detBobot);
    app.route('/bobot').post(RouteToBobot.tambahBobot);
    app.route('/bobot').put(RouteToBobot.editBobot);
    app.route('/bobot').delete(RouteToBobot.hapusBobot);

    //PENDAMPING
    app.route('/pendamping').get(RouteToPendamping.Pendamping);
    app.route('/pendamping/:idpendamping').get(RouteToPendamping.detPendamping);
    app.route('/pendamping').post(RouteToPendamping.tambahPendamping);
    app.route('/pendamping').put(RouteToPendamping.editPendamping);
    app.route('/pendamping').delete(RouteToPendamping.hapusPendamping);

}