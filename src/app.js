import expres from "express";
import { pool } from "./db.js";
import { PORT } from "./config.js";

const app = expres();

app.get("/", async (req, res) => {
  const [rows] = await pool.query("SELECT * FROM users");
  res.json(rows);
});
app.get("/ping", async (req, res) => {
  const [result] = await pool.query(`SELECT "hello world" as RESULT`);
  // console.log(result)
  res.json(result[0]);
  // res.send('Welcome to Serverx')
});

app.get("/create", async (req, res) => {
  const result = await pool.query('INSERT INTO users(name) VALUES ("John")');
  // console.log(result)
  res.json(result);
  // res.send('Welcome to Serverx')
});

app.listen(PORT);
console.log("Server on port ", PORT);
