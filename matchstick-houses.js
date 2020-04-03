var matchHouses = function (step) {
    return step === 0 ? 0 : 5 * step + 1;
};
console.log(matchHouses(1));
console.log(matchHouses(4));
console.log(matchHouses(87));
