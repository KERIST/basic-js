const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
  if(isNaN(sampleActivity) || typeof sampleActivity !== 'string') return false;
  if(+sampleActivity <= 0 || +sampleActivity > 15) return false;
  let k = .693 / HALF_LIFE_PERIOD;
  let result = Math.ceil(Math.log(MODERN_ACTIVITY / sampleActivity) / k);
  return result;
};
