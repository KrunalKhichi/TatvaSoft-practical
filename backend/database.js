require("dotenv").config();

const mysql = require("mysql");

const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
});

connection.connect((error) => {
  if (error) {
    console.log("A error has been occured while connecting to database");
    throw error;
  }
});

module.exports = connection;
