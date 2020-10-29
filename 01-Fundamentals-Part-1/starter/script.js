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
 */

