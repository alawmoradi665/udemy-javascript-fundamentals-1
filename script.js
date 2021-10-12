// // let js = 'amazing';
// // console.log(40 + 8 + 23 - 10);
// // console.log('Jonas');
// // console.log(23);

// // let firstName = "Jonas"; 
// // console.log(firstName);


// // let javascriptIsFun = true;
// // console.log(true);

// // console.log(typeof true);

// // javascriptIsFun = 'YEA';
// // console.log(typeof javascriptIsFun);

// // let year;
// // console.log(typeof year);

// // year = 1991;
// // console.log(typeof year);

// // console.log(typeof null); // object - this is wrong in js

// // Math operators 
// const now = 2037;
// const ageAlaw = now - 1994;
// const ageJacob = now - 1987;
// console.log(ageAlaw, ageJacob);

// console.log(ageAlaw * 2, ageJacob / 10, 2 ** 3); // 2 ** 3 means 2 to the power of 3 = 2 * 2 * 2 = 8

// const firstName = 'Alaw';
// const lastName = 'Moradi';
// console.log(firstName + " " + lastName);

// // Assignment operators
// let x = 10 + 5;
// x += 10; // x = x + 10 = 25
// x *= 4; // x = x * 4 = 25 * 4 = 100
// x ++; // x = x + 1
// x --; // x = x - 1
// console.log(x); 

// // Comparison operators 
// console.log(ageJacob > ageAlaw); // <, <=, >=
// console.log(ageAlaw >= 18);

// const isFullAge = ageAlaw >= 18; // storing the value which is a boolean



// const now = 2037;
// const ageAlaw = now - 1994;
// const ageJacob = now - 1987;
// console.log(ageAlaw, ageJacob);

// console.log(now - 1994 > now - 1987);

// const age = 15;

// if(age >= 18) {
//     console.log("You can get your licence!");
// } else {
//     const yearsLeft = 18 - age;
//     console.log(`You are too young, wait another ${yearsLeft} years`);
// }


// const birthYear = 1994;
// let century;
// if(birthYear <= 2000){
//     century = 20;
// } else {
//     century = 21;
// }

// console.log(century);



// const inputYear = '1991';
// console.log(Number(inputYear) + 18); // converting string to number 

// console.log(Number('hey')); // NaN

// console.log(String(23)); // convert number to string

// There are 5 falsey values: 0, '', undefined, null, NaN

// console.log(Boolean(0));
// console.log(Boolean(undefined));
// console.log(Boolean('Alaw'));
// console.log(Boolean({}));

// const money = 0;
// if(money){
//     console.log('You broke');
// } else {
//     console.log('You kinda broke')
// }

// let height;
// if(height){
//     console.log('Height is defined');
// } else {
//     console.log('undefined');
// }

// const age = 18;
// if(age === 18) console.log('correct');


// const favorite = Number(prompt("What's your favorite number?"));
// console.log(favorite);

// if(favorite === 23){
//     console.log('cool');
// } else if(favorite === 7){
//     console.log('also cool');
// } else if(favorite === 9){
//     console.log('cooler');
// }else{
//     console.log('number isnt 23 or 7 or 9')
// }

// const hasDriversLicense = true; // A
// const hasGoodVision = true; // B

// console.log(hasDriversLicense && hasGoodVision);
// console.log(hasDriversLicense || hasGoodVision);
// console.log(!hasDriversLicense);

// // if(hasGoodVision && hasGoodVision) {
// //     console.log('can drive');
// // } else{
// //     console.log('cant drive');
// // }

// const isTired = true; // C

// console.log(hasDriversLicense || hasGoodVision || isTired);

// if(hasDriversLicense && hasGoodVision && !isTired){
//     console.log('keep driving');
// } else{
//     console.log('do not drive')
// }

// TERNARY OPERATORS 

// this is an if block, the question mark says "if age is higher than or equal to 18, perform this"
// the second part is an else statement, the first one will be printed here. 
// const age = 19;
// // age >= 18 ? console.log('I like to drink wine')
// // console.log('I like water');

// // this whole operator is now an expression and we can set a variable based on the condition
// // THIS IS BETTER TO USE THAN THE IF STATEMENT
// const drink = age >= 18 ? 'wine' : 'water'; 
// console.log(drink);
// // the variable drink is defined based on this


// // a variable needs to be declared outside of the block to be able to be used - outside of the block. Then it can be reassigned in the block AND used outside 
// let drink2;
// if(age >= 18) {
//     drink2 = 'wine';
// } else{
//     drink2 = 'water';
// }
// console.log(drink2);

// // this works because the expression has been given a value in the const drink = before, so it produces a value and can then be used as an expression, for example in a string interpolator
// console.log(`I like to drink ${age >= 18 ? 'wine' : 'water'}`);

