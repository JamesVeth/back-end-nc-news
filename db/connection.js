const { Pool } = require("pg");

// Production / Render
if (process.env.DATABASE_URL) {
  const url = new URL(process.env.DATABASE_URL);

  // Build the config manually instead of passing the full URL
  const config = {
    host: url.hostname,              // Supabase host
    port: parseInt(url.port),        // 5432
    user: url.username,              // postgres
    password: url.password,          // your password
    database: url.pathname.slice(1), // remove leading '/'
    ssl: { rejectUnauthorized: false }, // required for Render -> Supabase
  };

  const db = new Pool(config);
  module.exports = db;

} else {
  // Local development (optional)
  const config = {
    host: process.env.PGHOST,
    user: process.env.PGUSER,
    password: process.env.PGPASSWORD,
    database: process.env.PGDATABASE,
    port: process.env.PGPORT,
  };

  const db = new Pool(config);
  module.exports = db;
}