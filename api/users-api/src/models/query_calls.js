const gets = require('./dbProcessing/gets');
const posts = require('./dbProcessing/postUser');
const del = require('./dbProcessing/deleteUser');
// Query All
const queryInv = gets.getAllInvestors;
const queryWorkers = gets.getAllWorkers;

// Query by id
const qidInv = gets.getInvestorById;
const qidWor = gets.getWorkerById;
const qUidInv = gets.getInvestorUid;
const qUidWor = gets.getWorkerUid;

// Post new users inv and wor
const postInv = posts.createNewInvestor;
const postWor = posts.createNewWorker;

// Delete users inv and wor
const delInv = del.deleteInvestor;
const delWor = del.deleteWorker;

module.exports = {
  queryInv,
  queryWorkers,
  qidInv,
  qidWor,
  postInv,
  postWor,
  delInv,
  delWor,
  qUidInv,
  qUidWor,
};
