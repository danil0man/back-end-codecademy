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
    specimenNum: number,
    dna: dnaArray,
    mutate() {
        const randomMutate = Math.floor(Math.random() * this.dna.length);
        const randomBase = returnRandBase();
        while (this.dna[randomMutate] === randomBase) {
            this.dna[randomMutate] = randomBase;
        }
        this.dna[randomMutate] = randomBase;
        return this.dna;
    },
    compareDNA(pAquora) {
        let countMatch = 0;
        this.dna.forEach((element, index) => (element === pAquora.dna[index] ? countMatch++ : null));
        return `Specimen #${this.specimenNum} and Specimen #${pAquora.specimenNum} have a ${Math.round(
            (countMatch / this.dna.length) * 100
        )}% DNA in common`;
    },
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
let newNumber = 4;
while (instances.length < 30) {
    const newInstance = pAquorFactory(newNumber, mockUpStrand());
    if (newInstance.willLikelySurvive()) {
        instances.push(newInstance);
        ++newNumber;
    }
}
