'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

const displayMovements = function (movements, sort = false) {
  // Get rid of default 2 movements
  containerMovements.innerHTML = '';

  const movs = sort ? movements.slice().sort((a, b) => a - b) : movements;
  // Display Movements
  movs.forEach(function (mov, i) {
    const type = mov > 0 ? 'deposit' : 'withdrawal';
    const html = `
        <div class="movements__row">
          <div class="movements__type movements__type--${type}">${
      i + 1
    } ${type}</div>
          <div class="movements__value">${mov}€</div>
        </div>
    `;
    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};

///// reduce method to calc account balance
const calcPrintBalance = function (acc) {
  acc.balance = acc.movements.reduce((acc, mov) => acc + mov);
  labelBalance.textContent = `${acc.balance} €`;
};

///// Display Summary
const calcDisplaySummary = function (account) {
  const incomes = account.movements
    .filter(mov => mov > 0)
    .reduce((acc, mov, i, arr) => acc + mov, 0);
  labelSumIn.textContent = `${incomes}€`;

  const old = account.movements
    .filter(mov => mov < 0)
    .reduce((acc, mov, i, arr) => acc + mov, 0);
  labelSumOut.textContent = `${Math.abs(old)}€`;

  // const interest = incomes * 0.012;
  const interest = account.movements
    .filter(mov => mov > 0)
    .map(deposit => (deposit * account.interestRate) / 100)
    .filter(int => int >= 1)
    .reduce((acc, int) => acc + int, 0);
  labelSumInterest.textContent = `${interest}€`;
};

///// Computing Usernames
const createUsername = function (accs) {
  accs.forEach(function (acc) {
    acc.username = acc.owner
      .toLowerCase()
      .split(' ')
      .map(name => name[0])
      .join('');
  });
};
createUsername(accounts);

// Update Ui
const updateUi = function () {
  // Display movement
  displayMovements(currentAccount.movements);
  // Display balance
  calcPrintBalance(currentAccount);
  // Display summary
  calcDisplaySummary(currentAccount);
};
///// Event handlers

// Log in
let currentAccount;

btnLogin.addEventListener('click', function (e) {
  e.preventDefault();

  currentAccount = accounts.find(
    acc => acc.username === inputLoginUsername.value
  );
  console.log(currentAccount);
  if (currentAccount?.pin === Number(inputLoginPin.value)) {
    // Display UI and welcome message
    labelWelcome.textContent = `Welcome back, ${
      currentAccount.owner.split(' ')[0]
    }`;
    containerApp.style.opacity = 100;
    // Clear input fields
    inputLoginUsername.value = inputLoginPin.value = '';
    inputLoginPin.blur();

    // Update Ui (display balance, movements, summary)
    updateUi();
  }
});

// Transfering money
btnTransfer.addEventListener('click', function (e) {
  e.preventDefault();
  const amount = Number(inputTransferAmount.value);
  const recieveAcc = accounts.find(
    acc => acc.username === inputTransferTo.value
  );
  console.log(amount, recieveAcc);
  // console.log(Number(labelBalance.textContent.split(' ')[0]));
  if (
    amount > 0 &&
    recieveAcc &&
    amount <= currentAccount.balance &&
    recieveAcc?.username !== currentAccount.username
  ) {
    // Doing Transfer
    currentAccount.movements.push(-amount);
    recieveAcc.movements.push(amount);
    // Clear fields
    inputTransferAmount.value = inputTransferTo.value = '';
    updateUi(currentAccount);
    console.log('Transfer Valid');
  }
});

// Loan Money
btnLoan.addEventListener('click', function (e) {
  e.preventDefault();
  const amount = Number(inputLoanAmount.value);
  if (amount > 0 && currentAccount.movements.some(mov => mov >= 0.1 * amount)) {
    // Add movement
    currentAccount.movements.push(amount);
    // Update UI
    updateUi(currentAccount);
    inputLoanAmount.value = '';
  }
});

// Close account
btnClose.addEventListener('click', function (e) {
  e.preventDefault();
  // Check if inputs are valid
  if (
    inputCloseUsername.value === currentAccount.username &&
    Number(inputClosePin.value) === currentAccount.pin
  ) {
    // Delete Account
    const index = accounts.findIndex(
      acc => acc.username === currentAccount.username
    );
    accounts.splice(index, 1);
    console.log(accounts);
    console.log(currentAccount);
    // Clear input fields
    inputCloseUsername.value = inputClosePin.value = '';
    containerApp.style.opacity = 0;
    labelWelcome.textContent = 'Log in to get started';
  }
});

///// Sort Movements
let sort = false;
btnSort.addEventListener('click', function (e) {
  e.preventDefault();
  sort = !sort;
  displayMovements(currentAccount.movements, sort);
});

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////

// ///// Slice method
// let arr = ['a', 'b', 'c', 'd', 'e'];
// console.log(arr.slice(2));
// console.log(arr.slice(2, 4));
// console.log(arr.slice(-2));
// console.log(arr.slice(1, -2));
// console.log(arr.slice(1, 3));
// console.log(arr.slice());
// console.log([...arr]);

// /**
//  * Does not mutate array
//  * 1st parameter is where method starts to cut off from array
//  * 2nd parameter stops slicing before that element
//  */

// ///// Splice
// // console.log(arr.splice(2));
// arr.splice(-1);
// console.log(arr);
// arr.splice(1, 2);
// console.log(arr);

// /**
//  * Mutates array
//  * 1st parameter is where method starts to cut off from array
//  * 2ND PARAMETER IS HOW MANY ELEMENTS ARE CUT OFF
//  */

// ///// Reverse
// arr = ['a', 'b', 'c', 'd', 'e'];
// let arr2 = ['j', 'i', 'h', 'g', 'f'];
// console.log(arr2.reverse());

// /**
//  * Mutates array
//  */

// ///// Concat
// const letters = arr.concat(arr2);
// console.log(letters);
// console.log([...arr, ...arr2]);

// ///// Join
// console.log(letters.join(' - '));

// /**
//  * Creates new string with specified parameter between each element
//  */

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// for (const [i, movement] of movements.entries()) {
//   movement > 0
//     ? console.log(`Movement ${i + 1}: You deposited ${movement}`)
//     : console.log(`Movement ${i + 1}: You withdrew ${Math.abs(movement)}`);
// }

// console.log('---- FOREACH ----');

// movements.forEach(function (mov, i, arr) {
//   mov > 0
//     ? console.log(`Movement ${i + 1}: You deposited ${mov}`)
//     : console.log(`Movement ${i + 1}: You withdrew ${Math.abs(mov)}`);
// });

// /**
//  * Cannot break out of forEACH
//  */

// ///// Map
// const currencies = new Map([
//   ['USD', 'United States dollar'],
//   ['EUR', 'Euro'],
//   ['GBP', 'Pound sterling'],
// ]);

// currencies.forEach(function (value, key, map) {
//   console.log(`${key}: ${value}`);
// });

// ///// Set
// const currenciesUnique = new Set(['USD', 'GBP', 'USD', 'EUR', 'EUR']);
// console.log(currenciesUnique);
// currenciesUnique.forEach(function (value, _, map) {
//   console.log(`${value}: ${value}`);
// });

// // Challenge 1
// const dogsJulia = [3, 5, 2, 12, 7];
// const dogsKate = [4, 1, 15, 8, 3];

// const doggy = function (dogsJulia, dogsKate) {
//   const dogsJuliaNew = dogsJulia.slice(1, 3);
//   const dogsBoth = [...dogsJuliaNew, ...dogsKate];
//   console.log(dogsBoth);
//   dogsBoth.forEach(function (age, i) {
//     age >= 3
//       ? console.log(`Dog ${i + 1} is an adult and is ${age} years old`)
//       : console.log(`Dog ${i + 1} is a puppy and is ${age} years old`);
//   });
// };

// doggy(dogsJulia, dogsKate);

// ////// The map Method

// const euroToUsd = 1.1;
// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// // const movementsUSD = movements.map(function (mov) {
// //   return mov * euroToUsd;
// // });

// const movementsUSD = movements.map(mov => mov * euroToUsd);

// console.log(movements);
// console.log(movementsUSD);

// const movementsUSDof = [];
// for (const mov of movements) movementsUSDof.push(mov * euroToUsd);
// console.log(movementsUSDof);

// // const movementsDescriptions = movements.map((mov, i, arr) => {
// //   return mov > 0
// //     ? `Movement ${i + 1}: You deposited ${mov}`
// //     : `Movement ${i + 1}: You withdrew ${Math.abs(mov)}`;
// // });

// const movementsDescriptions = movements.map(
//   (mov, i, arr) =>
//     `Movement ${i + 1}: You ${mov > 0 ? 'deposited' : 'withdrew'} ${Math.abs(
//       mov
//     )}`
// );

// console.log(movementsDescriptions);

// ///// The filter method
// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
// const deposits = movements.filter(function (mov) {
//   return mov > 0;
// });
// console.log(movements);
// console.log(deposits);

// const depositsFor = [];
// for (const mov of movements) {
//   if (mov > 0) depositsFor.push(mov);
// }
// console.log(depositsFor);

// const withdrawals = movements.filter(mov => mov < 0);
// console.log(withdrawals);

// ///// Reduce method
// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
// const balance = movements.reduce((acc, cur) => acc + cur, 0);
// console.log(balance);

// let balance2 = 0;
// for (const mov of movements) balance2 += mov;
// console.log(balance2);

// // Max Value
// const maxValue = movements.reduce(
//   (acc, cur) => (cur > acc ? (acc = cur) : (acc = acc)),
//   movements[0]
// );
// console.log(maxValue);

// ///// Coding Challenge #2
// const testData1 = [5, 2, 4, 1, 15, 8, 3];
// const testData2 = [16, 6, 10, 5, 6, 1, 4];
// const calcHumanAverage = function (ages) {
//   const humanAverage = ages
//     .map(function (age) {
//       if (age <= 2) {
//         return age * 2;
//       } else {
//         return 16 + age * 4;
//       }
//     })
//     .filter(humanAge => humanAge >= 18)
//     .reduce(function (acc, cur, i, arr) {
//       if (i == arr.length - 1) {
//         return (acc + cur) / arr.length;
//       } else {
//         return acc + cur;
//       }
//     }, 0);
//   console.log(humanAverage);
// };

// calcHumanAverage(testData1);
// calcHumanAverage(testData2);

///// Chaining Methods
// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
// const euroToUsd = 1.1;
// const totalDepositsUSD = movements
//   .filter(mov => mov > 0)
//   .map(mov => mov * euroToUsd)
//   .reduce((acc, mov, i, arr) => acc + mov, 0);

// console.log(totalDepositsUSD);

///// Coding Challenge #3
// const testData1 = [5, 2, 4, 1, 15, 8, 3];
// const testData2 = [16, 6, 10, 5, 6, 1, 4];
// const calcHumanAverage = ages =>
//   ages
//     .map(function (age) {
//       if (age <= 2) {
//         return age * 2;
//       } else {
//         return 16 + age * 4;
//       }
//     })
//     .filter(humanAge => humanAge >= 18)
//     .reduce(function (acc, cur, i, arr) {
//       return acc + cur / arr.length;
//     }, 0);

// console.log(calcHumanAverage(testData1));

///// The find method

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
// const firstWidthdrawal = movements.find(mov => mov < 0);
// console.log(movements);
// console.log(firstWidthdrawal);

// const account = accounts.find(acc => (acc.owner = 'Jessica Davis'));
// console.log(account);

// let accountof = 0;
// for (const acc of accounts)
//   acc.owner === 'Jessica Davis' ? (accountof = acc) : null;
// console.log(account2);

// ///// some and every

// // some
// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
// console.log(movements);
// console.log(movements.includes(-130));

// const anyDeposits = movements.some(mov => mov > 0);
// console.log(anyDeposits);

// // every

// console.log(movements.every(mov => typeof mov === 'number'));
// console.log(account4.movements.every(mov => mov > 0));

// // Seperate callback
// const deposit = mov => mov > 0;
// console.log(movements.some(deposit));

// ///// flat and flatMap

// const arr = [[1, 2, 3], [4, 5, 6], 7, 8];
// console.log(arr.flat());
// console.log(arr.flat().flatMap(mov => mov - 1));

// const arrDeep = [[[1, 2], 3], [4, [5, 6]], 7, 8];
// console.log(arrDeep.flat(2));

// // Create new array with all movements and find sum
// const accountMovements = accounts.map(acc => acc.movements);
// const allMovements = accountMovements.flat();
// const overallBalance = allMovements.reduce((acc, mov, i) => acc + mov, 0);

// // Chaining with map and flat
// const overallBalance = accounts
//   .map(acc => acc.movements)
//   .flat()
//   .reduce((acc, mov, i) => acc + mov, 0);

// console.log(overallBalance);

// // flatmap
// const overallBalance = accounts
//   .flatMap(acc => acc.movements)
//   .reduce((acc, mov, i) => acc + mov, 0);
// console.log(overallBalance);

// // Strings
// const owners = ['Jonas', 'Zach', 'Adam', 'Martha'];
// console.log(owners.sort());

// // Numbers
// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// // return < 0 A, B (Keep order)
// // return > 0 B, A (Switch Order)

// // // Ascending
// // movements.sort((a, b) => {
// //   if (a > b) {
// //     return 1;
// //   } else {
// //     return -1;
// //   }
// // });
// movements.sort((a, b) => a - b);
// console.log(movements);

// // // Descending
// // movements.sort((a, b) => {
// //   if (a > b) {
// //     return -1;
// //   } else {
// //     return 1;
// //   }
// // });
// movements.sort((a, b) => b - a);
// console.log(movements);

// ///// More ways of creating and filling arrays
// const arr = [1, 2, 3, 4, 5, 6, 7];

// const x = new Array(7).fill(0, 0, 7);
// console.log(x);

// // Array.from
// const y = Array.from({ length: 7 }, () => 1);
// console.log(y);

// const z = Array.from({ length: 7 }, (_, i) => i + 1);
// console.log(z);

// labelBalance.addEventListener('click', function (e) {
//   e.preventDefault();
//   const movementsUI = Array.from(
//     document.querySelectorAll('.movements__value'),
//     el => Number(el.textContent.replace('€', ''))
//   );
//   console.log(movementsUI);
// });

// ///// Array Methods Practice

// // 1. Combine all movements arrays from accounts and find the sum of the deposits
// const bankDepositSum = accounts
//   .flatMap(acc => acc.movements)
//   .filter(mov => mov > 0)
//   .reduce((sum, cur) => sum + cur, 0);

// console.log(bankDepositSum);

// // 2. Find out how many deposits are greater than 1000
// // const bankDeposits1000 = accounts
// //   .flatMap(acc => acc.movements)
// //   .filter(mov => mov >= 1000).length;

// const bankDeposits1000 = accounts
//   .flatMap(acc => acc.movements)
//   .reduce((sum, cur, i) => (cur >= 1000 ? ++sum : sum + 0), 0);

// console.log(bankDeposits1000);

// // Prefixed ++ operater
// let a = 10;
// console.log(a++);
// console.log(a);

// let b = 10;
// console.log(++b);
// console.log(b);

// // 3.
// const { deposits, withdrawals } = accounts
//   .flatMap(acc => acc.movements)
//   .reduce(
//     (sums, cur) => {
//       // cur > 0 ? (sums.deposits += cur) : (sums.withdrawals += cur);
//       sums[cur > 0 ? 'deposits' : 'withdrawals'] += cur;
//       return sums;
//     },
//     { deposits: 0, withdrawals: 0 }
//   );

// console.log(deposits);

// // 4. Turn string in to Title Case (example shown below)
// // this is a nice title case -> This Is a Nice Title Case (a is intentionally not capitalized)
// const convertTitleCase = function (title) {
//   const capitalize = str => str[0].toUpperCase() + str.slice(1);
//   const exceptions = ['a', 'an', 'and', 'the', 'but', 'or', 'on', 'in', 'with'];

//   const titleCase = title
//     .toLowerCase()
//     .split(' ')
//     .map(word => (exceptions.includes(word) ? word : capitalize(word)))
//     .join(' ');
//   return capitalize(titleCase);
// };
// console.log(convertTitleCase('this is a nice title case'));
// console.log(convertTitleCase('this is a LONG title but not too long'));
// console.log(convertTitleCase('and here is another title with an EXAMPLE'));

///// Coding Challenge #4
const dogs = [
  { weight: 22, curFood: 250, owners: ['alice', 'bob'] },
  { weight: 8, curFood: 200, owners: ['matilda'] },
  { weight: 13, curFood: 275, owners: ['sarah', 'john'] },
  { weight: 32, curFood: 340, owners: ['michael'] },
];

// 1. Calc recommended food for each dog and add it to every object in arr
dogs.map(dog => (dog.recommendedFood = dog.weight * 0.75 * 28));

// 2. Find Sarah's dog and log if it eats too much/little
const sarahDog = dogs.find(dog => dog.owners.find(owner => owner === 'sarah'));

dogs.map(dog => {
  const eatStatusFunc = function (curFood, recommendedFood) {
    const foodDiff = recommendedFood - curFood;
    if (Math.abs(foodDiff) <= recommendedFood * 0.1) {
      return 'eats well';
    } else if (foodDiff > 0) {
      return 'eats too little';
    } else {
      return 'eats too much';
    }
  };
  dog.eatStatus = eatStatusFunc(dog.curFood, dog.recommendedFood);
});

console.log(dogs);
console.log(`Sarah's dog ${sarahDog.eatStatus}`);

// 3. Create array of owner's whose dog eats too much (ownersEatTooMuch)
const ownersEatTooMuch = dogs
  .filter(dog => dog.eatStatus === 'eats too much')
  .flatMap(dog => dog.owners);

const ownersEatTooLittle = dogs
  .filter(dog => dog.eatStatus === 'eats too little')
  .flatMap(dog => dog.owners);

console.log(ownersEatTooMuch);
console.log(ownersEatTooLittle);
