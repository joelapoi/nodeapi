'use strict';

var response = require('./res');
var connection = require('./koneksi');

exports.index = function (req, res) {
  response.ok("aplikasi REST API berjalan dengan baik", res);
};