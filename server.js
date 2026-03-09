const express = require("express")
const { Pool } = require("pg")

const app = express()

const pool = new Pool({
  host: process.env.POSTGRES_HOST,
  port: process.env.POSTGRES_PORT,
  user: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PASSWORD,
  database: process.env.POSTGRES_DB
})

app.get("/users", async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM users")
    res.json(result.rows)
  } catch (err) {
    console.error(err)
    res.status(500).json({ error: err.message })
  }
})

app.listen(3000, "0.0.0.0", () => {
  console.log("API running")
})