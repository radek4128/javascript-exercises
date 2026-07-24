// const getTheTitles = function(arr) {
//     return arr.reduce((acc, item, index) => {
//         acc.push(item.title);
//         return acc;
//     }, []);
// };

const getTheTitles = function(arr) {
    return arr.map(book => book.title)
}


// Do not edit below this line
module.exports = getTheTitles;
