//ReverseAndNot
// https://edabit.com/challenge/moK78CirzYbqk6g3z


var reverseAndNot = (i:(number|string)):number => {
	return parseInt(i.toString().split("").reverse().join("")+i);
}

console.log(reverseAndNot(123));
console.log(reverseAndNot(123456));