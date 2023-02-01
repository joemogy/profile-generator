
const createCard = teamArray => {
  //Loops through the array of team members pushed from the prompts
  let cards = []

    for (let i = 0; i < teamArray.length; i++) {
        //This creates a manager card based on the getRole of the teamArray member
        if (teamArray[i].getRole() === 'Manager') {
            cards.push(` <div class="card" style="width: 18rem; display: inline-block">
            <div class="card-header bg-danger">
              <p class='text-light'>Name: ${teamArray[i].name}</p>
              <p class='text-light'><i class="fas fa-mug-hot" style='margin-right: 0.5vw;'></i>Manager</p>
            </div>
            <ul class="list-group list-group-flush">
              <li class="list-group-item">ID: ${teamArray[i].id}</li>
              <li class="list-group-item">Email: <a href="mailto:${teamArray[i].email}">${teamArray[i].email}</a></li>
              <li class="list-group-item">Office Number: ${teamArray[i].officeNumber}</li>
            </ul>
          </div>`)
        //This creates an engineer card based on the getRole of the teamArray member
        } else if (teamArray[i].getRole() === "Engineer") {
            cards.push(` <div class="card" style="width: 18rem; display: inline-block">
        <div class="card-header bg-success">
          <p class='text-light'>Name: ${teamArray[i].name}</p>
          <p class='text-light'><i class="fas fa-laptop-code " style='margin-right: 0.5vw;'></i>Engineer</p>
        </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">ID: ${teamArray[i].id}</li>
          <li class="list-group-item">Email: <a href="mailto:${teamArray[i].email}">${teamArray[i].email}</a></li>
          <li class="list-group-item">GitHub: <a href="https://github.com/${teamArray[i].github}" target="_blank">${teamArray[i].github}</a></li>
        </ul>
      </div>`)
        } else {
          //This creates an intern card based on the getRole of the teamArray member
          cards.push(` <div class="card" style="width: 18rem; display: inline-block">
      <div class="card-header bg-warning">
        <p class='text-dark'>Name: ${teamArray[i].name}</p>
        <p class='text-dark'><i class="fas fa-graduation-cap" style='margin-right: 0.5vw;'></i>Intern</p>
      </div>
      <ul class="list-group list-group-flush">
        <li class="list-group-item">ID: ${teamArray[i].id}</li>
        <li class="list-group-item">Email: <a href="mailto:${teamArray[i].email}">${teamArray[i].email}</a></li>
        <li class="list-group-item">School: ${teamArray[i].school}</li>
      </ul>
    </div>`)
      }


    }

    //This creates the html document with the processed cards being added in the container class below
    let html = `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-eOJMYsd53ii+scO/bJGFsiCZc+5NDVN2yr8+0RDqr0Ql0h+rP48ckxlpbzKgwra6" crossorigin="anonymous">
        <link
      rel="stylesheet"
      href="https://use.fontawesome.com/releases/v5.8.1/css/all.css"
      integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf"
      crossorigin="anonymous"
    />
        <title>Development Team Roster</title>
    </head>
    <body>
        <header class="jumbotron sticky-top bg-primary py-3 text-center mb-2">
            <h1 class='text-light'>My Development Team</h1>
          </header>
    
        <main>
            <div class='container'>
                ${cards.join(' ')}  
            </div>
            
        </main>
    </body>
    </html>`


    return html
}

module.exports = createCard;
