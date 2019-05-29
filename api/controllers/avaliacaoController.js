Avaliacao = require('../models/avaliacaoModel.js');

// Index
exports.index = function (req, res) {
  // PEGAR TODOS AS AVALIACOES DE UMA DISCIPLINA
};

// Create
exports.new = function (req, res) {
  var avaliacao = new Avaliacao();
  avaliacao.nome = req.body.nome;

  avaliacao.save(function (err) {
      if (err) {
        res.json({
          status:"error",
          message: err
        });
      }
      res.json({
        message: 'Nova avaliacao criada com sucesso!',
        data: avaliacao
      });
  });
};

// View
exports.view = function (req, res) {
  Avaliacao.findById(req.params.avaliacao_id, function (err, avaliacao) {
    if (err){
      res.send(err);
    }
    res.json({
      message: 'Carregando avaliacao...',
      data: avaliacao
    });
  });
};

// Delete
exports.delete = function (req, res) {
  // POSSÍVEL APAGAR AVALIACAO?
};