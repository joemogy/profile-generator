const Intern = require("../lib/Intern");

test("Creating an Intern Employee", () => {
    const intern = new Intern("joey", 3, "joseph.mogavero@mail.utoronto.ca", "University of Toronto");

    expect(intern.school).toEqual(expect.any(String));

    expect(intern.getSchoolName()).toEqual(expect.any(String));  // ===   && == 

    expect(intern.getRole()).toEqual("Intern");
}) 