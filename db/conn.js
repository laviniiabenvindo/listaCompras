const mysql = require("mysql2");

const conn = mysql.createConnection({
  host: "127.0.0.1",
  port: 3306,
  user: "aluno_medio",
  password: "@lunoSenai23.",
  database: "lista_compras",
});

conn.connect((err) => {
  if (err) {
    console.log(err);
  }
  console.log("MYSQL Conectado!!!");
});

module.exports = conn;
