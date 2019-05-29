var mongoose = require('mongoose');
// Setup schema
var notaSchema = mongoose.Schema({
  valor: {
    type: Number,
    required: true
  }
});

// Exporta o modelo do nota
var Nota = module.exports = mongoose.model('nota', notaSchema);
module.exports.get = function (callback, limit) {
    Nota.find(callback).limit(limit);
}