"use strict";

const { Pool } = require("pg");

const pool = new Pool({
  host: "authorization_db",
  user: "root",
  password: "root",
});

const createUsersTableQuery = `
    CREATE TABLE IF NOT EXISTS users (
        id SERIAL PRIMARY KEY,
        email VARCHAR(255) UNIQUE NOT NULL,
        password VARCHAR(255) NOT NULL,
        role VARCHAR(50)
    );
`;

const createProductsTableQuery = `
    CREATE TABLE IF NOT EXISTS products (
        id SERIAL PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        price NUMERIC(10, 2) NOT NULL,
        quantity INTEGER NOT NULL
    );
`;

try {
  pool.query(createUsersTableQuery);
  pool.query(createProductsTableQuery);
  console.log("Tables created successfully!");
} catch (error) {
  throw error;
}
module.exports = pool;
