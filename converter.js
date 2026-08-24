const celsiusToF = (c) => (c * 9/5) + 32;
const fToCelsius = (f) => (f - 32) * 5/9;

module.exports = { celsiusToF, fToCelsius };