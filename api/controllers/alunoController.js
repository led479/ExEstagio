Aluno = require('../models/alunoModel.js');

// Index
exports.index = function (req, res) {
  Aluno.get(function (err, alunos) {
    if (err) {
      res.json({
        status: "error",
        message: err,
      });
    }
    res.json({
      status: "success",
      message: "Alunos buscados com sucesso",
      data: alunos
    });
  });
};

// Create
exports.new = function (req, res) {
  var aluno = new Aluno();
  aluno.nome = req.body.nome ? req.body.nome : aluno.nome;
  aluno.matricula = "2019" + Math.floor((Math.random() * 100) + 1) + Math.floor((Math.random() * 100) + 1) + Math.floor((Math.random() * 10) + 1);
  aluno.senha = req.body.senha;
  aluno.email = req.body.email;

  aluno.save(function (err) {
      if (err) {
        res.json({
          status:"error",
          message: err
        });
      }
      res.json({
        message: 'Novo aluno criado com sucesso!',
        data: aluno
      });
  });
};

// View
exports.view = function (req, res) {
  Aluno.findById(req.params.aluno_id, function (err, aluno) {
    if (err){
      res.send(err);
    }
    res.json({
      message: 'Carregando aluno...',
      data: aluno
    });
  });
};

// Update
exports.update = function (req, res) {
  Aluno.findById(req.params.aluno_id, function (err, aluno) {
    if (err){
      res.send(err);
    }
    aluno.nome = req.body.nome ? req.body.nome : aluno.nome;
    aluno.email = req.body.email;
    aluno.save(function (err) {
      if (err){
        res.json(err);
      }

      res.json({
        message: 'Aluno atualizado',
        data: aluno
      });
    });
  });
};

// Delete
exports.delete = function (req, res) {
  Aluno.remove({_id: req.params.aluno_id}, function (err, aluno) {
    if (err){
      res.send(err);
    }
    res.json({
      status: "success",
      message: 'Aluno deletado'
    });
  });
};