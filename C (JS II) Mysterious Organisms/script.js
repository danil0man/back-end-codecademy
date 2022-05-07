// Returns a random DNA base
const returnRandBase = () => {
    const dnaBases = ['A', 'T', 'C', 'G'];
    return dnaBases[Math.floor(Math.random() * 4)];
};

// Returns a random single stand of DNA containing 15 bases
const mockUpStrand = () => {
    const newStrand = [];
    for (let i = 0; i < 15; i++) {
        newStrand.push(returnRandBase());
    }
    return newStrand;
};

const pAquorFactory = (number, dnaArray) => ({
    // properties
    specimenNum: number,
    dna: dnaArray,

    // This method mutates a random base with a new one
    mutate() {
        // Finds a random position
        const randomMutate = Math.floor(Math.random() * this.dna.length);
        // create a new random base
        const randomBase = returnRandBase();
        // While the randomBase is not equal to the random sequence, keep applying a random base
        while (this.dna[randomMutate] === randomBase) {
            this.dna[randomMutate] = randomBase;
        }
        this.dna[randomMutate] = randomBase;
        // return the new sequence
        return this.dna;
    },
    // This method compares two different sequences and check the similarities
    compareDNA(pAquora) {
        let countMatch = 0;
        // Check each sequence and compares with the other sequence.
        // If each item is in the same index add 1 to the counter
        this.dna.forEach((element, index) => (element === pAquora.dna[index] ? countMatch++ : null));
        // Return a formatted string where it shows how much % the sequences are similar
        return `Specimen #${this.specimenNum} and Specimen #${pAquora.specimenNum} have a ${Math.round(
            (countMatch / this.dna.length) * 100
        )}% DNA in common`;
    },
    // This method checks the sequence and see if they have a 60% of C and G
    willLikelySurvive() {
        let countSurvivability = 0;
        this.dna.forEach((element) => (element === 'C' || element === 'G' ? countSurvivability++ : null));
        return Math.round((countSurvivability / this.dna.length) * 100) >= 60;
    },
});

const specimen1 = pAquorFactory(1, mockUpStrand());
const specimen2 = pAquorFactory(2, mockUpStrand());
const specimen3 = pAquorFactory(3, mockUpStrand());

// specimen1.mutate();
// specimen1.compareDNA(specimen2);
// specimen1.willLikelySurvive();
const instances = [];
// started at 4 since I declared 3 objects before
let newNumber = 4;
// while there are not 30 entries inside instance
while (instances.length < 30) {
    // temporal instance
    const newInstance = pAquorFactory(newNumber, mockUpStrand());
    // Check if it will survive. If true push to the array
    if (newInstance.willLikelySurvive()) {
        instances.push(newInstance);
        // increase the number by 1
        ++newNumber;
    }
}
