const inquirer = require('inquirer');
const fs= require('fs');
const Manager= require('./lib/Manager');
const Engineer= require('./lib/Engineer');
const Intern=require('./lib/Intern');
const generateHTML = require('./src/generateHTML');


const ArrayOfTeamMembers=[];


const addManager=()=>{
    return inquirer.prompt([{
        type: 'input',
        name: 'name',
        message: 'What is your name?',
        validate: name => {
            if(name){
                return true;
            }else{
                console.log( "Enter your name");
                return false
            }
        }
    },
                            
    {
        type: 'input',
        name: 'id',
        message: 'What is your id Number?',
        validate: id => {
            if(id){
                return true;
            }else{
                console.log( "Enter your id Number");
                return false
            }
        }
    },

    {
        type: 'input',
        name: 'email',
        message: 'What is your email?',
        validate: email => {
            if(email){
                return true;
            }else{
                console.log( "Enter your email address");
                return false
            }
        }
    },

    {
        type: 'input',
        name: 'officeNumber',
        message: 'What is office number?',
        validate: officeNumber => {
            if(officeNumber){
                return true;
            }else{
                console.log( "Enter your office number");
                return false
            }
        }
    }]).then(managerPrompt =>{
        const {name,id,email,officeNumber}= managerPrompt;

        let manager= new Manager (name, id, email, officeNumber);

        ArrayOfTeamMembers.push(manager);
    })

}

const employeeOption= ()=>{
    return inquirer.prompt([
        {
            type: 'list',
            name: 'employeeOptions',
            message: 'Please select a Employee',
            choices: ["Engineer", "Intern"],
            validate: employeeOptions => {
                if(employeeOptions){
                    return true;
                }else{
                    console.log( "Select a employee type");
                    return false
                }
            }
        },

        {
            type: 'input',
            name: 'name',
            message: 'What is the name of the employee?',
            validate: name => {
                if(name){
                    return true;
                }else{
                    console.log( "Enter your name");
                    return false
                }
            }
        },
        {
            type: 'input',
            name: 'id',
            message: 'What is your id Number?',
            validate: id => {
                if(id){
                    return true;
                }else{
                    console.log( "Enter your id Number");
                    return false
                }
            }
        },
    
        {
            type: 'input',
            name: 'email',
            message: 'What is your email?',
            validate: email => {
                if(email){
                    return true;
                }else{
                    console.log( "Enter your email address");
                    return false
                }
            }
        },

        {
            type: 'input',
            name: 'githubUsername',
            message: 'What is your git hub username?',
            when: input => input.employeeOptions === "Engineer",
            validate: githubUsername => {
                    if(githubUsername){
                        return true;
                    }else{
                        console.log( "Enter your github Username");
                        return false
                    }
            }},

        {
            type: 'input',
            name: 'schoolName',
            message: 'What is your school name?',
            when: input => input.employeeOptions==="Intern",
            validate: schoolName => {
                    if(schoolName){
                        return true;
                    }else{
                        console.log( "Enter your school name");
                        return false
                    }
            }} ,

        {
            type: 'confirm',
            name: 'addEmployee',
            message: 'Would you like to add more team members?',
            default: false
        }

    ]) .then(dataOfEmployee=>{
        let{name,id,email,employeeOptions,githubUsername,schoolName,addEmployee}= dataOfEmployee;

        let employee;

        if(employeeOptions==="Engineer"){
            employee = new Engineer (name,id,email,githubUsername);
        }else if( employeeOptions==="Intern"){
            employee= new Intern (name,id,email,schoolName);
        }

        ArrayOfTeamMembers.push(employee);

        if (addEmployee) {
            return employeeOption(ArrayOfTeamMembers); 
        } else {
            return ArrayOfTeamMembers;
        }
    })
}

const writeFile= data=>{
    fs.writeFile("./dist/index.html",data,err=>{
        if (err){
            console.log(err);
        }else {
            console.log("Your team profile is generated successfully")
        }
    })
}

addManager()
.then(employeeOption)
.then(ArrayOfTeamMembers => {
    return generateHTML(ArrayOfTeamMembers);
  })
  .then(pageHTML => {
    return writeFile(pageHTML);
  })
.catch(err =>{
    console.log(err);
});
