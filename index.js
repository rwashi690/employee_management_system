// Import the necessary files and modules
const {prompt}=require("inquirer");
const logo=require("asciiart-logo");
const db= require("./db");
require("console.table");

// Call the initalize function
initialize_App();

// Create a function to start the app, render the logo, and load the prompts 
function initialize_App() {
    const appTitle=logo({name:"Employee Management System"}).render();
    console.log(appTitle);
    createPrompts();
}

// Function to create the necessary prompts
function createPrompts(){
    prompt([
    {
        type: "list",
        name: "selection",
        message: "select a function (using the arrows)",
        choices:[
            {
                name:"View employees in management system",
                value:"view_employees"
            },
            {
                name:"Hire new or add existing employee to management system",
                value:"hire_employee"
            },
            {
                name: "Fire employee and remove from management system",
                value:"fire_employee"
            },
            {
                name: "close application",
                value:"quit"
            }
        ]}
    ]).then (response => {
        let selection = response.selection;
        if (selection ==="view_employees"){
            viewEmployees();
        } else if (selection==="hire_employee"){
            hireEmployee()
        } else if (selection==="fire_employee"){
            fireEmployee()
        }
         else {
            quit();
        }

    })
}

//Get the employees and display on the console
function viewEmployees(){
    db.findEmployees().then(([rows])=> {
        let employeelist = rows;
        console.log("\n")
        console.table(employeelist)
    })
    .then(() => createPrompts());   
}

function hireEmployee(){
    prompt([
        {
            name:"firstName",
            message:"What is the first name of the employee"
        }
    ])

}

function fireEmployee(){

}

function quit() {
    console.log("Application closing!")
    process.exit();
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


