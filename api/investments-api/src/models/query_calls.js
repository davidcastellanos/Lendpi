// Handle the requests and call corresponding method functions for processing
const gets = require('./dbProcessing/gets');
const posts = require('./dbProcessing/posts');
// const del = require('./dbProcessing/deletes');
// const update = require('./dbProcessing/puts');

// Query All deudas,intereses
const allInvestments = gets.getAllInvestments;

// Query by id investments
const allHistInvest = gets.getAllHistInvest;
const alTotalInvest = gets.getAllTotalInvest;

// Post new investment
const postInversion = posts.createNewInversion;

// Delete deuda, interes
// const delDeuda = del.deleteDeuda;
// const delInteres = del.deleteInteres;

// Update deuda
// const putDeuda = update.updateDeuda;

module.exports = {
  allInvestments,
  allHistInvest,
  alTotalInvest,
  postInversion,
};
