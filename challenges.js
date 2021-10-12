
// Mark and John are trying to compare their BMI (Body Mass Index), which is calculated using the formula:
// BMI = mass / height ** 2 = mass / (height * height) (mass in kg and height in meter).
// Your tasks:
// 1. StoreMark'sandJohn'smassandheightinvariables
// 2. CalculateboththeirBMIsusingtheformula(youcanevenimplementboth
// versions)
// 3. CreateaBooleanvariable'markHigherBMI'containinginformationabout
// whether Mark has a higher BMI than John.
// Test data:
// § Data 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m tall.
// § Data 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76 m tall.

// let markWeight = 78;
// let markHeight = 1.69;
// let johnWeight = 92;
// let johnHeight = 1.95;

// let markBMI = markWeight / (markHeight * markHeight);
// let johnBMI = johnWeight / (johnHeight * johnHeight);

// console.log(markBMI, johnBMI);

// let markHigherBMI = markBMI > johnBMI;
// console.log(markHigherBMI);

// // Your tasks:
// // 1. Printaniceoutputtotheconsole,sayingwhohasthehigherBMI.Themessage is either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!"
// // 2. UseatemplateliteraltoincludetheBMIvaluesintheoutputs.Example:"Mark's BMI (28.3) is higher than John's (23.9)!"

// console.log("Mark's BMI is higher than John's");
// console.log(`${markBMI} is higher than ${johnBMI}`);

// Data 1: Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110
// Data Bonus 1: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 123
// Data Bonus 2: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 106

// const dolphinsAverage = (97 + 112 + 101) / 3;
// const koalasAverage = (109 + 95 + 106) / 3;
// console.log(dolphinsAverage, koalasAverage);

// // Compare the team's average scores to determine the winner of the competition,
// // and print it to the console. Don't forget that there can be a draw, so test for that
// // as well (draw means they have the same average score)
// const equal = koalasAverage === dolphinsAverage;

// if(equal && dolphinsAverage >= 100){
//     console.log("Dolphins won!");
// } else if(equal && koalasAverage >= 100){
//     console.log('Koalas won!');
// } else if(equal){
//     console.log("it's a tie but both were under 100!");
// } else{
//     console.log('Error bror');
// }

// const day = 'wednesday';

// switch(day) {
//     case 'monday':
//         console.log('Study');
//         console.log('Eat')
//         break;
//     case 'tuesday':
//         console.log('Lecture');
//         break;
//     case 'wednesday':
//         console.log('Work on assignment');
//         break
//     case 'thursday':
//     case 'friday':
//         console.log('Code things');
//         break;
//     default:
//         console.log('Error bror');
// }

// const language = 'kurdish';

// switch(language) {
//     case 'chinese':
//     case 'mandarin':
//         console.log('Most number of native speakers!');
//         break;
//     case 'spanish':
//         console.log('2n place of native speakers');
//         break;
//     case 'english':
//         console.log('3rd place');
//         break;
//     case 'arabic':
//         console.log('4th');
//         break;
//     default:
//         console.log('all other languages');
// }


// 1. Calculate the tip,depending on the bill value.Create a variable called 'tip' for this. It's not allowed to use an if/else statement 😅 (If it's easier for you, you can start with an if/else statement, and then try to convert it to a ternary operator!)
// 2. Print a string to the console containing the bill value,the tip,and the final value (bill + tip). Example: “The bill was 275, the tip was 41.25, and the total value 316.25”
// Test data:
// Data 1: Test for bill values 275, 40 and 430 

// Hints:
// To calculate 20% of a value, simply multiply it by 20/100 = 0.2 
// Value X is between 50 and 300, if it's>= 50 && <= 300

// const bill = 275;
// const tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;

// // if(bill >= 50 && bill <= 300) {
// //     console.log(`The bill was ${bill}, the tip was ${tip * bill} and the total was ${bill + (tip * bill)}`)
// // } else{
// //     console.log(`The bill was ${bill}, the tip was ${0.2 * bill} and the total was ${bill + (0.2 * bill)}`)
// // }

// console.log(`The bill was ${bill}, the tip was ${tip} and the total was ${bill + tip}`)