const fibonacci = function(num) {
    num = +num
    if (num === 0) return 0;
    if (num < 0) return 'OOPS';

    let prevNum = 0;
    let currNum = 1;
    let temp = null;

    for (let i = 1; i < num; i++) {
        temp = prevNum + currNum;
        prevNum = currNum;
        currNum = temp;
    }
    return currNum;

};

// Do not edit below this line
module.exports = fibonacci;
