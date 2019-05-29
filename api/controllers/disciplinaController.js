Disciplina = require('../models/disciplinaModel.js');

// Index
exports.index = function (req, res) {
  Disciplina.get(function (err, disciplinas) {
    if (err) {
      res.json({
        status: "error",
        message: err,
      });
    }
    res.json({
      status: "success",
      message: "Disciplinas buscadas com sucesso",
      data: disciplinas
    });
  });
};

// Create
exports.new = function (req, res) {
  var disciplina = new Disciplina();
  disciplina.nome = req.body.nome;
  disciplina.codigo = req.body.codigo;

  disciplina.save(function (err) {
      if (err) {
        res.json({
          status:"error",
          message: err
        });
      }
      res.json({
        message: 'Nova disciplina criada com sucesso!',
        data: disciplina
      });
  });
};

// View
exports.view = function (req, res) {
  Disciplina.findById(req.params.disciplina_id, function (err, disciplina) {
    if (err){
      res.send(err);
    }
    res.json({
      message: 'Carregando disciplina...',
      data: disciplina
    });
  });
};

// Update
exports.update = function (req, res) {
  Disciplina.findById(req.params.disciplina_id, function (err, disciplina) {
    if (err){
      res.send(err);
    }
    disciplina.nome = req.body.nome;
    disciplina.codigo = req.body.codigo;
    disciplina.save(function (err) {
      if (err){
        res.json(err);
      }

      res.json({
        message: 'Disciplina atualizada',
        data: disciplina
      });
    });
  });
};

// Delete
exports.delete = function (req, res) {
  Disciplina.remove({_id: req.params.disciplina_id}, function (err, disciplina) {
    if (err){
      res.send(err);
    }
    res.json({
      status: "success",
      message: 'Disciplina deletada'
    });
  });
};