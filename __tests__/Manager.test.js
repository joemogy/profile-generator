const Manager = require("../lib/Manager");

test("Creating a Manager", () => {
    const manager = new Manager("joseph", 1, "joseph.mogavero@hotmail.com", 4168994887);

    expect(manager.officenumber).toEqual(expect.any(Number));

    expect(manager.getOfficeNumber()).toEqual(expect.any(Number));

    expect(manager.getRole()).toEqual("Manager");
})