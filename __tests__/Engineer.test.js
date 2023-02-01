const Engineer = require("../lib/Engineer");

test("Creating an Engineer Employee", ()=>{
    const engineer = new Engineer("joe",2,"jmrmwm@gmail.com","joemogy");

    expect(engineer.github).toEqual(expect.any(String));

    expect(engineer.getGitHubUser()).toEqual(expect.any(String));

    expect(engineer.getRole()).toEqual("Engineer");
}) 