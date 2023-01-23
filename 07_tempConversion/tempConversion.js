const convertToCelsius = function(fahrenheitTemp) {
  celsiusTemp = (fahrenheitTemp -32) * (5/9);
  celsiusTemp = celsiusTemp.toFixed(1)
  celsiusTemp = parseFloat(celsiusTemp)
  return celsiusTemp;
};

const convertToFahrenheit = function(celsiusTemp) {
  fahrenheitTemp = (celsiusTemp * 9/5)+32;
  fahrenheitTemp = fahrenheitTemp.toFixed(1)
  fahrenheitTemp = parseFloat(fahrenheitTemp)
  return fahrenheitTemp;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};

