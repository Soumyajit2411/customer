const { Pool } = require(`pg`);
const express = require("express");
const app = express();
const port = 3000;

const pool = new Pool({
  host: "localhost",
  user: "postgres",
  port: 5432,
  password: "soumyajit",
  database: "clapit",
});

pool.connect();

pool.query("select * from company", (err, response) => {
  if (!err) {
    app.get("/", (req, res) => {
      res.send(response.rows);
    });
  } else {
    console.log(err.message);
  }
  pool.end();
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
