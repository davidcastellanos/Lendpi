// Directs where to send the petitions
const query = require('../models/query_calls');

// All Solicitud, Product, Product_user
const allDeudas = async (req, res) => {
  try {
    const listaDeudas = await query.queryDeudas();
    return (res.status(200).send(listaDeudas));
  } catch (e) {
    return (e);
  }
};

const allInt = async (req, res) => {
  try {
    const listaIntereses = await query.queryIntereses();
    return (res.status(200).send(listaIntereses));
  } catch (e) {
    return (e);
  }
};

// // Solicitud, Product, Product_user By id
const deudaById = async (req, res) => {
  try {
    const deuda = await query.queryDeudaById(req);
    return (res.status(200).send(deuda));
  } catch (e) {
    return (e);
  }
};


// // POST new solicitud, product, product_user
const deudaPost = async (req, res) => {
  try {
    await query.postDeuda(req, res);
    return (res.status(201).send('Deuda generada.'));
  } catch (e) {
    return (e);
  }
};

const interesPost = async (req, res) => {
  try {
    await query.postInteres(req, res);
    return (res.status(201).send('Interes Ingresado.'));
  } catch (e) {
    return (e);
  }
};

// DELETE interes, deuda
const deudaDelete = async (req, res) => {
  try {
    await query.delDeuda(req, res);
    return (res.status(200).send('Deuda eliminada.'));
  } catch (e) {
    return (e);
  }
};

const interesDelete = async (req, res) => {
  try {
    await query.delInteres(req, res);
    return (res.status(200).send('Interes eliminado.'));
  } catch (e) {
    return (e);
  }
};

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
  allDeudas,
  allInt,
  deudaById,
  deudaPost,
  interesPost,
  deudaDelete,
  interesDelete,
  deudaUpdate,
};
