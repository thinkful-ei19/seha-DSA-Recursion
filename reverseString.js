'use strict';
function reverseStr(string){
  if(string.length === 1){
    return string;
  }else {
    //return string.split("").reverse().join("");
    return reverseStr(string.slice(1)) + string[0];
  }
}
console.log(reverseStr('hello'));