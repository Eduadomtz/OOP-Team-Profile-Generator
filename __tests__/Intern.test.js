const Intern = require('../lib/Intern');

describe("Intern", () => {
    describe("Initialization", () => {
        it("should return new 'name', 'Id', 'email','School', and 'role' properties when called with the 'new' keyword", () => {
            const intern = new Intern('eduardo', '13', 'eduardo@email.com', 'ITESM');

            expect(intern.name).toEqual('eduardo');
            expect(intern.id).toEqual('13');
            expect(intern.email).toEqual('eduardo@email.com');
            expect(intern.school).toEqual('ITESM');
            expect(intern.getRole()).toEqual('Intern');
        });
    });
});