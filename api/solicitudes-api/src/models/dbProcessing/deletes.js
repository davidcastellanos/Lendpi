// Functions for DELETE HTTPMethods
const db = require('../db');

const deleteSolicitud = async (req) => {
  try {
    const idSolicitud = req.params.id;
    const text = 'DELETE FROM solicitudes WHERE id_solicitud=$1';
    const values = [idSolicitud];
    await db.query(text, values, (err) => {
      if (err) throw err;
    });
    return (`${req.url}Deleted.`);
  } catch (e) {
    return (e);
  }
};

const deleteProduct = async (req) => {
  try {
    const idProduct = req.params.id;
    const text = 'DELETE FROM products WHERE tipo_producto=$1';
    const values = [idProduct];
    await db.query(text, values, (err) => {
      if (err) throw err;
    });
    return (`${req.url}Deleted.`);
  } catch (e) {
    return (e);
  }
};

const deleteProductUser = async (req) => {
  try {
    const idUser = req.params.id;
    const text = 'DELETE FROM product_user WHERE id_user=$1';
    const values = [idUser];
    await db.query(text, values, (err) => {
      if (err) throw err;
    });
    return (`${req.url}Deleted.`);
  } catch (e) {
    return (e);
  }
};

module.exports = {
  deleteSolicitud,
  deleteProduct,
  deleteProductUser,
};
