// // Declare variables called 'country','continent'and'population'and assign their values according to your own country (population in millions)

//const country = "Sweden";
// let continent = "Europe";
//let population = 10000000;

// // Declare a variable called 'isIsland' and set its value according to your country. The variable should hold a Boolean value. Also declare a variable 'language', but don't assign it any value yet

// let isIsland = false;
// let language;
// console.log(typeof isIsland);
// console.log(typeof language);
// console.log(typeof population);

// // 1. Set the value of 'language' to the language spoken where you live(some countries have multiple languages, but just choose one)
// // 2. Thinkaboutwhichvariablesshouldbeconstvariables(which values will never change, and which might change?). Then, change these variables to const.
// // 3. Try to change one of the changed variables now,and observe what happens

// language = "Swedish";
// console.log(country);

// // 1. Ifyourcountrysplitinhalf,andeachhalfwouldcontainhalfthepopulation, then how many people would live in each half?
// // 2. Increasethepopulationofyourcountryby1andlogtheresulttotheconsole
// // 3. Finlandhasapopulationof6million.Doesyourcountryhavemorepeoplethan
// // Finland?
// // 4. Theaveragepopulationofacountryis33millionpeople.Doesyourcountry
// // have less people than the average country?
// // 5. Basedonthevariablesyoucreated,createanewvariable'description'
// // which contains a string with this format: 'Portugal is in Europe, and its 11 million people speak portuguese'

// population /= 2;
// console.log(population);

// population ++;
// console.log(population);

// let populationFinland = 6000000;
// console.log(population > populationFinland);

// let average = 33000000;
// console.log(population < average);

// let description = "Portugal is in Europe, and its 11 million people speak portuguese";
// console.log(description);


// const numNeighbors = Number(prompt('How many neighbors does your country have?'));
// if(numNeighbors === 1){
//     console.log('Only 1 border');
// } else if(numNeighbors > 1){
//     console.log('more than one');
// } else{
//     console.log('No borders');
// }

// båda funkar men den nedre är bättre, den upprepar ingenting och är mer proffsig
// population > 33 ? console.log('above average') : console.log('below average');

// console.log(`${country}'s population is ${population > 33000000 ? 'above average' : 'below average'}`);