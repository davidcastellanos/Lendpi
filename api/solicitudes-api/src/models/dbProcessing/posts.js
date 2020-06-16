// Functions for POST HTTPMethods
const db = require('../db');

const createNewSolicitud = async (req) => {
  try {
    const today = new Date();
    const date = `${(today.getMonth() + 1).toString()}-${today.getDate().toString()}-${today.getFullYear().toString()}`;
    const text = 'INSERT INTO solicitudes (id_solicitud, created_at, marca, modelo, year_model, tiempo_financiacion, valor_financiacion, id_user, tipo_producto) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9)';
    const value = [req.body.id_solicitud, date, req.body.marca, req.body.modelo, req.body.year_model, req.body.tiempo_financiacion, req.body.valor_financiacion, req.body.id_user, req.body.tipo_producto];
    await db.query(text, value, (err) => {
      if (err) throw err;
    });
    return (req.body);
  } catch (e) {
    return (e);
  }
};

const createNewProduct = async (req) => {
  try {
    const text = 'INSERT INTO products (tipo_producto) VALUES ($1)';
    const value = [req.body.tipo_producto];
    await db.query(text, value, (err) => {
      if (err) throw err;
    });
    return (req.body);
  } catch (e) {
    return (e);
  }
};

const createNewProductUser = async (req) => {
  try {
    const text = 'INSERT INTO product_user (id_user, id_producto, modelo, marca, year_model) VALUES ($1, $2, $3, $4, $5)';
    const value = [req.body.id_user, req.body.id_producto, req.body.modelo, req.body.marca, req.body.year_model];
    await db.query(text, value, (err) => {
      if (err) throw err;
    });
    return (req.body);
  } catch (e) {
    return (e);
  }
};

module.exports = {
  createNewSolicitud,
  createNewProduct,
  createNewProductUser,
};
