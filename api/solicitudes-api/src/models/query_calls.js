// Handle the requests and call corresponding method functions for processing
const gets = require('./dbProcessing/gets');
const posts = require('./dbProcessing/posts');
const del = require('./dbProcessing/deletes');
const puts = require('./dbProcessing/puts');

// Query All solicitud, product, product_user
const queryCalculoFinal = gets.getCalResult;

// Query All solicitud, product, product_user
const querySolicitudes = gets.getAllSolicitudes;
const queryProductUsers = gets.getAllProdUser;
const queryProducts = gets.getAllProducts;

// Query by id solicitud, product, product_user
const querySolicitudById = gets.getSolicitudById;
const queryProductUsersById = gets.getProductUserById;

// Post new solicitud, product, product_user
const postSolicitud = posts.createNewSolicitud;
const postProduct = posts.createNewProduct;
const postProductUser = posts.createNewProductUser;

// Delete solicitud, product, product_user
const delSolicitud = del.deleteSolicitud;
const delProduct = del.deleteProduct;
const delProductUser = del.deleteProductUser;

//Update solicitud method
const updateSolicitud = puts.putsSolicitud;

module.exports = {
  querySolicitudes,
  querySolicitudById,
  queryProductUsers,
  postSolicitud,
  queryProducts,
  queryProductUsersById,
  postProduct,
  postProductUser,
  delSolicitud,
  delProduct,
  delProductUser,
  queryCalculoFinal,
  updateSolicitud,
};
