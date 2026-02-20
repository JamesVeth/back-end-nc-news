const { Pool } = require("pg");
require('dotenv').config();

const ENV = process.env.NODE_ENV || "development";

let config = {};

if (ENV === "development" || ENV === "test") {
  config = {
    host: process.env.PGHOST,
    user: process.env.PGUSER,
    password: process.env.PGPASSWORD,
    database: process.env.PGDATABASE,
    port: process.env.PGPORT,
  };
}

if (ENV === "production") {
  config = {
    connectionString: process.env.DATABASE_URL,
    ssl: { rejectUnauthorized: false }, // necessary for hosted DB
  };
}

const db = new Pool(config);

module.exports = db;