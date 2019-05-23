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
  }
});

// Exporta o modelo do aluno
var Aluno = module.exports = mongoose.model('aluno', alunoSchema);
module.exports.get = function (callback, limit) {
    Aluno.find(callback).limit(limit);
}