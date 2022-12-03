const Employee = require('./employee');

class Intern extends Employee {
    constructor(name, id, emailaddress, school) {
        super(name, id, emailaddress);

        this.school = school;
    }

    getSchoolName() {
        return this.school;
    }

    getRole() {
        return "Intern";
    }
}

module.exports = Intern;