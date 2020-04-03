//edabit.com
//https://edabit.com/challenge/tYHkTdFrEmWfxpPKF

//used typescript for function
var matchHouses = (step:number) : number => {
	return step === 0 ? 0 : 5 * step + 1;
}

console.log(matchHouses(1));
console.log(matchHouses(4));
console.log(matchHouses(87));