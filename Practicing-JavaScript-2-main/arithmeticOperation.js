'use strict';

const x= Number(prompt('Enter a number'));
const y= Number(prompt('Enter a second number'));
const operator= prompt('Choose an operation ( + | - | x | / )');

const calcPlus= function(x, y){
    return x+ y;
};

const calcDiff= function(x, y){
    return x- y;
};

const calcProd= function(x, y){
    return x* y;
};

const calcDiv= function(x, y){
    return (x/ y).toFixed(2);
}

let operation;

/* if(operator==='+'){
    operation= calcPlus(x, y);

}else if(operator==='-'){
    operation= calcDiff(x, y);

}else if(operator==='x'){
    operation= calcProd(x, y);

}else if(operator==='/'){
    operation= calcDiv(x, y);

}else{
    console.log('Please enter a valid number');

}; */

switch(operator){
    case '+':
        operation= calcPlus(x, y);
        break;
    
    case '-':
        operation= calcDiff(x, y);
        break;

    case '*':
        operation= calcProd(x, y);
        break;

    case '/':
        operation= calcDiv(x, y);
        break;
    
    default:
        console.log('Please, enter a valid number')

}

const finalMessage= `x= ${x}, y= ${y}
operator= ${operator}
${x}${operator}${y}= ${operation}`;

console.log(finalMessage);