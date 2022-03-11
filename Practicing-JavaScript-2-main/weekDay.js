'use strict';

const day= Number(prompt('Enter day:'));
const month= Number(prompt('Enter month:'));
const year= Number(prompt('Enter year:'));

const year0= year - (14 - month) / 12;
const x= year0 + year0 / 4 - year0 / 100 + year0 / 400;
const month0= month + 12 * ((14 - month) / 12) - 2;
const day0= Math.trunc((day + x + (31 * month0) / 12) % 7);

let stringDay;

switch(Math.trunc(day0)){
    case 0:
        stringDay= 'Sunday';
        break;

    case 1:
        stringDay= 'Monday';
        break;

    case 2:
        stringDay= 'Tuesday';
        break;

    case 3:
        stringDay= 'Wednesday';
        break;

    case 4:
        stringDay= 'Thursday';
        break;

    case 5:
        stringDay= 'Friday';
        break;

    case 6:
        stringDay= 'Saturday';
        break;
};

const finalString= `The day of the date ${day}/${month}/${year}
is ${stringDay}`;

console.log(finalString);
console.log(year0);
console.log(month0);
console.log(day0);
console.log(x);
