var mongoose = require('mongoose');
// Setup schema
var alunoSchema = mongoose.Schema({
  nome: {
    type: String,
    required: true
  },
  matricula: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  senha: {
    type: String,
    requires: true
  },
  disciplinas: [{
    type: mongoose.Schema.ObjectId,
    ref: 'disciplina'
  }],
  avisos: [{
    type: mongoose.Schema.ObjectId,
    ref: 'aviso'
  }],
  notas: [{
    type: mongoose.Schema.ObjectId,
    ref: 'nota'
  }]
});

// Exporta o modelo do aluno
var Aluno = module.exports = mongoose.model('aluno', alunoSchema);
module.exports.get = function (callback, limit) {
    Aluno.find(callback).limit(limit);
}