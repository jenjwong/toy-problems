const allPermutations = (options, rounds) => {
    const permutations = [];
    const currentPermutation = '';

    const createPermutation = (currentPermutation, round) => {
        if (round === 0) {
            permutations.push(currentPermutation);
            return; 
        }
        for (let i = 0; i < options.length; i++) {
            createPermutation(currentPermutation + options[i], round -1);
        }
    }
    return createPermutation('', 2);
}

allPermutations(["R", "P", "S"], 2);