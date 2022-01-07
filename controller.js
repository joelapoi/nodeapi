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
  connection.query('SELECT * FROM mahasiswa WHERE npm = ?', {
    id
  }, function (error, rows, fields) {
    if (error) {
      console.log(error);
    } else {
      response.ok(rows, res);
    }
  });

};