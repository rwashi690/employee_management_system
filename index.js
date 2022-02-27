// Import the necessary files and modules
const {prompt}=require("inquirer");
const logo=require("asciiart-logo");
const database= require("./db");
const { DEC8_BIN } = require("mysql/lib/protocol/constants/charsets");
require("console.table");

// Call the initalize function
initialize_App();

// Create a function to start the app, render the logo, and load the prompts 
function initialize_App() {
    const appTitle=logo({name:"Employee Management System"}).render();
    console.log(appTitle);
    createPrompts()
}

// Function to create the necessary prompts
function createPrompts(){
    prompt([
    {
        name: "functionToRun",
        type: "list",
        message: "select a function (use your arrows)",
        choices:[
            {
                name:"View employees in management system",
                value:"viewEmployees"
            },
            {
                name:"Hire new or add existing employee to management system",
                value:"hireEmployee"
            },
            {
                name: "Fire employee and remove from management system",
                value:"fireEmployee"
            }
        ]}
    ]).then (response => {
        let selection = response.choices;
        switch(selection){
            case "viewEmployees":
                viewEmployees();
                break;
            case "hireEmployee":
                hireEmployee();
                break;
            case "fireEmployee":
                fireEmployee();
                break;
            default:
                quit();
        }
    })
}

//Get the employees and display on the console
function viewEmployees(){
    db.findEmployees().then(([rows])=> {
        let employeelist = rows;
        console.table(employeelist)
    })
    .then(() => createPrompts());   
}

function hireEmployee(){

}

function fireEmployee(){

}

function quit() {
    
}

// function viewEmployeesbyDept(){

// }

// function viewEmployeesbyBoss(){

// }


// function updateEmployeesPosition(){

// }

// function updateEmployeesBoss(){

// }

// function showPosition(){

// }

// function addEmployeePosition(){

// }


