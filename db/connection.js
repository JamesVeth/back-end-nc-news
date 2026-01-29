const { Pool } = require("pg");

const ENV = process.env.NODE_ENV || 'development'
require('dotenv').config({ path: `${__dirname}/../.env.${ENV}` });

const db = new Pool({
  host: process.env.PGHOST,
  user: process.env.PGUSER,
  password: process.env.PGPASSWORD,
  database: process.env.PGDATABASE,
  port: process.env.PGPORT,
});

if (!process.env.PGDATABASE) {
    throw new Error("No PGDATABASE configured")
} else { 
    console.log(`Connected to ${process.env.PGDATABASE}`)
}

module.exports = db;