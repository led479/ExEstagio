var mongoose = require('mongoose');
// Setup schema
var professorSchema = mongoose.Schema({
  nome: {
    type: String,
    required: true
  },
  login: {
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
  }]
});

// Exporta o modelo do professor
var Professor = module.exports = mongoose.model('professor', professorSchema);
module.exports.get = function (callback, limit) {
    Professor.find(callback).limit(limit);
}