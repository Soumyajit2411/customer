const client = require("./connection.js");
const express = require("express");
const router = express.Router();
client.connect();
router.get("/users", (req, res) => {
  client.query(`Select * from company`, (err, result) => {
    if (!err) {
      res.send(result.rows);
    }
  });
  client.end;
});

router.get("/users/:id", (req, res) => {
  client.query(
    `Select * from company where id=${req.params.id}`,
    (err, result) => {
      if (!err) {
        res.send(result.rows);
      }
    }
  );
  client.end;
});

router.post("/users", (req, res) => {
  const user = req.body;
  console.log(user);
  let insertQuery = `INSERT INTO COMPANY (ID,NAME,AGE,ADDRESS,SALARY) VALUES (${user.id}, '${user.name}', ${user.age}, '${user.address}', ${user.salary})`;

  client.query(insertQuery, (err, result) => {
    if (!err) {
      res.send("Insertion was successful");
    } else {
      console.log(err.message);
    }
  });
  client.end;
});

router.put("/users/:id", (req, res) => {
  let user = req.body;
  let updateQuery = `UPDATE company SET name='${user.name}', age=${user.age}, address='${user.address}', salary=${user.salary} WHERE ID = ${user.id}`;

  client.query(updateQuery, (err, result) => {
    if (!err) {
      res.send("Update was successful");
    } else {
      console.log(err.message);
    }
  });
  client.end;
});

router.delete("/users/:id", (req, res) => {
  let insertQuery = `delete from company where id=${req.params.id}`;

  client.query(insertQuery, (err, result) => {
    if (!err) {
      res.send("Deletion was successful");
    } else {
      console.log(err.message);
    }
  });
  client.end;
});

module.exports = router;
