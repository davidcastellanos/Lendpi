// Functions for POST HTTPMethods
const db = require('../db');

const createNewDeuda = async (req) => {
  try {
    const today = new Date();
    const date = `${(today.getMonth() + 1).toString()}-${today.getDate().toString()}-${today.getFullYear().toString()}`;

    const text = 'INSERT INTO deuda (id_deuda, id_worker, pendiente, fecha, fecha_de_generacion, fecha_de_finalizacion, tasa_de_interes) VALUES ($1, $2, $3, $4, $5, $6, $7)';
    const value = [req.body.id_deuda, req.body.id_worker, req.body.pendiente, date, date, date, req.body.tasas_de_interes];
    await db.query(text, value, (err) => {
      if (err) throw err;
    });
    return (req.body);
  } catch (e) {
    return (e);
  }
};

const createNewInteres = async (req) => {
  try {
    const text = 'INSERT INTO tasas_de_interes (id_tasa, porcentaje) VALUES ($1, $2)';
    const value = [req.body.id_tasa, req.body.porcentaje];
    await db.query(text, value, (err) => {
      if (err) throw err;
    });
    return (req.body);
  } catch (e) {
    return (e);
  }
};

module.exports = {
  createNewDeuda,
  createNewInteres,
};
