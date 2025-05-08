const express = require('express');
const { Pool } = require('pg');
const app = express();
const port = 3001;

const pool = new Pool({
  user: process.env.POSTGRES_USER,
  host: process.env.POSTGRES_HOST,
  database: process.env.POSTGRES_DB,
  password: process.env.POSTGRES_PASSWORD,
  port: 5432,
});


app.get('/', async (req, res) => {
  const result = await pool.query('SELECT NOW()');
  res.send(`Current time from DB: ${result.rows[0].now}`);
});

app.listen(port, () => {
  console.log(`Backend listening at http://localhost:${port}`);
});
