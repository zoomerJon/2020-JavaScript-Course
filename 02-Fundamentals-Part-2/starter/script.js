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
*/

// Part 1
function calcTip(bill) {                    // Arrow Function w/ ternary operator more efficient
    if (bill <= 300 && bill >= 50) {        // const calcTip = bill => bill <= 300 && bill >= 50 ? bill * .15 : bill * .2;
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