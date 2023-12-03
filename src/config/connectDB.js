// get the client
const mysql = require("mysql2");

// create the connection to database
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  database: "NodeJS",
});

// Query
connection.query("SELECT * FROM `Users`", function (err, results, fields) {
  console.log("Kết quả :", results); // results contains rows returned by server
});

module.exports = connection;
