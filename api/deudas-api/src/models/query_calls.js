// Handle the requests and call corresponding method functions for processing
const gets = require('./dbProcessing/gets');
const posts = require('./dbProcessing/posts');
const del = require('./dbProcessing/deletes');
const update = require('./dbProcessing/puts');

// Query All deudas,intereses
const queryDeudas = gets.getAllDeudas;
const queryIntereses = gets.getAllIntereses;

// Query by id deuda
const queryDeudaById = gets.getDeudaById;

// Post new deuda, interes
const postDeuda = posts.createNewDeuda;
const postInteres = posts.createNewInteres;

// Delete deuda, interes
const delDeuda = del.deleteDeuda;
const delInteres = del.deleteInteres;

// Update deuda
const putDeuda = update.updateDeuda;

module.exports = {
  queryDeudas,
  queryIntereses,
  queryDeudaById,
  postDeuda,
  postInteres,
  delDeuda,
  delInteres,
  putDeuda,
};
