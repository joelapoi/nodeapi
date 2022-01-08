'use strict';

module.exports = function (app) {
  var jsonku = require('./controller');

  app.route('/')
    .get(jsonku.index);


  app.route('/getAll')
    .get(jsonku.getall);


  app.route('/getById/:id')
    .get(jsonku.getById);

  
  app.route('/add')
    .post(jsonku.add);
}