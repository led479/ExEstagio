Professor = require('../models/professorModel.js');

// Index
exports.index = function (req, res) {
  Professor.get(function (err, professores) {
    if (err) {
      res.json({
        status: "error",
        message: err,
      });
    }
    res.json({
      status: "success",
      message: "Professores buscados com sucesso",
      data: professores
    });
  });
};

// Create
exports.new = function (req, res) {
  var professor = new Professor();
  professor.nome = req.body.nome ? req.body.nome : professor.nome;
  professor.login = req.body.login
  professor.senha = req.body.senha;
  professor.email = req.body.email;

  professor.save(function (err) {
      if (err) {
        res.json({
          status:"error",
          message: err
        });
      }
      res.json({
        message: 'Novo professor criado com sucesso!',
        data: professor
      });
  });
};

// View
exports.view = function (req, res) {
  Professor.findById(req.params.professor_id, function (err, professor) {
    if (err){
      res.send(err);
    }
    res.json({
      message: 'Carregando professor...',
      data: professor
    });
  });
};

// Update
exports.update = function (req, res) {
  Professor.findById(req.params.professor_id, function (err, professor) {
    if (err){
      res.send(err);
    }
    professor.nome = req.body.nome ? req.body.nome : professor.nome;
    professor.email = req.body.email;
    professor.save(function (err) {
      if (err){
        res.json(err);
      }

      res.json({
        message: 'Professor atualizado',
        data: professor
      });
    });
  });
};

// Delete
exports.delete = function (req, res) {
  Professor.remove({_id: req.params.professor_id}, function (err, professor) {
    if (err){
      res.send(err);
    }
    res.json({
      status: "success",
      message: 'Professor deletado'
    });
  });
};