const Manager = require('../lib/Manager')

describe('Intern', () => {
    
    //passes
    it("getOfficeNumber returns officeNumber", () => {
        expect(new Manager("123").getName()).toBe("123");
    });

    //passes
    it("getRole returns role", () => {
        expect(new Manager("Employee").getRole()).toBe("Manager");
    });


})
