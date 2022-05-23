//attempt at making a standalone function for getting next generation
function genNext() {
    //used to loop simulations, kept max to 5 for simplicity
    for (i = 0; i < numSim; i++) {
        data.push([]);
        /**
        * using example from "Nature, in Code" and the formula:
        * Freq (p) = p / (2 * Ne)
        * NOTE: when numGen = 1, this loop breaks
        **/
        for (j = 0; j < numGen; j++) {
            var p = 0,
            draws = 2 * popSize;
            for (k = 0; k < draws; k++) {
                if (Math.random() <= freqA) {
                    p = p + 1;
                }
            }
            freqA = p / draws;
            data[i].push(freqA);
        }
    }
}
