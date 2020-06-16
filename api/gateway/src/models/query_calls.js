// Handle the requests and call corresponding method functions for processing
const gets = require('./dbProcessing/gets');
const posts = require('./dbProcessing/posts');
// const del = require('./dbProcessing/deletes');
const update = require('./dbProcessing/puts');
const helper = require('./dbProcessing/helpers/helpers');

//Calculator
const queryCalculoFinal = helper.getCalResult;

// Query All objects
const allSolicitudes = gets.getAllSolicitudes;
const investorProfile = gets.getInvProfile;
const workerProfile = gets.getWorProfile;

// Post new objects
const postSolicitud = posts.createNewSolicitud;
const postInvestment = posts.createNewInvestment;
const postInvestor = posts.createNewInvestor;
const postWorker = posts.createNewWorker;

// Delete objects
// const delDeuda = del.deleteDeuda;
// const delInteres = del.deleteInteres;

// Update objects
const putDeuda = update.updateDeuda;

module.exports = {
  allSolicitudes,
  postSolicitud,
  postInvestment,
  putDeuda,
  investorProfile,
  workerProfile,
  postWorker,
  postInvestor,
  queryCalculoFinal,
  };
