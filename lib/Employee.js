class Employee {
    // constructor to initialize employee name, id, and email address
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }

    // returns the name of the employee
    getName() {
        return this.name;
    }

    // returns the id of the employee
    getId() {
        return this.id;
    }

    // returns the email address of the employee
    getEmail() {
        return this.email;
    }

    // returns the role of the employee
    getRole() {
        return 'Employee';
    }
}

module.exports = Employee;
