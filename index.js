import { fifaData } from './fifa.js';
console.log(fifaData);

console.log('its working');
// ⚽️ M  V P ⚽️ //

/* Task 1: Investigate the data above. Practice accessing data by console.log-ing the following pieces of data 

(a) Home Team name for 2014 world cup final
(b) Away Team name for 2014 world cup final
(c) Home Team goals for 2014 world cup final
(d) Away Team goals for 2014 world cup final
(e) Winner of 2014 world cup final */

//helper function
const filter2014 = fifaData.filter(function(item){
    return item.Year == 2014
})
console.log(filter2014)

//a
const filterHome2014 = filter2014.map(function(item){
    return item["Home Team Name"]
})
console.log(filterHome2014)

//b
const filterAway2014 = filter2014.map(function(item){
    return item["Away Team Name"]
})
console.log(filterAway2014)

//c
const filterHomeGoal2014 = filter2014.map(function(item){
    return `${item["Home Team Name"]}: ${item["Home Team Goals"]}`
})
console.log(filterHomeGoal2014)

//d
const filterAwayGoal2014 = filter2014.map(function(item){
    return `${item["Away Team Name"]}: ${item["Away Team Goals"]}`
})
console.log(filterAwayGoal2014)

// filter final match
const filterFinal2014 = filter2014.filter(function(item){
    return item.Stage == "Final"
})
console.log(filterFinal2014)

// e, find winning team
const findWinningTeam = filterFinal2014.map(function(item){
    if (item["Home Team Goals"] > item["Away Team Goals"]){
        return item["Home Team Name"]
    } else {
        return item["Away Team Name"]
    }
})
console.log(findWinningTeam)


/* Task 2: Create a function called  getFinals that takes `data` as an argument and returns an array of objects with only finals data */

function getFinals(data) {

    /* code here */
    const finalContestant = data.filter(function(item){
        return item.Stage == "Final"
    })
    return finalContestant
};
console.log(getFinals(fifaData))

/* Task 3: Implement a higher-order function called `getYears` that accepts the callback function `getFinals`, and returns an array called `years` containing all of the years in the dataset */

function getYears(getFinals, data) {

    /* code here */
    const yearsinData = getFinals(data)
    const years = yearsinData.map(function(item){
        return item.Year
    })
    return years

};
console.log(getYears(getFinals, fifaData))


/* Task 5: Implement a higher-order function called `getWinners`, that accepts the callback function `getFinals()` and determine the winner (home or away) of each `finals` game. Return the name of all winning countries in an array called `winners` */ 

function getWinners(getFinals, data) {

    /* code here */
    let winners = []
    const finals = getFinals(data)
    finals.forEach(function(item){
        if (item["Home Team Goals"] > item["Away Team Goals"]){
            winners.push(item["Home Team Name"])
        } else {
            winners.push(item["Away Team Name"])
        }
        return winners
    });
    return winners


};

console.log(getWinners(getFinals, fifaData))
// getWinners();

/* Task 6: Implement a higher-order function called `getWinnersByYear` that accepts the following parameters and returns a set of strings "In {year}, {country} won the world cup!" 

Parameters: 
 * callback function getWinners
 * callback function getYears
 */

function getWinnersByYear(getWinners, getYears, data) {

    // get years data
    const yearsVal = getYears(getFinals, data)
    // get winning team data
    const winnersVal = getWinners(getFinals, data)

    let champion = []

    // create an object containing years and winning team
    for (let x in yearsVal){
        console.log(yearsVal[x])
        champion.push({years: yearsVal[x], team: winnersVal[x]})
    }

    // return an array of  winning team + year won
    const string = champion.map(function(item){
        return `In ${item.team}, ${item.years} won the world cup!`
    })
    return string

};
console.log(getWinnersByYear(getWinners, getYears, fifaData))

// getWinnersByYear();

/* Task 7: Write a function called `getAverageGoals` that accepts a parameter `data` and returns the the average number of home team goals and away team goals scored per match (Hint: use .reduce and do this in 2 steps) */

function getAverageGoals(/* code here */) {

    /* code here */

};

getAverageGoals();

/// STRETCH 🥅 //

/* Stretch 1: Create a function called `getCountryWins` that takes the parameters `data` and `team initials` and returns the number of world cup wins that country has had. 

Hint: Investigate your data to find "team initials"!
Hint: use `.reduce` */

function getCountryWins(/* code here */) {

    /* code here */

};

getCountryWins();


/* Stretch 3: Write a function called getGoals() that accepts a parameter `data` and returns the team with the most goals score per appearance (average goals for) in the World Cup finals */

function getGoals(/* code here */) {

    /* code here */

};

getGoals();


/* Stretch 4: Write a function called badDefense() that accepts a parameter `data` and calculates the team with the most goals scored against them per appearance (average goals against) in the World Cup finals */

function badDefense(/* code here */) {

    /* code here */

};

badDefense();

/* If you still have time, use the space below to work on any stretch goals of your chosing as listed in the README file. */
