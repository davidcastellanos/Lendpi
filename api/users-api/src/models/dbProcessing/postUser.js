const db = require('../db');

const createNewInvestor = async (req) => {
  try {
    const today = new Date();
    const date = `${(today.getMonth() + 1).toString()}-${today.getDate().toString()}-${today.getFullYear().toString()}`;
    const text = 'INSERT INTO investors (id_user, created_at, first_name, last_name, token, email, photo) VALUES ($1, $2, $3, $4, $5, $6, $7)';
    const value = [req.body.id_user, date, req.body.first_name, req.body.last_name, req.body.token, req.body.email, req.body.photo];
    await db.query(text, value, (err) => {
      if (err) throw err;
    });
    return (req.body);
  } catch (e) {
    return (e);
  }
};

const createNewWorker = async (req) => {
  try {
    const today = new Date();
    const date = `${(today.getMonth() + 1).toString()}-${today.getDate().toString()}-${today.getFullYear().toString()}`;
    const text = 'INSERT INTO workers (id_user, created_at, first_name, last_name, token, email, photo) VALUES ($1, $2, $3, $4, $5, $6, $7)';
    const value = [req.body.id_user, date, req.body.first_name, req.body.last_name, req.body.token, req.body.email, req.body.photo];
    await db.query(text, value, (err) => {
      if (err) throw err;
    });
    return (req.body);
  } catch (e) {
    return (e);
  }
};

module.exports = {
  createNewInvestor,
  createNewWorker,
};
