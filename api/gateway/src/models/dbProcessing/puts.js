// Functions for UPDATE HTTPMethods
const axios = require('axios');
const helper = require('./helpers/helpers');

const updateDeuda = async (req) => {
  try {
    const today = new Date();
    const date = `${(today.getMonth() + 1).toString()}-${today.getDate().toString()}-${today.getFullYear().toString()}`;
    const saldoNew = await helper.getNewSaldo(req);
    const res = await axios.put(`https://database-lendpi-deuda.herokuapp.com/deudas/update/deuda/${req.params.idWorker}`, {
      pendiente: saldoNew,
      fecha: date,
    });
    return (res);
  } catch (e) {
    return (e);
  }
};

const updateSolicitud = async (req) => {
  try {
    const acumuladoNew = await helper.addAcumulado(req);
    const res = await axios.put(`https://database-lendpi.herokuapp.com/solicitudes/update/solicitud/${req.body.id_worker}`, {
      total_acumulado: acumuladoNew,
    });
    return (acumuladoNew);
  } catch (e) {
    return (e);
  }
};

module.exports = {
  updateDeuda,
  updateSolicitud,
};
