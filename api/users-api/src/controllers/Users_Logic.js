const query = require('../models/query_calls');

// All
const invAll = (req, res) => query.queryInv()
  .then((a) => res.send(a));

const workersAll = async (req, res) => {
  try {
    const allWork = await query.queryWorkers();
    return (res.status(200).send(allWork));
  } catch (e) {
    return (e);
  }
};

// By id
const invId = async (req, res) => {
  try {
    const userInv = await query.qidInv(req);
    return (res.status(200).send(userInv));
  } catch (e) {
    return (e);
  }
};

const worId = async (req, res) => {
  try {
    const userWor = await query.qidWor(req);
    return (res.status(200).send(userWor));
  } catch (e) {
    return (e);
  }
};

// POST new investor or worker
const invPost = async (req, res) => {
  try {
    await query.postInv(req, res);
    return (res.status(201).send('Investor created successfuly.'));
  } catch (e) {
    return (e);
  }
};

const worPost = async (req, res) => {
  try {
    await query.postWor(req, res);
    return (res.status(201).send('Worker created successfuly.'));
  } catch (e) {
    return (e);
  }
};

// DELETE investor or worker
const invDel = async (req, res) => {
  try {
    await query.delInv(req, res);
    return (res.status(200).send('Investor deleted successfuly.'));
  } catch (e) {
    return (e);
  }
};

const worDel = async (req, res) => {
  try {
    await query.delWor(req, res);
    return (res.status(200).send('Worker deleted successfuly.'));
  } catch (e) {
    return (e);
  }
};

module.exports = {
  invAll,
  workersAll,
  invId,
  worId,
  invPost,
  worPost,
  worDel,
  invDel,
};
