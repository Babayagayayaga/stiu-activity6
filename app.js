const chalk = require("chalk");
const { celsiusToF, fToCelsius } = require("./converter");

console.log(chalk.yellow(`20°C = ${celsiusToF(20)}°F`));
console.log(chalk.green(`100°C = ${celsiusToF(100)}°F`));
console.log(chalk.blue(`98.6°F = ${fToCelsius(98.6).toFixed(1)}°C`));