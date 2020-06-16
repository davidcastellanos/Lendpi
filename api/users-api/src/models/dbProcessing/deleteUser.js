const db = require('../db');

const deleteInvestor = async (req) => {
  try {
    const idUser = req.params.id;
    const text = 'DELETE FROM investors WHERE id_user=$1';
    const values = [idUser];
    await db.query(text, values, (err) => {
      if (err) throw err;
    });
    return (`${req.url}Deleted.`);
  } catch (e) {
    return (e);
  }
};

const deleteWorker = async (req) => {
  try {
    const idUser = req.params.id;
    const text = 'DELETE FROM workers WHERE id_user=$1';
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
  deleteInvestor,
  deleteWorker,
};
