Professor = require('../models/professorModel.js');

// Index
exports.index = function (req, res) {
  Professor.get(function (err, professores) {
    if (err) {
      res.status(404).json(err);
    }

    res.status(200).json(professores);
  });
};

// Create
exports.new = function (req, res) {
  var professor = new Professor();
  professor.nome = req.body.nome;
  professor.login = req.body.login
  professor.senha = req.body.senha;
  professor.email = req.body.email;
  professor.disciplinas = req.body.disciplinas;
  professor.avisos = req.body.avisos;

  professor.save(function (err) {
    if (err) {
      res.status(422).json(err);
    }
    
    res.status(200).json(professor);
  });
  
};

// View
exports.view = function (req, res) {
  Professor.findById(req.params.professor_id, function (err, professor) {
    if (err){
      res.status(404).send(err);
    }
    res.status(200).json(professor);
  });
};

// Update
exports.update = function (req, res) {
  Professor.findById(req.params.professor_id, function (err, professor) {
    if (err){
      res.status(404).json(err)
    }
    if (req.body.nome) professor.nome = req.body.nome;
    if (req.body.login) professor.login = req.body.login;
    if (req.body.senha) professor.senha = req.body.senha;
    if (req.body.email) professor.email = req.body.email;
    if (req.body.disciplinas) professor.disciplinas = req.body.disciplinas;
    if (req.body.avisos) professor.avisos = req.body.avisos;

    professor.save(function (err) {
      if (err){
        res.status(422).json(err)
      }

      res.status(200).json(professor);
    });
  });
};

// Delete
exports.delete = function (req, res) {
  Professor.remove({_id: req.params.professor_id}, function (err, professor) {
    if (err){
      res.status(404).json(err);
    }

    res.status(200);
  });
  
};