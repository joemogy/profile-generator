const Intern = require('../lib/Intern')

describe('Intern', () => {
    
    //passes
    it("getSchool returns school", () => {
        expect(new Intern("Northwestern University").getName()).toBe("Northwestern University");
    });

    //passes
    it("getRole returns role", () => {
        expect(new Intern("Employee").getRole()).toBe("Intern");
    });


})
