Aviso = require('../models/avisoModel.js');

// Index
exports.index = function (req, res) {
  // PEGAR TODOS OS AVISOS DE UM ALUNO
};

// Create
exports.new = function (req, res) {
  var aviso = new Aviso();
  aviso.texto = req.body.texto;

  aviso.save(function (err) {
      if (err) {
        res.json({
          status:"error",
          message: err
        });
      }
      res.json({
        message: 'Novo aviso criado com sucesso!',
        data: aviso
      });
  });
};

// View
exports.view = function (req, res) {
  Aviso.findById(req.params.aviso_id, function (err, aviso) {
    if (err){
      res.send(err);
    }
    res.json({
      message: 'Carregando aviso...',
      data: aviso
    });
  });
};

// Update
exports.update = function (req, res) {
  // POSSÍVEL ATUALIZAR AVISO?
};

// Delete
exports.delete = function (req, res) {
  // POSSÍVEL APAGAR AVISO?
};