// Functions for GET HTTPMethods
const db = require('../db');

// Calculate final payment
const getCalResult = async (req) => {
  try {
    const i = req.params.interest / 100;
    const fee = req.params.amount / ((1 - Math.pow(i + 1, -(req.params.time / 12))) / i);

    // Calculate payout formula
    const resultRaw = req.params.amount * Math.pow(1 + req.params.interest / 100, (req.params.time / 12));
    const totalPayment = resultRaw.toFixed(2).replace('.', ',');
    const monthlyRaw = parseInt(totalPayment) / parseInt(req.params.time);
    const monthlyFee = monthlyRaw.toFixed(2).replace('.', ',');

    return { totalPayment, monthlyFee };
  } catch (e) {
    return (e);
  }
};

// get all
const getAllSolicitudes = async () => {
  try {
    const listSolicitudes = [];
    const res = await db.query('SELECT * FROM solicitudes;');
    for (const row of res.rows) {
      listSolicitudes.push(row);
    }
    return { listSolicitudes };
  } catch (e) {
    return (e);
  }
};

const getAllProdUser = async () => {
  try {
    const listProductUser = [];
    const res = await db.query('SELECT * FROM product_user;');
    for (const row of res.rows) {
      listProductUser.push(row);
    }
    return { listProductUser };
  } catch (e) {
    return (e);
  }
};

const getAllProducts = async () => {
  try {
    const listProductUser = [];
    const res = await db.query('SELECT * FROM products;');
    for (const row of res.rows) {
      listProductUser.push(row);
    }
    return { listProductUser };
  } catch (e) {
    return (e);
  }
};

// get by id
const getSolicitudById = async (req) => {
  try {
    const solicitud = [];
    const res = await db.query(`SELECT * FROM solicitudes WHERE id_solicitud='${req.params.id}';`);
    for (const row of res.rows) {
      solicitud.push(row);
    }
    return { solicitud };
  } catch (e) {
    return (e);
  }
};

const getProductUserById = async (req) => {
  try {
    const listWork = [];
    const res = await db.query(`SELECT * FROM product_user WHERE id_user='${req.params.id}';`);
    for (const row of res.rows) {
      listWork.push(row);
    }
    return { listWork };
  } catch (e) {
    return (e);
  }
};

module.exports = {
  getAllSolicitudes,
  getAllProdUser,
  getSolicitudById,
  getAllProducts,
  getProductUserById,
  getCalResult,
};
