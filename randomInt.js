'use strict';

console.log('Printing a random number between -15 and 15');

const calcRandom= function(m, n){                               //function that takes a random number between others
    const random= Math.trunc((Math.random()*(n-m+1)+ m));
    return random;
};

console.log(calcRandom(-15, 15));