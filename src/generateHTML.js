const generateTeam = data => {
    function generateManager(manager) {
        return `<div class="col">
            <div class="card border-dark mb-3" style="max-width: 18rem;">
                <div class="card-header">
                    <h3>${manager.name}</h3>
                    <h4> 📈 </h4>
                </div>
            
                <div class="card-body text-dark">
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item"> ID:${manager.id} </li>
                        <li class="list-group-item">Email: ${manager.email}</li>
                        <li class="list-group-item">Office number:${manager.officeNumber} </li>
                    </ul>
                </div>
            </div>
            </div>`;
    }
    function generateEngineer(engineer) {
        return `<div class="col">
                <div class="card border-dark mb-3" style="max-width: 18rem;">
                    <div class="card-header">
                        <h3>${engineer.name}</h3>
                        <h4> ⚙️ </h4>
                    </div>
            
                    <div class="card-body text-dark">
                        <ul class="list-group list-group-flush">
                            <li class="list-group-item">ID: ${engineer.id}</li>
                            <li class="list-group-item">Email: ${engineer.email}</li>
                            <li class="list-group-item">Github: ${engineer.github} </li>
                        </ul>
                    </div>
                </div>
            </div>`;
    }

    function generateIntern(intern) {
        return `<div class="col">
            <div class="card border-dark mb-3" style="max-width: 18rem;">
                <div class="card-header">
                    <h3>${intern.name}</h3>
                    <h4>👨‍🎓 </h4>
                </div>
            
                <div class="card-body text-dark">
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item"> ID: ${intern.id}</li>
                        <li class="list-group-item">Email: ${intern.email}</li>
                        <li class="list-group-item">School: ${intern.school}</li>
                    </ul>
                </div>
            </div>
            </div>`;
    }

    const html = [];

    html.push(data
        .filter(employee => employee.getRole() === "Manager")
        .map(manager => generateManager(manager))
    );
    html.push(data
        .filter(employee => employee.getRole() === "Engineer")
        .map(engineer => generateEngineer(engineer))
        .join("")
    );
    html.push(data
        .filter(employee => employee.getRole() === "Intern")
        .map(intern => generateIntern(intern))
        .join("")
    );

    return html.join("");

}



module.exports = data => {
    console.log('data', data)


    return `<!DOCTYPE html>
    <html lang="en">
    
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css"
            integrity="sha384-B0vP5xmATw1+K9KRQjQERJvTumQW0nPEzvF6L/Z6nronJ3oUOFUFpCjEUQouq2+l" crossorigin="anonymous">
        <link href="https://fonts.googleapis.com/css2?family=Lato:wght@400;700&display=swap" rel="stylesheet">
        <title>Team Profile Generator</title>
    </head>
    
    <body>
        <nav class="navbar navbar-light bg-dark d-flex justify-content-center">
            <span class="navbar-text text-white" style="font-family: 'Girassol', cursive; font-size: 40px;">
                My Team
            </span>
        </nav>
    
        <main class="row align-items-center" style="height: 625px;">
            <div class="container">
                <div class="row">
                    
                ${generateTeam(data)}
                 
                </div>
            </div>
    
        </main>
    </body>
    
    </html>`
}

