const convertToCelsius = function(temp) {
  const tempInCelsius = (temp - 32) * 5 / 9
  // return parseFloat(tempInCelsius.toFixed(1))
    //// MORE READABLE ///
  return Math.round(tempInCelsius * 10) / 10
};

const convertToFahrenheit = function(temp) {
  const tempInFahrenheit = temp * 1.8 + 32
  // return parseFloat(tempInFahrenheit.toFixed(1))
  //// MORE READABLE ///
  return Math.round(tempInFahrenheit * 10) / 10

};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
