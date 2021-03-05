const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  if(!Array.isArray(arr)) throw Error('Invalid argument type');
  let myArray = Array.from(arr);
  myArray.forEach((elem, index) => {
    switch(elem) {
      case '--discard-next':
        if(index  + 1 >= myArray.length) {
          myArray[index] = 'delete'; 
          break;
        }
        myArray[index] = 'delete';
        myArray[index + 1] = 'delete'
        break;
      case '--discard-prev':
        if(index == 0) {
          myArray[index] = 'delete'; 
          break;
        }
        myArray[index] = 'delete';
        myArray[index - 1] = 'delete';
        break;
      case '--double-next':
        if(index  + 1 >= myArray.length) {
          myArray[index] = 'delete'; 
          break;
        }
        myArray[index] = myArray[index + 1];
        break;
      case '--double-prev':
        if(index == 0) {
          myArray[index] = 'delete'; 
          break;
        }
        myArray[index] = myArray[index - 1];
        break;
    }
  })
  return myArray.filter(elem => elem !== 'delete');
};
