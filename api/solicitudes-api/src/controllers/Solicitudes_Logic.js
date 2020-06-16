// Directs where to send the petitions
const query = require('../models/query_calls');

// Calculate
const solCalculate = async (req, res) => {
  try {
    const resultFinal = await query.queryCalculoFinal(req);
    return (res.status(200).send(resultFinal));
  } catch (e) {
    return (e);
  }
};

// All Solicitud, Product, Product_user
const solAll = async (req, res) => {
  try {
    const allSolicitudes = await query.querySolicitudes();
    return (res.status(200).send(allSolicitudes));
  } catch (e) {
    return (e);
  }
};

const solProdUser = async (req, res) => {
  try {
    const allProdUser = await query.queryProductUsers();
    return (res.status(200).send(allProdUser));
  } catch (e) {
    return (e);
  }
};

const solProducts = async (req, res) => {
  try {
    const allProducts = await query.queryProducts();
    return (res.status(200).send(allProducts));
  } catch (e) {
    return (e);
  }
};

// Solicitud, Product, Product_user By id
const solId = async (req, res) => {
  try {
    const solicitud = await query.querySolicitudById(req);
    return (res.status(200).send(solicitud));
  } catch (e) {
    return (e);
  }
};

const solProdUserId = async (req, res) => {
  try {
    const solicitud = await query.queryProductUsersById(req);
    return (res.status(200).send(solicitud));
  } catch (e) {
    return (e);
  }
};

// POST new solicitud, product, product_user
const solPost = async (req, res) => {
  try {
    await query.postSolicitud(req, res);
    return (res.status(201).send('Solicitud created successfully.'));
  } catch (e) {
    return (e);
  }
};

const productPost = async (req, res) => {
  try {
    await query.postProduct(req, res);
    return (res.status(201).send('Product created successfully.'));
  } catch (e) {
    return (e);
  }
};

const productUserPost = async (req, res) => {
  try {
    await query.postProductUser(req, res);
    return (res.status(201).send('Product created successfully.'));
  } catch (e) {
    return (e);
  }
};

// DELETE solicitud, product, product_user
const solicitudDelete = async (req, res) => {
  try {
    await query.delSolicitud(req, res);
    return (res.status(200).send('Solicitud deleted successfully.'));
  } catch (e) {
    return (e);
  }
};

const productDelete = async (req, res) => {
  try {
    await query.delProduct(req, res);
    return (res.status(200).send('Product deleted successfully.'));
  } catch (e) {
    return (e);
  }
};

const productUserDelete = async (req, res) => {
  try {
    await query.delProductUser(req, res);
    return (res.status(200).send('Product-User deleted successfully.'));
  } catch (e) {
    return (e);
  }
};

//Update solicitud
const solicitudUpdate = async (req, res) => {
  try {
    await query.updateSolicitud(req, res);
    return (res.status(200).send('Solicitud updated.'));
  } catch (e) {
    return (e);
  }
};


module.exports = {
  solAll,
  solId,
  solPost,
  solProdUser,
  solProducts,
  solProdUserId,
  productPost,
  productUserPost,
  solicitudDelete,
  productDelete,
  productUserDelete,
  solCalculate,
  solicitudUpdate,
};
