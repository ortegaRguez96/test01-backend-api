const express = require("express")
const { Pool } = require("pg")

const app = express()

const pool = new Pool({
  host: "postgres",
  user: "postgres",
  password: "password",
  database: "mydb",
  port: 5432
})

app.get("/users", async (req, res) => {
  const result = await pool.query("SELECT * FROM users")
  res.json(result.rows)
})

app.listen(3000, () => {
  console.log("API running")
})