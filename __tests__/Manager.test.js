const Manager = require('../lib/Manager');

describe("Intern", () => {
    describe("Initialization", () => {
        it("should return new 'name', 'Id', 'email','officeNumber', and 'role' properties when called with the 'new' keyword", () => {
            const manager = new Manager('eduardo', '13', 'eduardo@email.com', '56');

            expect(manager.officeNumber).toEqual('56');
            expect(manager.getRole()).toEqual('Manager');
        });
    });
});