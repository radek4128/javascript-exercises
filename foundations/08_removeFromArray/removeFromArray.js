//// FIRST APPROACH /////

// const removeFromArray = function() {
//     let array = arguments[0];
//     for (let i = 1; i <= arguments.length; i++) {
//         index =  array.indexOf(arguments[i]);
//         if (index > -1) {
//             array.splice(index, 1);
//         }
//     }
//     return array;
// };


//// AFTER SEEING SOLUTION ////


const removeFromArray = function(array, ...args) {
    return array.filter(item => !args.includes(item));
}

// Do not edit below this line
module.exports = removeFromArray;
