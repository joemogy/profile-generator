const Employee = require("./employee");

class Engineer extends Employee {
    // constructor to initialize engineer name, id, email address and GitHub username
    constructor(name, id, email, github) {
        super(name, id, email);
        this.github = github;
    }

    // returns the GitHub username of the engineer
    getGitHub() {
        return this.github;
    }

    // returns the role of the engineer
    getRole() {
        return "Engineer";
    }
}

module.exports = Engineer;
