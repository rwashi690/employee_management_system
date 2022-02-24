const mysql = require('mysql2');

// Define the connection to the database
const connection = mysql.createConnection({
    host:"127.0.0.1",
    user:"root",
    password:"",
    database:"employees_db"
});

// Connect to the database and if it can't connect throw an error
connection.connect(function(err){
    if (err) throw err;
})

//export out the module
module.exports = connection;