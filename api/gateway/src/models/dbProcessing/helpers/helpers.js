const axios = require('axios');

// Calculate final payment
const getCalResult = async (req) => {
  try {
    const i = req.params.interest / 100;
    const fee = req.params.amount / ((1 - Math.pow(i + 1, -(req.params.time / 12))) / i);
    const resultRaw = req.params.amount * Math.pow(1 + req.params.interest / 100, (req.params.time / 12));
    const totalPayment = resultRaw.toFixed(2).replace('.', ',');
    const monthlyRaw = parseInt(totalPayment) / parseInt(req.params.time);
    const monthlyFee = monthlyRaw.toFixed(2).replace('.', ',');
    return { totalPayment, monthlyFee };
  } catch (e) {
    return (e);
  }
};


// Calculate debt after payment
const getNewSaldo = async (req) => {
  try {
    const res = await axios.get(`https://database-lendpi-deuda.herokuapp.com/deudas/${req.params.idWorker}`);
    const newSaldo = res.data.deuda[0].pendiente - req.params.amount;
    return (newSaldo);
  } catch (e) {
    return (e);
  }
};

// Calculate request accumulation after investment
const addAcumulado = async (req) => {
  try {
    const query = await axios.get(`https://database-lendpi.herokuapp.com/solicitudes/solicitud/${req.body.id_solicitud}`);
    const res = query.data.solicitud[0].total_acumulado + req.body.monto_invertido;
    return (res);
  } catch (e) {
    return (e);
  }
};

module.exports = {
  getNewSaldo,
  addAcumulado,
  getCalResult,
};
