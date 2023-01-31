const Employee = require('./employee');

class Intern extends Employee {
    // constructor to initialize intern name, id, email address, and school
    constructor(name, id, email, school) {
        super(name, id, email);
        this.school = school;
    }

    // returns the school name of the intern
    getSchool() {
        return this.school;
    }

    // returns the role of the intern
    getRole() {
        return "Intern";
    }
}

module.exports = Intern;
