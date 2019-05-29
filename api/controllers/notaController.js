Nota = require('../models/notaModel.js');

// Index
exports.index = function (req, res) {
  // PEGAR TODOS AS NOTAS DE UM ALUNO
};

// Create
exports.new = function (req, res) {
  var nota = new Nota();
  nota.valor = req.body.valor;

  nota.save(function (err) {
      if (err) {
        res.json({
          status:"error",
          message: err
        });
      }
      res.json({
        message: 'Nova nota criada com sucesso!',
        data: nota
      });
  });
};

// View
exports.view = function (req, res) {
  Nota.findById(req.params.nota_id, function (err, nota) {
    if (err){
      res.send(err);
    }
    res.json({
      message: 'Carregando nota...',
      data: nota
    });
  });
};

// Delete
exports.delete = function (req, res) {
  // POSSÍVEL APAGAR NOTA?
};