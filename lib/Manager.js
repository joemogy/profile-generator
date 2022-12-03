const Employee = require('./employee');

class Manager extends Employee {

    constructor(name, id, emailaddress, officenumber) {
        super(name, id, emailaddress);

        this.officenumber = officenumber;
    }

    getOfficeNumber() {
        return this.officenumber;
    }

    getRole() {
        return "Manager";
    }
}

module.exports = Manager;