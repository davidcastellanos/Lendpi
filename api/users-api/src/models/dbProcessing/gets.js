const db = require('../db');

// get all
const getAllInvestors = async () => {
  try {
    const listInv = [];
    const res = await db.query('SELECT * FROM investors;');
    for (const row of res.rows) {
      listInv.push(row);
    }
    return { listInv };
  } catch (e) {
    return (e);
  }
};

const getAllWorkers = async () => {
  try {
    const listWork = [];
    const res = await db.query('SELECT * FROM workers;');
    for (const row of res.rows) {
      listWork.push(row);
    }
    return { listWork };
  } catch (e) {
    return (e);
  }
};

// get by id
const getInvestorById = async (req) => {
  try {
    const listInv = [];
    const res = await db.query(`SELECT * FROM investors WHERE id_user='${req.params.id}';`);
    for (const row of res.rows) {
      listInv.push(row);
    }
    return { listInv };
  } catch (e) {
    return (e);
  }
};

const getWorkerById = async (req) => {
  try {
    const listWork = [];
    const res = await db.query(`SELECT * FROM workers WHERE id_user='${req.params.id}';`);
    for (const row of res.rows) {
      listWork.push(row);
    }
    return { listWork };
  } catch (e) {
    return (e);
  }
};

const getInvestorUid = async (req) => {
  try {
    let uuid;
    const res = await db.query(`SELECT id_user FROM investors WHERE email='${req.params.email}';`);
    uuid = res.rows[0].id_user;
    return ( uuid );
  } catch (e) {
    return (e);
  }
};

const getWorkerUid = async (req) => {
  try {
    let uuid;
    const res = await db.query(`SELECT id_user FROM workers WHERE email='${req.params.email}';`);
    uuid = res.rows[0].id_user;
    return ( uuid );
  } catch (e) {
    return (e);
  }
};

module.exports = {
  getAllInvestors,
  getAllWorkers,
  getInvestorById,
  getWorkerById,
  getInvestorUid,
  getWorkerUid,
};
