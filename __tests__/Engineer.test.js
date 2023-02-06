const Engineer = require('../lib/Engineer')

describe('Engineer', () => {
    
    //passes
    it("getGithub returns github", () => {
        expect(new Engineer("cdfishe1").getName()).toBe("cdfishe1");
    });

    //passes
    it("getRole returns role", () => {
        expect(new Engineer("Employee").getRole()).toBe("Engineer");
    });


})
