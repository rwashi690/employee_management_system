//Import in the connection js file
const connection = require ("./connection");

// Creating a class to manage the database
class database {
    constructor(connection){
        this.connection =connection;
    }

    //First create a function in the class to find the employees and managers
    findEmployees(){
        // Create a JavaScript query to select the necessary data for
        return this.connection.promise().query(
            "SELECT id, firstName, lastName, positionId, managerId FROM employee"
        );
    }
    fireEmployee(employeeID){
        return this.connection.promise().query(
            "DELETE FROM employee WHERE id=?", employeeID
        );
    }
    hireEmployee(employee){
        return this.connection.promise().query(
            "INSERT INTO employee SET?", employee
        );
    }
}   

module.exports = new database(connection);
