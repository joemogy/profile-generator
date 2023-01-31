const Employee = require('./employee');

class Manager extends Employee {
    // constructor to initialize manager name, id, email address, and office number
    constructor(name, id, email, office) {
        super(name, id, email);
        this.office = office;
    }

    // returns the office number of the manager
    getOffice() {
        return this.office;
    }

    // returns the role of the manager
    getRole() {
        return "Manager";
    }
}

module.exports = Manager;
