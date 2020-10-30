'use strict'

/***********************
 * Arrow Functions
 */

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

/***********************
 * Coding Challenge 1
 */
