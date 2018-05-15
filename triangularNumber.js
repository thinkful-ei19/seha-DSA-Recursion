'use strict';
function calculateSumOf(num){
  if( num === 1){
    return num;
  }else{
    return num + calculateSumOf(num-1);
  }
}
console.log(calculateSumOf(5));