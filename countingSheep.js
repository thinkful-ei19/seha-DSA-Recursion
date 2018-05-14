'use strict';
function count(num){
    if(num === 0){
        console.log(`No more sheeps`)
        return;
    } else {
        console.log(`${num}: Another sheep jump over the fence`);
        return count(num - 1);
    }
}
    count(5);