const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
  constructor(machineType) {
    if(machineType != false) {
      this.machineType = true;
    } else {
      this.machineType = false;
    }
  }

  isItALetter(letter) {
    if(letter.charCodeAt() >= 97 && letter.charCodeAt() <= 122) {
      return true;
    }
    return false;
  }

  duplicateKey(key, stringSize) {
    let rate = Math.ceil(stringSize / key.length);
    let result = Array.from(new Array(rate), x => key).join('').slice(0, stringSize);
    return result;
  }
  
  encrypt(text, key) {
    if(!text || !key) throw Error('no args');
    let lettersArray = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    let textArray = text.toLowerCase().split(' ') ? text.toLowerCase().split(' ') : text;
    let keyTextSize = this.duplicateKey(key.toLowerCase(), textArray.join('').length);
    let keyArray = textArray.map(elem => {
      let result = keyTextSize.slice(0, elem.length);
      keyTextSize = keyTextSize.slice(elem.length);
      return result;
    });
    let resultArray = [];
    textArray.forEach((word, wordIndex) => {
      let encryptedStr = '';
      word.split('').forEach((letter, letterIndex) => {
        if(this.isItALetter(letter)) {
          let m = lettersArray.indexOf(letter);
          let k = lettersArray.indexOf(keyArray[wordIndex][letterIndex]);
          let n = lettersArray.length;
          let encryptedLetterIndex = (m + k) % n;
          encryptedStr += lettersArray[encryptedLetterIndex];
        } else {
          encryptedStr += letter;
        }   
      })
      resultArray.push(encryptedStr);
    });

    return resultArray.join(' ').toUpperCase();
  }    
  decrypt(text, key) {
    if(!text || !key) throw Error('no args');
    if(!this.machineType) 
      text = text.split('').reverse().join('');
    let lettersArray = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    let textArray = text.toLowerCase().split(' ') ? text.toLowerCase().split(' ') : text;
    let keyTextSize = this.duplicateKey(key.toLowerCase(), textArray.join('').length);
    let keyArray = textArray.map(elem => {
      let result = keyTextSize.slice(0, elem.length);
      keyTextSize = keyTextSize.slice(elem.length);
      return result;
    });
    let resultArray = [];
    textArray.forEach((word, wordIndex) => {
      let encryptedStr = '';
      word.split('').forEach((letter, letterIndex) => {
        if(this.isItALetter(letter)) {
          let c = lettersArray.indexOf(letter);
          let k = lettersArray.indexOf(keyArray[wordIndex][letterIndex]);
          let n = lettersArray.length;
          let encryptedLetterIndex = (c + n - k) % n;
          encryptedStr += lettersArray[encryptedLetterIndex];
        } else {
          encryptedStr += letter;
        }   
      })
      resultArray.push(encryptedStr);
    });
    if(!this.machineType) 
      return resultArray.join(' ').toUpperCase().split('').reverse().join('');
    return resultArray.join(' ').toUpperCase();

  }
}

module.exports = VigenereCipheringMachine;
