// Functions for POST HTTPMethods
const db = require('../db');

const createNewInversion = async (req) => {
  try {
    const today = new Date();
    const date = `${(today.getMonth() + 1).toString()}-${today.getDate().toString()}-${today.getFullYear().toString()}`;

    const text = 'INSERT INTO inversiones (id_inversion_realizada, id_solicitud, monto_invertido, fecha, id_investor, id_worker) VALUES ($1, $2, $3, $4, $5, $6)';
    const value = [req.body.id_inversion_realizada, req.body.id_solicitud, req.body.monto_invertido, date, req.body.id_investor, req.body.id_worker];
    await db.query(text, value, (err) => {
      if (err) throw err;
    });
    return (req.body);
  } catch (e) {
    return (e);
  }
};

module.exports = {
  createNewInversion,
};
