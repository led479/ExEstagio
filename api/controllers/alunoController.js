Aluno = require('../models/alunoModel.js');

// Index
exports.index = function (req, res) {
  Aluno.get(function (err, alunos) {
    if (err) {
      res.json(err);
    }
    res.status(200).json(alunos);
  });
};

// Create
exports.new = function (req, res) {
  var aluno = new Aluno();
  aluno.nome = req.body.nome;
  aluno.matricula = "2019" + Math.floor((Math.random() * 100) + 1) + Math.floor((Math.random() * 100) + 1) + Math.floor((Math.random() * 10) + 1);
  aluno.senha = req.body.senha;
  aluno.email = req.body.email;
  aluno.disciplinas = req.body.disciplinas;
  aluno.avisos = req.body.avisos;
  aluno.notas = req.body.notas;

  aluno.save(function (err) {
    if (err) {
      res.status(422).json(err);
    }
    res.status(200).json(aluno);
  });
};

// View
exports.view = function (req, res) {
  Aluno.findById(req.params.aluno_id, function (err, aluno) {
    if (err){
      res.status(404).send(err);
    }
    res.status(200).json(aluno);
  });
};

// Update
exports.update = function (req, res) {
  Aluno.findById(req.params.aluno_id, function (err, aluno) {
    if (err){
      res.status(404).send(err);
    }
    if (req.body.nome) aluno.nome = req.body.nome
    if (req.body.email) aluno.email = req.body.email
    if (req.body.disciplinas) aluno.disciplinas = req.body.disciplinas
    if (req.body.avisos) aluno.avisos = req.body.avisos
    if (req.body.notas) aluno.notas = req.body.notas
    
    aluno.save(function (err) {
      if (err){
        res.json(err);
      }

      res.status(200).json(aluno);
    });
  });
};

// Delete
exports.delete = function (req, res) {
  Aluno.remove({_id: req.params.aluno_id}, function (err, aluno) {
    if (err){
      res.status(404).send(err);
    }
    res.status(200);
  });
};