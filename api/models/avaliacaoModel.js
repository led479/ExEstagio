var mongoose = require('mongoose');
// Setup schema
var avaliacaoSchema = mongoose.Schema({
  nome: {
    type: String,
    required: true
  }
});

// Exporta o modelo do avaliacao
var Avaliacao = module.exports = mongoose.model('avaliacao', avaliacaoSchema);
module.exports.get = function (callback, limit) {
    Avaliacao.find(callback).limit(limit);
}