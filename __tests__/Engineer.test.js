const Engineer = require('../lib/Engineer');

describe("Engineer", () => {
    describe("Initialization", () => {
        it("should return new 'name', 'Id', 'email','Github', and 'role' properties when called with the 'new' keyword", () => {
            const engineer = new Engineer('eduardo', '13', 'eduardo@email.com', 'Eduadomtz');

            expect(engineer.name).toEqual('eduardo');
            expect(engineer.id).toEqual('13');
            expect(engineer.email).toEqual('eduardo@email.com');
            expect(engineer.github).toEqual('Eduadomtz');
            expect(engineer.getRole()).toEqual('Engineer');
        });
    });
});