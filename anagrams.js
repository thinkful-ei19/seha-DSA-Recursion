'use strict';
function reproduceWord(prefix, string){
  if(string.length <= 1 ){
    console.log(`The anagram is ${prefix}${string}`);
  } else{
    for(let i=0; i<string.length; i++){
      let current = string.substring(i, i+1);
      let previous = string.substring(0, i);
      let after = string.substring(i+1);
      reproduceWord(prefix+current, previous+after);
    } 
  }
}
reproduceWord(' ', 'east');