const Employee = require('../lib/Employee');

describe("Employee", () => {
    describe("Initialization", () => {
        it("should return new 'name', 'Id' and 'email' properties when called with the 'new' keyword", () => {
            const employee = new Employee('eduardo', '13', 'eduardo@email.com');

            expect(employee.name).toEqual('eduardo');
            expect(employee.id).toEqual('13');
            expect(employee.email).toEqual('eduardo@email.com');
        });
    });
});