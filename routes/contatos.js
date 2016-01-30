var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');
var Contato = require('../models/Contato.js');

/* GET /contatos listing. */
router.get('/', function(req, res, next) {
  Contato.find(function (err, contatos) {
    if (err) return next(err);
    //res.json(contatos);
    res.json({ contatos: contatos });
  });
});

/* POST /contatos */
router.post('/', function(req, res, next) {
  Contato.create(req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* GET /contatos/id */
router.get('/:id', function(req, res, next) {
  Contato.findById(req.params.id, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* PUT /contatos/:id */
router.put('/:id', function(req, res, next) {
  Contato.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* DELETE /contatos/:id */
router.delete('/:id', function(req, res, next) {
  Contato.findByIdAndRemove(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

module.exports = router;
