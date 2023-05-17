"use strict";

const { Pool } = require("pg");

const pool = new Pool({
  host: "postgres",
  user: "root",
  password: "root",
});

const createTableQuery = `
  CREATE TABLE IF NOT EXISTS users (
    id SERIAL PRIMARY KEY,
    firstname VARCHAR(100),
    lastname VARCHAR(100),
    username VARCHAR(100),
    avatar VARCHAR(200)
  );
`;

pool.query(createTableQuery);

module.exports = pool;
