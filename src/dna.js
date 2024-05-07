/*
- Create a function to validate DNA strings as canonical DNA structure (e.g., `'CTAGGGTA'`).
  - Allow only canonical DNA bases `('C', 'T', 'A', 'G')`.
  - The function should be case-sensitive. Only accept uppercase bases.
  - Return empty string for invalid or empty inputs.
  - Return true if the string is a valid DNA sequence.
*/

function isValidDNA(dna){
    const letras = "abcdefghyjklmnñopqrstuvwxyz";
    const valid = "CTAG";

    if (dna.length == 0)
        return "";

    for(let i = 0; i < dna.length; i++){
        if ((letras.indexOf(dna[i]) != -1) || (valid.indexOf(dna[i]) == -1)){
            return "";
        }
    }
    return true;
}

module.exports = {isValidDNA};