var genMathLib = {

    function randomRange(max, min) {
        (Math.random() - Math.random()) * max + min
    }

    function randomNorm(mean, stdev) {
        return Math.round((Math.random() * 2 - 1) + (Math.random() * 2 - 1) + (Math.random() * 2 - 1)) * stdev + mean);
    }
};