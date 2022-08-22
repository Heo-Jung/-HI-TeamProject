const mysql = require("mysql");

const db = mysql.createConnection({
    host: "localhost",
    user: "admin",
    password: "0000",
    database: "web"
});

db.connect();

module.exports = db;