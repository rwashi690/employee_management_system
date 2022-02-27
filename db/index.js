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
            "SELECT employee.id, employee.firstName, employee.lastName, role.title, department.departmentName as department, role.salary, CONCAT(manager.firstName, '', manager.lastName) AS manager FROM employee LEFT JOIN role on employee.positionId=role.id LEFT JOIN department on role.departmentId=department.id LEFT JOIN employee manager on manager.id=employee.managerId;"
        );
    }
    fireEmployee(employeeID){
        return this.connection.promise().query(
            "DELETE FROM employee WHERE id=?", employeeID
        );
    }
    hireEmployee(employee){
        return this.connection.promise().query(
            "INSERT INTO employee SET ?", employee
        );
    }
}   