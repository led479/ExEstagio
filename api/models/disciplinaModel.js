var mongoose = require('mongoose');

// Setup schema
var disciplinaSchema = mongoose.Schema({
  nome: {
    type: String,
    required: true
  },
  codigo: {
    type: String,
    required: true
  },
  alunos: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'aluno'
  }],
  professor: {
    type: mongoose.Schema.ObjectId,
    ref: 'professor'
  },
  avaliacoes: [{
    type: mongoose.Schema.ObjectId,
    ref: 'avaliacao'
  }]
});

// Exporta o modelo do disciplina
var Disciplina = module.exports = mongoose.model('disciplina', disciplinaSchema);
module.exports.get = function (callback, limit) {
    Disciplina.find(callback).limit(limit);
}