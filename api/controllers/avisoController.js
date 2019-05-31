Aviso = require('../models/avisoModel.js');

// Index
exports.index = function (req, res) {
  Aviso.get(function (err, avisos) {
    if (err) {
      res.json(err);
    }
    res.status(200).json(avisos);
  });
};

// Create
exports.new = function (req, res) {
  var aviso = new Aviso();
  aviso.texto = req.body.texto;
  aviso.professor = req.body.professor;
  aviso.alunos = req.body.alunos;

  aviso.save(function (err) {
      if (err) {
        res.json(err);
      }
      res.status(200).json(aviso);
  });
};

// View
exports.view = function (req, res) {
  Aviso.findById(req.params.aviso_id, function (err, aviso) {
    if (err){
      res.send(err);
    }
    res.status(200).json(aviso);
  });
};

// Delete
exports.delete = function (req, res) {
  Aviso.remove({_id: req.params.aviso_id}, function (err, aviso) {
    if (err){
      res.status(404).send(err);
    }
    res.status(200);
  });
};