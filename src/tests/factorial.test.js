const { default: expect } = require("expect");
const { factorial } = require("../factorial");
const prueba = [0, 5, -5, 5.5];

describe ("Factorial function", () => {
    it("Should return base recursivity number:", () => {
        const fact = factorial(prueba[0]);
        expect(fact).toEqual(1);
    });

    it("Should calculate factorial number:", () => {
        const fact = factorial(prueba[1]);
        expect(fact).toEqual(120);
    });

    it("Should throw an error for negative numbers:", () => {
        expect(() => {
            factorial(prueba[2]);
        }).toThrow("Factorial is not defined for negative numbers");
    });

    it("Should throw an error for non-integer number:", () => {
        expect(() => {
            factorial(prueba[3]);
        }).toThrow("Factorial is only defined for integers");
    });
});