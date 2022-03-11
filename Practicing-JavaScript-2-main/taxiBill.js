'use strict';

const km= Number(prompt('Enter the length of the route:'));
let bill;

if(km<=30){
    bill= 18;

}else if(km<=100){
    bill= 18+ 0.85*(km-30);

}else{
    bill= 18+ 0.85*70 + 0.65*(km-100);

};

console.log(`Km traveled: ${km}
Bill: ${bill}€`);