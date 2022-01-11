//create manager card
const generateManager = (manager) => {
  return ` 
  <div class="card col-8 col-md-5 col-lg-4 col-xl-3 m-3 shadow">
  <div class="card-header bg-primary text-white">
    <h2>${manager.name}</h2>
    <h3>▶️ Manager</h3>
  </div>
  <ul class="list-group my-5 mx-4 bg-dark">
    <li class="list-group-item">ID: ${manager.id}</li>
    <li class="list-group-item">Email: ${manager.email}</li>
    <li class="list-group-item">Office number: ${manager.officeNumber}</li>
  </ul>
</div>
  `;
};

//create Engineer card
const generateEngineer = (engineer) => {
  return ` 
  <div class="card col-8 col-md-5 col-lg-4 col-xl-3 m-3 shadow">
  <div class="card-header bg-primary text-white">
    <h2>${engineer.name}</h2>
    <h3>▶️ Engineer</h3>
  </div>
  <ul class="list-group my-5 mx-4 bg-dark">
    <li class="list-group-item">ID: ${engineer.id}</li>
    <li class="list-group-item">Email: ${engineer.email}</li>
    <li class="list-group-item">Github: ${engineer.github}</li>
  </ul>
</div>
  `;
};

//create Intern card
const generateIntern = (intern) => {
  return ` 
  <div class="card col-8 col-md-5 col-lg-4 col-xl-3 m-3 shadow">
  <div class="card-header bg-primary text-white">
    <h2>${intern.name}</h2>
    <h3>▶️ Intern</h3>
  </div>
  <ul class="list-group my-5 mx-4 bg-dark">
    <li class="list-group-item">ID: ${intern.id}</li>
    <li class="list-group-item">Email: ${intern.email}</li>
    <li class="list-group-item">School: ${intern.school}</li>
  </ul>
</div>
  `;
};

const generateTeam = (data) => {
  let teamCard = [];

  // loop the team card
  for (let i = 1; i < data.length; i++) {
    const employee = data[i];
    const role = employee.getRole();

    if (role === "Manager") {
      const managerCard = generateManager(employee);
      teamCard.push(managerCard);
    }

    if (role === "Engineer") {
      const engineerCard = generateEngineer(employee);
      teamCard.push(engineerCard);
    }

    if (role === "Intern") {
      const internCard = generateIntern(employee);
      teamCard.push(internCard);
    }
  }

  const teamCardInfo = teamCard.join("");

  const generatePage = generateHTML(teamCardInfo);
  return generatePage;
};

const generateHTML = (teamCardInfo) => {
  return `
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link
      href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
      rel="stylesheet"
      integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
      crossorigin="anonymous"/>
    <title>My Team</title>
  </head>

  <body>
    <header class="jumbotron bg-danger">
      <h1 class="text-white text-center p-4">My Team</h1>
    </header>

    <section class="container">
      <div class="row g-0 d-flex justify-content-center p-5">
       ${teamCardInfo}
      </div>
    </section>
  </body>
</html>
  `;
};

module.exports = generateTeam;
