'use strict';

const day= Number(prompt('Enter day:'));
const month= Number(prompt('Enter month:'));
const year= Number(prompt('Enter year:'));

const calcLeapYear= function(year){

    let leapYear= false;                              //function that calculates if a year is leap or not
    if(year%4===0 && year%100!=0){
        leapYear= true;

    }else if(year%400===0){
        leapYear=true;

    };

    return leapYear;

};

const calc31= function(month){              //function that calculates if a month has 31 days

    let has31;
    if(month===1 || month===3 || month===5 || month===7 || month===8 || month===10 || month===12){
        has31= true;

    }else{
        has31=false;
    };

    return has31;
};

if(year>=1500 && year<=3000 && month>0 && month<=12 && day>0 && day<=31){           
    switch(month){
        case 2:
            if(calcLeapYear(year) && day<=29){
                console.log(`${day}/${month}/${year} is a CORRECT date`);

            }else if(calcLeapYear(year)===false && day<=28){
                console.log(`${day}/${month}/${year} is a CORRECT date`);
                
            }else{
                console.log(`${day}/${month}/${year} is an INCORRECT date`);

            };

            break;
        
        case 1:
        case 3:
        case 5:
        case 7:
        case 8:
        case 10:
        case 12:
            console.log(`${day}/${month}/${year} is a CORRECT date`);

            break;
        
        case 4:
        case 6:
        case 9:
        case 11:
            if(day===31){
                console.log(`${day}/${month}/${year} is an INCORRECT date`);

            }else{
                console.log(`${day}/${month}/${year} is a CORRECT date`);

            };

            break;
        };


}else{
    console.log('Please, enter a valid date');

};