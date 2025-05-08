const express = require('express');
const { Pool } = require('pg');
const cors = require('cors'); // ← این خط اضافه شده
const app = express();
const port = 3001;

// فعال‌سازی CORS برای تمام درخواست‌ها
app.use(cors()); // ← این خط اضافه شده

const pool = new Pool({
  user: process.env.POSTGRES_USER,
  host: process.env.POSTGRES_HOST,
  database: process.env.POSTGRES_DB,
  password: process.env.POSTGRES_PASSWORD,
  port: 5432,
});

app.get('/', async (req, res) => {
  try {
    const result = await pool.query('SELECT NOW()');
    res.send(`Current time from DB: ${result.rows[0].now}`);
  } catch (err) {
    console.error(err);
    res.status(500).send('Database error');
  }
});

app.listen(port, () => {
  console.log(`Backend listening at http://localhost:${port}`);
});
