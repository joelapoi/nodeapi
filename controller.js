'use strict';

var response = require('./res');
var connection = require('./koneksi');

exports.index = function (req, res) {
  response.ok("aplikasi REST API berjalan dengan baik", res);
};

//menampilkan semua data mahasiswa

exports.getall = function (req, res) {
  connection.query('SELECT * FROM mahasiswa', function (error, rows, fields) {
    if (error) {
      console.log(error);
    } else {
      response.ok(rows, res);
    }
  });
};

//menampilkan semua data mahasiswa by id

exports.getById = function (req, res) {
  let id = req.params.id;
  connection.query('SELECT * FROM mahasiswa WHERE id = ?', [id], function (error, rows, fields) {
    if (error) {
      console.log(error);
    } else {
      response.ok(rows, res);
    }
  });

};


//menambahkan data mahasiswa

exports.add = function(req, res) {
  var nim = req.body.nim;
  var nama = req.body.nim;
  var jurusan = req.body.jurusan;
  
  connection.query('INSERT INTO mahasiswa (nama, nim, jurusan) VALUES (?,?,?)', [nama, nim, jurusan], function(error, rows, fields) {
    if (error) {
      console.log(error);
    }else{
      response.ok('Berhasil Menambahkan Data!', res);
    }
  });
};

//mengubah data mahasiswa berdasarkan id

exports.put = function(req, res) {
  var id = req.body.id;
  var nim = req.body.nim;
  var nama = req.body.nama;
  var jurusan = req.body.jurusan;

  connection.query('UPDATE mahasiswa SET nama=?, nim=?, jurusan=? WHERE id=?', [nama, nim, jurusan, id], function(error, rows, fields) {
    if (error) {
      console.log(error);
    }else{
      response.ok('Data Berhasil di Ubah!', res);
    }
  });
};