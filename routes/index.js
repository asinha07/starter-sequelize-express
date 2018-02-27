var models  = require('../models');
var express = require('express');
var router  = express.Router();

router.get('/', function(req, res) {
  models.tests.findAll({where :{"id":1}}).then(function(successResult) {
    res.send(successResult);
  });
});

module.exports = router;