const express = require("express");
const mysql = require("mysql");
const cors = require("cors");
const app = express();
app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "signup",
});

app.post("/signup", (req, res) => {
  const sql = "INSERT INTO login (`name`, `email`, `password`) VALUE(?)";
  const values = [req.body.name, req.body.email, req.body.password];
  db.query(sql, [values], (err, data) => {
    if (err) {
      console.log("errSignUp");
      return res.json("Error");
    }
    return res.json(data);
  });
});

app.post("/signin", (req, res) => {
  const sql = "SELECT * FROM login WHERE `email` = ? AND `password` = ?";
  db.query(sql, [req.body.email, req.body.password], (err, data) => {
    let name = data[0]?.name;
    let id = data[0]?.id;
    let quote = data[0]?.quote;
    let tasks = data[0]?.tasks;
    if (err) {
      return res.json("Error");
    }
    if (data.length > 0) {
      return res.json({
        status: "Success",
        name: name,
        id: id,
        quote: quote,
        tasks: tasks,
      });
    } else {
      return res.json("Fail");
    }
  });
});

app.post("/profile", (req, res) => {
  const sql = "UPDATE login SET `quote` = ? WHERE `id` = ?";
  db.query(sql, [req.body.quote, req.body.id], (err, data) => {
    if (err) {
      console.log("er");
      return res.json("Error");
    }
    console.log("send");
    return res.json(data);
  });
});

app.post("/", (req, res) => {
  const sql = "UPDATE login SET `tasks` = ? WHERE `id` = ?";
  db.query(sql, [req.body.tasks, req.body.id], (err, data) => {
    if (err) {
      console.log("errTask");
      return res.json("Error");
    }
    console.log("sent");
    return res.json(data);
  });
});

app.listen(8081, () => {
  console.log("listening");
});
