'use strict';
function findBinary(num){
  if(num > 0) {
    let newNum= Math.floor(num % 2);
    return (findBinary(Math.floor(num / 2)) + newNum);
  }else{
    return '';
  }
}
console.log(findBinary(25));