// Functions for GET HTTPMethods
const db = require('../db');

const getAllDeudas = async () => {
  try {
    const listaDeudas = [];
    const res = await db.query('SELECT * FROM deuda;');
    for (const row of res.rows) {
      listaDeudas.push(row);
    }
    return { listaDeudas };
  } catch (e) {
    return (e);
  }
};

const getAllIntereses = async () => {
  try {
    const listIntereses = [];
    const res = await db.query('SELECT * FROM tasas_de_interes;');
    for (const row of res.rows) {
      listIntereses.push(row);
    }
    return { listIntereses };
  } catch (e) {
    return (e);
  }
};

const getDeudaById = async (req) => {
  try {
    const deuda = [];
    const res = await db.query(`SELECT * FROM deuda WHERE id_worker='${req.params.id}';`);
    for (const row of res.rows) {
      deuda.push(row);
    }
    return { deuda };
  } catch (e) {
    return (e);
  }
};

module.exports = {
  getAllDeudas,
  getAllIntereses,
  getDeudaById,
};
