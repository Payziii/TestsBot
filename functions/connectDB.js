const { Client } = require('pg');
require('dotenv').config();

module.exports.connectDB = async () => {
  const client = new Client({
    host: process.env.PG_HOST,
    port: process.env.PG_PORT,
    user: process.env.PG_USER,
    password: process.env.PG_PASS,
    database: process.env.PG_DB,
  });
  await client.connect();
  return client;
};