// Handle connection to DB
// process.env.DATABASE_URL
// postgres://ysttomtdsyefza:4cf5c5a99f8bbe2df3fd697697798810cf178147c65443c632deb87d5130688c@ec2-54-86-170-8.compute-1.amazonaws.com:5432/da9sm50spoe60r

const { Client } = require('pg');

const client = new Client({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false,
  },
});

client.connect();

module.exports = client;
