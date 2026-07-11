/// MY SOLUTION ///

// const sumAll = function(a, b) {
//     if (!Number.isInteger(a) 
//     || !Number.isInteger(b) 
//     || a < 1 
//     || b < 1) {
//         return 'ERROR';
//     }

//     let sum = 0
//     let start = (a < b) ? a : b;
//     const stop = (b > a) ? b : a;
//     for (let i = start; i <= stop; i++) {
//         sum += i;
//     }
//     return sum;
// };


/// AFTER SEEING SOLUTION ///

const sumAll = function(min, max) {
    if (!Number.isInteger(min) || !Number.isInteger(max)) return 'ERROR';
    if (min < 1 || max < 1) return 'ERROR';

    if (max < min) {
        const temp = min;
        min = max;
        max = temp;
    }
    
    let sum = 0;
    for (let i = min; i <= max; i++) {
        sum += i;
    }
    return sum;
}


// Do not edit below this line
module.exports = sumAll;
