// Directs where to send the petitions
const query = require('../models/query_calls');

// All Solicitud, Product, Product_user
const allInvest = async (req, res) => {
  try {
    const listaInvestments = await query.allInvestments();
    return (res.status(200).send(listaInvestments));
  } catch (e) {
    return (e);
  }
};

const allHistInvest = async (req, res) => {
  try {
    const listaHistInvest = await query.allHistInvest(req);
    return (res.status(200).send(listaHistInvest));
  } catch (e) {
    return (e);
  }
};

const allTotalInvest = async (req, res) => {
  try {
    const listaTotalInvest = await query.alTotalInvest(req);
    return (res.status(200).send(listaTotalInvest));
  } catch (e) {
    return (e);
  }
};

// POST new solicitud, product, product_user
const inversionPost = async (req, res) => {
  try {
    await query.postInversion(req, res);
    return (res.status(201).send('Inversion realizada.'));
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
// const deudaUpdate = async (req, res) => {
//   try {
//     await query.putDeuda(req, res);
//     return (res.status(200).send('Saldo pendiente actualizado.'));
//   } catch (e) {
//     return (e);
//   }
// };


module.exports = {
  allInvest,
  allHistInvest,
  allTotalInvest,
  inversionPost,

};
