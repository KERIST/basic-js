const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
  let turnsAmount = 2 ** disksNumber - 1;
  return {turns: turnsAmount, seconds: Math.floor(turnsAmount / (turnsSpeed / 3600 ))}
};
