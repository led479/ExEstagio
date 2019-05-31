Nota = require('../models/notaModel.js');

// Index
exports.index = function (req, res) {
  Nota.get(function (err, notas) {
    if (err) {
      res.status(404).json(err);
    }
    res.status(200).json(notas);
  });
};

// Create
exports.new = function (req, res) {
  var nota = new Nota();
  nota.valor = req.body.valor;
  nota.avaliacao = req.body.avaliacao;
  nota.aluno = req.body.aluno;

  nota.save(function (err) {
    if (err) {
      res.status(422).json(err);
    }
    res.status(200).json(nota);
  });
};

// View
exports.view = function (req, res) {
  Nota.findById(req.params.nota_id, function (err, nota) {
    if (err){
      res.status(404).send(err);
    }
    res.status(200).json(nota);
  });
};

// Update
exports.update = function (req, res) {
  Nota.findById(req.params.nota_id, function (err, nota) {
    if (err){
      res.status(404).send(err);
    }
    if (req.body.valor) nota.valor = req.body.valor;
    if (req.body.aluno) nota.aluno = req.body.aluno;
    if (req.body.avaliacao) nota.avaliacao = req.body.avaliacao;
    
    nota.save(function (err) {
      if (err){
        res.status(422).json(err);
      }

      res.status(200).json(nota);
    });
  });
};

// Delete
exports.delete = function (req, res) {
  Nota.remove({_id: req.params.nota_id}, function (err, nota) {
    if (err){
      res.status(404).send(err);
    }
    res.status(200);
  });
};