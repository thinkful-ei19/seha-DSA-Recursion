'use strict';
//Input: [1, 2, 3]
//Output: [2, 4, 6]

function double(array){
    if(!array.length){
        return [];
    } else {
        return [array[0] * 2,...double(array.slice(1))];
    }
}

console.log(double([1, 2, 3]));