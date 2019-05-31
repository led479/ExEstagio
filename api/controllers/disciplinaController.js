Disciplina = require('../models/disciplinaModel.js');

// Index
exports.index = function (req, res) {
  Disciplina.get(function (err, disciplinas) {
    if (err) {
      res.status(404).json({
        status: "error",
        message: err,
      });
    }
    res.status(200).send(disciplinas);
  });
};

// Create
exports.new = function (req, res) {
  var disciplina = new Disciplina();
  disciplina.nome = req.body.nome;
  disciplina.codigo = req.body.codigo;
  disciplina.professor = req.body.professor;
  disciplina.alunos = req.body.alunos;
  disciplina.avaliacoes = req.body.avaliacoes;

  disciplina.save(function (err) {
    if (err) {
      res.status(422).json(err);
    }
    res.status(200).json(disciplina);
  });
  
};

// View
exports.view = function (req, res) {
  Disciplina.findById(req.params.disciplina_id, function (err, disciplina) {
    if (err){
      res.status(404).send(err);
    }
    res.status(200).json(disciplina);
  });
};

// Update
exports.update = function (req, res) {
  Disciplina.findById(req.params.disciplina_id, function (err, disciplina) {
    if (err){
      res.send(err);
    }
    
    if(req.body.nome) disciplina.nome = req.body.nome;
    if(req.body.codigo) disciplina.codigo = req.body.codigo;
    if(req.body.alunos) disciplina.alunos = req.body.alunos;
    if(req.body.professor) disciplina.professor = req.body.professor;
    if(req.body.avaliacoes) disciplina.avaliacoes = req.body.avaliacoes;

    disciplina.save(function (err) {
      if (err){
        res.json(err);
      }

      res.status(200).json(disciplina);
    });
   
  });
};

// Delete
exports.delete = function (req, res) {
  Disciplina.remove({_id: req.params.disciplina_id}, function (err, disciplina) {
    if (err){
      res.status(404).send(err);
    }

    res.status(200);
  });
};