'use strict';

const a= Number(prompt('Enter a'));
const b= Number(prompt('Enter b'));
const c= Number(prompt('Enter c'));

const calcDis= function(a, b, c){               //function that calculates the discriminant
    return Math.pow(b, 2)- 4*a*c;
};

const calcEcu= function(a, b, c){
    const x1= (-b+Math.sqrt(calcDis(a, b, c)))/2*a;             //function that calculates a normal ecuation
    const x2= (-b-Math.sqrt(calcDis(a, b, c)))/2*a;
    return `x1= ${x1}
    x2= ${x2}`;
};

const calcDoubleEcu= function(a, b, c){
    const x= -b/2*a;             //function that calculates a double ecuation
    return `x= ${x} (double)`; 
};

const solutionString= function(a, b, c){

    if(calcDis(a, b, c)<0){                                          //function that prints the solution
        return 'Does not exist real solution';
    
    }else if(calcDis(a, b, c)===0){
        return `${a}x^2 + ${b}x + ${c}= 
    ${calcDoubleEcu(a, b, c)}`;
        
    }else{
        return `${a}x^2 + ${b}x + ${c}= 
    ${calcEcu(a, b, c)}`;
    
    };
};

console.log(solutionString(a, b, c));