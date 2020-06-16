// Functions for GET HTTPMethods
const db = require('../db');

const getAllInvestments = async (req) => {
  try {
    const listaInversiones = [];
    const res = await db.query('SELECT * FROM inversiones;');
    for (const row of res.rows) {
      listaInversiones.push(row);
    }
    return { listaInversiones };
  } catch (e) {
    return (e);
  }
};

const getAllHistInvest = async (req) => {
  try {
    const listTotalInvest = [];
    const res = await db.query(`SELECT * FROM inversiones WHERE id_investor='${req.params.idInvestor}';`);
    for (const row of res.rows) {
      listTotalInvest.push(row);
    }

    return { listTotalInvest };
  } catch (e) {
    return (e);
  }
};

const getAllTotalInvest = async (req) => {
  try {
    const listTotalInvest = [];
    const res = await db.query(`SELECT * FROM inversiones WHERE id_solicitud='${req.params.idSolicitud}';`);
    for (const row of res.rows) {
      listTotalInvest.push(row);
    }
    return { listTotalInvest };
  } catch (e) {
    return (e);
  }
};

module.exports = {
  getAllInvestments,
  getAllHistInvest,
  getAllTotalInvest,
};
