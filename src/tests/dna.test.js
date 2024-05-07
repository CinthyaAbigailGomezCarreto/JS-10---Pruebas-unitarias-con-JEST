const { isValidDNA } = require("../dna");
const prueba = ["CTAG", "CTXG", "ctag", ""];

describe("DNA function", () => {
    it('Should valid the next string', () => {
        const valid = isValidDNA(prueba[0]);
        expect(valid).toEqual(true);
    });
    it('Should invalid the blank string', () => {
        const invalid = isValidDNA(prueba[1]);
        expect(invalid).toEqual("");
    });
    it('Should invalid the string with lowercase', () => {
        const invalid = isValidDNA(prueba[2]);
        expect(invalid).toEqual("");
    });
    it('Should invalid the string with no valid letters', () => {
        const invalid = isValidDNA(prueba[3]);
        expect(invalid).toEqual("");
    });
} )