'use strict';

const x= prompt('Enter the x position:');
const y= prompt('Enter the y position:');

const calcDistance= function(x, y){
    const distance= Math.sqrt(Math.pow(x, 2)+ Math.pow(y, 2));             //function that takes the sqrt of a point
    return distance;
};

console.log(`The distance from (0, 0) to the point (${x}, ${y}) is ${calcDistance(x, y).toFixed(2)} u.`);