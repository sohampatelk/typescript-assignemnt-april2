// Is the Average of All Elements a Whole Number?
// https://edabit.com/challenge/arzsQcGsstJxHAnGi

var isAvgWhole = (arr:number[]):boolean => {
    let sumAvg=0;
    for(let i=0;i<arr.length;i++){
        sumAvg=sumAvg+arr[i];
    }
    return (sumAvg/(arr.length) % 1 === 0) ? true : false;    
}

console.log(isAvgWhole([1, 3]));
console.log(isAvgWhole([1, 2, 3, 4]));
console.log(isAvgWhole([1, 5, 6]));
console.log(isAvgWhole([1, 1, 1]));
console.log(isAvgWhole([9, 2, 2, 5]));