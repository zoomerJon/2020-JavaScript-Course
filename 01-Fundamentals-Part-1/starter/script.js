/************************* 
* Coding Challenge 1


// Part 1

const jonHeight = 1.95;
const jonMass = 92;
const markHeight = 1.69;
const markMass = 78;

// Part 2
const jonBMI = jonMass/(jonHeight * jonHeight);
const markBMI = markMass/(markHeight ** 2);

// Part 3
const markHigherBMI = markBMI > jonBMI;

console.log(markBMI, jonBMI);
console.log(markHigherBMI);
*/

/************************* 
* Coding Challenge 2

// Initial 
const jonHeight = 1.95;
const jonMass = 92;
const markHeight = 1.69;
const markMass = 78;

const jonBMI = jonMass / (jonHeight * jonHeight);
const markBMI = markMass / (markHeight ** 2);

const markHigherBMI = markBMI > jonBMI;

// Part 1 
if (markBMI) {
    console.log('Mark has a higher BMI than Jon');
} else {
    console.log('Jon has a higher BMI than Mark');
}

console.log(markBMI, jonBMI);

// Part 2
if (markBMI) {
    console.log(`Mark's BMI (${markBMI}) is higher than Jon's BMI (${jonBMI})`);
} else {
    console.log(`Jon's BMI (${jonBMI}) is higher than Mark's BMI (${markBMI})`);
}
*/

/*************************
 * Coding Challenge 3


// Part 1 
let dolphinsAverage = (97+112+101)/3;
let koalasAverage = (109+95+106)/3;

// Part 2
if (dolphinsAverage > koalasAverage) {
    console.log(`The Dolphins win with an average score of ${dolphinsAverage} points vs ${koalasAverage} 🏆`);
} else if (koalasAverage > dolphinsAverage) {
    console.log(`The Koalas win with an average score of ${koalasAverage} points vs ${dolphinsAverage} 🏆`);
} else {
    console.log(`Both teams win with the same score (${dolphinsAverage}) 🏆`);
}

// Bonus 1
if (dolphinsAverage > koalasAverage && dolphinsAverage >= 100) {
    console.log(`The Dolphins win with an average score of ${dolphinsAverage} points vs ${koalasAverage} 🏆`);
} else if (koalasAverage > dolphinsAverage && koalasAverage >= 100) {
    console.log(`The Koalas win with an average score of ${koalasAverage} points vs ${dolphinsAverage} 🏆`);
} else if (koalasAverage === dolphinsAverage) {
    console.log(`Both teams win with the same score (${dolphinsAverage}) 🏆`)
} else {
    console.log(`Neither team had the higher score and reached the 100 point minimum. \n\ Dolphins: ${dolphinsAverage} \n\ Koalas: ${koalasAverage}`);
}

// Bonus 2
if (dolphinsAverage > koalasAverage && dolphinsAverage >= 100) {
    console.log(`The Dolphins win with an average score of ${dolphinsAverage} points vs ${koalasAverage} 🏆`);
} else if (koalasAverage > dolphinsAverage && koalasAverage >= 100) {
    console.log(`The Koalas win with an average score of ${koalasAverage} points vs ${dolphinsAverage} 🏆`);
} else if (koalasAverage === dolphinsAverage && koalasAverage >= 100){
    console.log(`Both teams win with the same score (${dolphinsAverage}) 🏆`);
} else {
    console.log(`Neither team reached the 100 point minimum. \n\ Dolphins: ${dolphinsAverage} \n\ Koalas: ${koalasAverage}`);
}
*/

/*************************
 * Coding Challenge 4


// Part 1
const bill = 275;

const tip = bill >= 50 && bill <= 300 ? .15 * bill : .20 * bill;

// Part 2
console.log(`The bill was ${bill}, the tip was ${tip}, and the total value was ${tip + bill}`);
 */