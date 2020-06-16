// Functions for UPDATE HTTPMethods
const db = require('../db');

const putsSolicitud = async (req) => {
  try {
    const { total_acumulado } = req.body;
    const text = `UPDATE solicitudes SET total_acumulado='${total_acumulado }' WHERE id_user='${req.params.idWorker}';`;
    await db.query(text, (err) => {
      if (err) throw err;
    });
    return (req.body);
  } catch (e) {
    return (e);
  }
};

module.exports = {
  putsSolicitud,
};
