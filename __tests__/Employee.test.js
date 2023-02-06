const Employee = require('../lib/Employee')

describe('Employee', () => {
    
    //passes
    it("getName returns name", () => {
        expect(new Employee("Charles").getName()).toBe("Charles");
    });

    //passes
    it("getId returns id", () => {
        expect(new Employee("Charles", "123").getId()).toBe("123");
    });

    //passes
    it("getEmail returns email address", () => {
        expect(new Employee("Charles", "123", "cdfishe1@mail.com").getEmail()).toBe("cdfishe1@mail.com");
    });

    //passes
    it("getRole returns role", () => {
        expect(new Employee("Employee").getRole()).toBe("Employee");
    });


})
