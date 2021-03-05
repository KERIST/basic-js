const CustomError = require("../extensions/custom-error");

module.exports = function countCats(matrix) {
  let catsAmount = 0;
  matrix.forEach((elem) => {
    elem.forEach((arrayItem) => {
      if(arrayItem === '^^') catsAmount++;
    })
  })
  return catsAmount;
};
