'use strict';
const findBinary = (num) => {
  if (num === 0) {
    return '0';
  }
  const dividedNum = Math.floor(num / 2);
  const remainder = num % 2;
  if (dividedNum === 0) {
    return `${remainder}`;
  }
  return findBinary(dividedNum) + remainder.toString();
};
console.log(findBinary(25));

// function findBinary(num){
//   if(num > 0) {
//     let newNum= Math.floor(num % 2);
//     return (findBinary(Math.floor(num / 2)) + newNum);
//   }else{
//     return '';
//   }
// }
// console.log(findBinary(25));