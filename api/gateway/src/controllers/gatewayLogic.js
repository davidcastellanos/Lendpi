// Directs where to send the petitions
const query = require('../models/query_calls');

//Calculate
const solCalculate = async (req, res) => {
  try {
    const resultFinal = await query.queryCalculoFinal(req);
    return (res.status(200).send(resultFinal));
  } catch (e) {
    return (e);
  }
};

// All Solicitud, Product, Product_user
const allSol = async (req, res) => {
  try {
    const listaSolicitudes = await query.allSolicitudes(req);
    return (res.status(200).send(listaSolicitudes));
  } catch (e) {
    return (e);
  }
};

const investorInfo = async (req, res) => {
  try {
    const profile = await query.investorProfile(req);
    return (res.status(200).send(profile));
  } catch (e) {
    return (e);
  }
};

const workerInfo = async (req, res) => {
  try {
    const profile = await query.workerProfile(req);
    return (res.status(200).send(profile));
  } catch (e) {
    return (e);
  }
};

// POST new solicitud, product, product_user
const solicitudPost = async (req, res) => {
  try {
    await query.postSolicitud(req, res);
    return (res.status(201).send('Solicitud generada.'));
  } catch (e) {
    return (e);
  }
};

const investmentPost = async (req, res) => {
  try {
    await query.postInvestment(req, res);
    return (res.status(201).send('Inversión realizada.'));
  } catch (e) {
    return (e);
  }
};

const investorPost = async (req, res) => {
  try {
    await query.postInvestor(req, res);
    return (res.status(201).send('Usuario inversionista creado.'));
  } catch (e) {
    return (e);
  }
};

const workerPost = async (req, res) => {
  try {
    await query.postWorker(req, res);
    return (res.status(201).send('Usuario trabajador creado.'));
  } catch (e) {
    return (e);
  }
};

// DELETE interes, deuda
// const deudaDelete = async (req, res) => {
//   try {
//     await query.delDeuda(req, res);
//     return (res.status(200).send('Deuda eliminada.'));
//   } catch (e) {
//     return (e);
//   }
// };

// const interesDelete = async (req, res) => {
//   try {
//     await query.delInteres(req, res);
//     return (res.status(200).send('Interes eliminado.'));
//   } catch (e) {
//     return (e);
//   }
// };

// UPDATE  deuda
const deudaUpdate = async (req, res) => {
  try {
    await query.putDeuda(req, res);
    return (res.status(200).send('Saldo pendiente actualizado.'));
  } catch (e) {
    return (e);
  }
};

module.exports = {
  allSol,
  solicitudPost,
  investmentPost,
  deudaUpdate,
  investorInfo,
  workerInfo,
  workerPost,
  investorPost,
  solCalculate,
};
