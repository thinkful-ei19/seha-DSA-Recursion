'use strict';
function splitString(str, separator){
  let index = str.indexOf(separator);
  if (!separator) {
    return [...str];
  }
  if( index === -1){
    return [str];
  } 
  else {
    return [str.slice(0, index), ...splitString(str.slice(index + 1 ), separator)];

  }
}
console.log(splitString('Hello! everybody so glad to see you!',' '));

