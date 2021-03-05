const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  depth = 1;
  maxDepth = 1;
  callsAmount = 0;
  shouldBeNullified = false;
  calculateDepth(arr) {
    if(this.shouldBeNullified) {
      this.depth = 1;
      this.maxDepth = 1;
      this.shouldBeNullified = false;
    }
    let thisDepth = this.depth;
    this.callsAmount++;
    arr.forEach(item => {
      this.depth = thisDepth;
      if(Array.isArray(item)) {
        this.depth++;
        this.calculateDepth(item);
      } else {
        this.depth = thisDepth
      }
    });
    if(this.depth > this.maxDepth) this.maxDepth = this.depth;
    this.depth = thisDepth;
    this.callsAmount--;
    if(this.callsAmount === 0) {
      this.shouldBeNullified = true;
    }
    return this.maxDepth;
  }
};