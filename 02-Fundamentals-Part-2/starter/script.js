'use strict'

/***********************
 * Arrow Functions
 

const calcAge = birthYear => 2037 - birthYear;
const age = calcAge(1991);

const calcRetirement = (birthYear, firstName) => {
    const age = 2037 - birthYear;
    const Retirement = 65 - age;
    // return Retirement;
    return `${firstName} retires in ${Retirement} years`
}

console.log(calcRetirement(1991, 'Jonas'));
console.log(calcRetirement(1980, 'Bob'));
*/

/***********************
 * Coding Challenge 1
 

// Part 1
const calcAverage = (score1 ,score2 ,score3) => (score1 + score2 + score3)/3;

// Part 2
const dolphinsAverage = calcAverage(84,54,41); // Test Data 2
const koalasAverage = calcAverage(23,34,27); // Test Data 2

// Part 3
function checkWinner(avgDolphins, avgKoalas) {
    if (avgDolphins >= avgKoalas * 2) {
        console.log(`Dolphins win 🏆 (${avgDolphins} vs ${avgKoalas})`);
    } else if (avgKoalas >= avgDolphins * 2) {
        console.log(`Koalas win 🏆 (${avgKoalas} vs ${avgDolphins})`);
    } else {
        console.log(`Neither team wins (Dolphins score: ${avgDolphins} \n\ Koalas score: ${avgKoalas})`);
    }
}

// Part 4
checkWinner(dolphinsAverage,koalasAverage);

*/

/***********************
 * Coding Challenge 2


// Part 1
function calcTip(bill) {                    // Arrow Function w/ ternary operator more efficient
    if (bill <= 300 && bill >= 50) {        // const calcTip = bill => bill <= 300 && bill >= 50 ? bill  //                                      // * .15 : bill * .2;
        const tip = bill * .15;
        return tip;
    } else {
        const tip = bill * .20;
        return tip;
    } 
}

console.log(calcTip(100));
 
// Part 2
const bills = [125,555,44];

// Part 3
const tips = [calcTip(bills[0]),calcTip(bills[1]),calcTip(bills[2])];

console.log(tips);
// Part 4
const total = [bills[0]+tips[0],bills[1]+tips[1],bills[2]+tips[2]];

console.log(total);
*/

/***********************
 * Coding Challenge 3
 

const jon = {
     fullName: 'Jon Smith',
     mass: 92,
     height: 1.95,
     calcBMI: function () {
        this.BMI = this.mass / (this.height * this.height);
        return this.BMI;
     }
 };

const mark = {
    fullName: 'Mark Miller',
    mass: 78,
    height: 1.69,
    calcBMI: function () {
        this.BMI = this.mass / (this.height * this.height);
        return this.BMI;
    }
};

// Jon & Mark BMIs
jon.calcBMI();
mark.calcBMI();

// Compare BMI and log results
if (mark.BMI > jon.BMI) {
    console.log(`${mark.fullName}'s BMI is higher than ${jon.fullName}'s BMI \n\ ${mark.BMI} \n\ ${jon.BMI}`);
} else if (jon.BMI > mark.BMI) {
    console.log(`${jon.fullName}'s BMI is higher than ${mark.fullName}'s \n\ ${jon.BMI} \n\ ${mark.BMI}`);
} else {
    console.log(`${jon.fullName} and ${mark.fullName} have the same BMI \n\ ${jon.BMI}`);
}
*/

/***********************
 * For loop lecture


// for loop keeps running while condition is true

for(let rep = 1; rep <= 10; rep++) {
    console.log(`Lifting weights repetition ${rep}`);
};

/*******************************************
 * Looping Arrays, Breaking and continuing
*/

const jonasArray = [
    'Jonas',
    'Schmedtmann',
    2037 - 1991,
    'teacher',
    ['Michael', 'Peter', 'Steven'],
    true
];
let types = [];
// console.log(jonasArray[4]);


for(let i = 0; i < jonasArray.length; i++) {
    console.log(jonasArray[i]);
    types[i] = jonasArray[i];
    // types.push(typeof jonasArray[i]);
}

const years = [1991, 2007, 1969, 2020];
const ages = [];

for(let i = 0; i < years.length; i++) {
    ages.push(2037 - years[i]);
}

console.log(ages);

// continue and break
console.log('---Only Strings---')
for (let i = 0; i < jonasArray.length; i++) {
    if (typeof jonasArray[i] !== 'string') continue;
    console.log(jonasArray[i], typeof jonasArray[i]);
}

console.log('---Break with Number---')
for (let i = 0; i < jonasArray.length; i++) {
    if (typeof jonasArray[i] === 'number') break;
    console.log(jonasArray[i], typeof jonasArray[i]);
}