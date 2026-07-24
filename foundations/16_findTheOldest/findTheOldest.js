const findTheOldest = function(arr) {
    const currentYear = (new Date).getFullYear();
    arr.sort((a, b) => {
        const aMinuend = a.yearOfDeath? a.yearOfDeath : currentYear;
        const bMinuend = b.yearOfDeath? b.yearOfDeath : currentYear;
        
        const aAge = aMinuend - a.yearOfBirth;
        const bAge = bMinuend - b.yearOfBirth;
        return bAge - aAge;
    })
    return arr[0];

};

// Do not edit below this line
module.exports = findTheOldest;
