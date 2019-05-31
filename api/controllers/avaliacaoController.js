Avaliacao = require('../models/avaliacaoModel.js');

// Index
exports.index = function (req, res) {
  Avaliacao.get(function (err, avaliacoes) {
    if (err) {
      res.json(err);
    }
    res.status(200).json(avaliacoes);
  });
};

// Create
exports.new = function (req, res) {
  var avaliacao = new Avaliacao();
  avaliacao.nome = req.body.nome;
  avaliacao.disciplina = req.body.disciplina;
  avaliacao.notas = req.body.notas;

  avaliacao.save(function (err) {
    if (err) {
      res.json(err);
    }
    res.json(avaliacao);
  });
};

// View
exports.view = function (req, res) {
  Avaliacao.findById(req.params.avaliacao_id, function (err, avaliacao) {
    if (err){
      res.send(err);
    }
    res.json(avaliacao);
  });
};

// Update
exports.update = function (req, res) {
  Avaliacao.findById(req.params.avaliacao_id, function (err, avaliacao) {
    if (err){
      res.status(404).send(err);
    }
    if (req.body.nome) avaliacao.nome = req.body.nome;
    if (req.body.notas) avaliacao.notas = req.body.notas;
    if (req.body.disciplina) avaliacao.disciplina = req.body.disciplina;
    
    avaliacao.save(function (err) {
      if (err){
        res.status(422).json(err);
      }

      res.status(200).json(avaliacao);
    });
  });
};

// Delete
exports.delete = function (req, res) {
  Avaliacao.remove({_id: req.params.avaliacao_id}, function (err, avaliacao) {
    if (err){
      res.status(404).send(err);
    }
    res.status(200);
  });
};