//Get Sum of People's Budget
//https://edabit.com/challenge/tmnCStcrkdWbreKP5

//logic for typeScript
var getBudgets = ( arr:any[] ): number => {
    const totalBudgets : number = arr.reduce((total, arr) => total + arr.budget, 0);
    // Array<number> = arr.reduce((total, arr) => total + arr.budget, 0);
    return totalBudgets;
}

console.log("Total budget is : " + 
    getBudgets([
        { name: "John", age: 21, budget: 23000 },
        { name: "Steve",  age: 32, budget: 40000 },
        { name: "Martin",  age: 16, budget: 2700 }
    ])
);

console.log("Total budget is : " +
    getBudgets([
        { name: "John",  age: 21, budget: 29000 },
        { name: "Steve",  age: 32, budget: 32000 },
        { name: "Martin",  age: 16, budget: 1600 }
    ])
);