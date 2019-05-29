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
  }
});

// Exporta o modelo do disciplina
var Disciplina = module.exports = mongoose.model('disciplina', disciplinaSchema);
module.exports.get = function (callback, limit) {
    Disciplina.find(callback).limit(limit);
}