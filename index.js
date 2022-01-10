// enter the team manager’s name, employee ID, email address, and office number
// presented with a menu with the option to add an engineer or an intern or to finish building my team

// select the engineer option
// prompted to enter the engineer’s name, ID, email, and GitHub username, and I am taken back to the menu

// select the intern option
// prompted to enter the intern’s name, ID, email, and school, and I am taken back to the menu

// decide to finish building my team
// exit the application, and the HTML is generated

// prompted for my team members and their information
// HTML file is generated

// click on an email address in the HTML
// my default email program opens and populates the TO field of the email with the address

// click on the GitHub username
// that GitHub profile opens in a new tab

const fs = require("fs");
const inquirer = require("inquirer");
const generatePage = require("./src/page-template");

// imports team constructors
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");

let teamData = [];

// prompted questions
const addManager = () => {
  return inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "Please provide the manager's name:",
      },
      {
        type: "input",
        name: "id",
        message: "Please provide the manager's ID:",
      },
      {
        type: "input",
        name: "email",
        message: "Please provide the manager's e-mail:",
      },
      {
        type: "input",
        name: "officeNumber",
        message: "Please provide the manager's office number:",
      },
    ])

    // add manager to the team data
    .then((managerData) => {
      const { name, id, email, officeNumber } = managerData;
      const manager = new Manager(name, id, email, officeNumber);
      teamData.push(manager);
    });
};

const addEmployee = () => {
  console.log(`
    =================
    Add a New Employee
    =================
    `);

  return inquirer
    .prompt([
      {
        type: "list",
        name: "role",
        message: "Please provide the employee's role:",
        choices: [
          {
            name: "Engineer",
          },
          {
            name: "Intern",
          },
        ],
      },
      {
        type: "input",
        name: "name",
        message: "Please provide the employee's name:",
      },
      {
        type: "input",
        name: "id",
        message: "Please provide the employee's ID:",
      },
      {
        type: "input",
        name: "email",
        message: "Please provide the employee's e-mail:",
      },
      {
        type: "input",
        name: "github",
        message: "Please provide the engineer's github username:",
        when: function (answers) {
          return answers.role === "Engineer";
        },
      },
      {
        type: "input",
        name: "school",
        message: "Please provide the intern's school name:",
        when: function (answers) {
          return answers.role === "Intern";
        },
      },
      {
        type: "confirm",
        name: "newEmployee",
        message: "Would you like to enter another employee?",
        default: false,
      },
    ])
    .then((employeeData) => {
      const { role, name, id, email, github, school, newEmployee } = employeeData;

      //add new employee to the team data
      if (role === "Engineer") {
        const engineer = new Engineer(name, id, email, github);
        teamData.push(engineer);
      } else if (role === "Intern") {
        const intern = new Intern(name, id, email, school);
        teamData.push(intern);
      }

      // check if the user wants to add new employee
      if (newEmployee) {
        return addEmployee(teamData);
      } else {
        return teamData;
      }
    });
};

addManager()
  .then(addEmployee)
  .then((teamData) => {
    console.log(teamData);
  });
