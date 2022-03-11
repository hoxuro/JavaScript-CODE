'use strict';

const code= prompt('Enter your article code');

const calcFaulty= function(code){

    if(code>=14681 && code<=15681){                             //function that calculates the faulty code
        return 'Your code is faulty...';
    
    }else if(code>=70001 && code<=79999){
        return 'Your code is faulty...';
    
    }else if(code>=99999 && code<= 110110){
        return 'Your code is faulty...';
    
    }else{
        return 'Your code is right!! 👌';
    
    };
};

console.log(calcFaulty(code));