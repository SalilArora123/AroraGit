var mysql = require("mysql");

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "users"
})
db.connect(() => {
    try {
        console.log('Connected :)')
    } catch (err) {
        console.log(err);
    }
})

module.exports = db