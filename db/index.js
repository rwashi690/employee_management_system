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
    // Selects all employees that do not match the passed employeeID
    findManagers(employeeID){
        return this.connection.promise().query(
            "SELECT id, firstName, lastName, FROM employee WHERE id!= ?",
            employeeID
        );
    }
    promoteEmployee(employeeID, positionID){
        return this.connection.promise().query(
            "UPDATE employee SET positionId = ? WHERE id = ?",
            [positionID, employeeID]
        );
    }
    // Change managers
    changeEmployeeManager(employeeID, managerID){
        return this.connection.promise().query(
            "UPDATE employee SET managerId=? WHERE id= ?",
            [managerID, employeeID]
        );
    }
    findPositions(){
        return this.connection.promise().query(
            "SELECT id, title, salary FROM role"
        );
    }
    findDepartments(){
        return this.connection.promise().query(
            "SELECT id, departmentName FROM department"
        );
    }
    addDepartment(name){
        return this.connection.promise().query(
            "INSERT INTO department SET ?", name
        );
    }
    deleteDepartment(name){
        return this.connection.promise().query(
            "DELETE FROM department where departmentName = ?", name
        );
    }
    addPosition(name){
        return this.connection.promise().query("INSERT INTO role SET ?", name)
    } 
    deletePosition(name){
        return this.connection.promise().query(
            "DELETE FROM role where title = ?", name
        );
    }
}   

module.exports = new database(connection);
