//// MY SOLUTION ////

// const leapYears = function(year) {
//     if (year % 4 === 0) {
//         if (year % 100 === 0) {
//             if (year % 400 === 0) {
//                 return true;
//             } else {
//                 return false;
//             }
//         } else {
//             return true;
//         }
//     } else {
//         return false;
//     }
// };


//// BETTER SOLUTION (MORE READABLE)////

const leapYears = function(year) {
    const isDivisibleByFour = (year % 4 === 0)
    const isCentury = (year % 100 === 0)
    const isDivisibleByFourHundred = (year % 400 === 0)

    if (isDivisibleByFour & 
        (!isCentury || isDivisibleByFourHundred)
    ) {
        return true;       
    } else {
        return false;
    }
}

// Do not edit below this line
module.exports = leapYears;
