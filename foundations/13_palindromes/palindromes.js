const palindromes = function(word) {
    word = word
            .toLowerCase()
            .replace(/[.,! ]/g, '');
    reversed = word
                  .split('')
                  .reverse()
                  .join('');

    return word === reversed
};

// Do not edit below this line
module.exports = palindromes;
