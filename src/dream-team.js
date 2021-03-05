const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  if(!Array.isArray(members)) return false;
  let teamName = [];
  members.forEach((item) => {
    if(typeof item !== 'string') return;
    teamName.push(item.trim()[0]);
  })
  if(members.length === 0) return false;
  let result = teamName.sort().join('').toUpperCase();
  result = result.split('').sort().join('');
  return result;
};
