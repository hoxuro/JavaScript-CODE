'use strict';

const depositedMoney= prompt('Enter the amount of money you want to invest');
const annualInterest= 0.0175;

const calcSemiannualInterest= function(depositedMoney, annualInterest){         //function that calc the semi-annual interest
    const semiannualInterest= depositedMoney*(annualInterest/2);
    return semiannualInterest;
};

const calcTaxes= function(semiannualInterest){                                  //function that calc the f****** taxes
    const taxes= semiannualInterest*0.21;
    return taxes;
};

const calcNetIncome= function(semiannualInterest, taxes){                       //function that calc the net income
    const netIncome= semiannualInterest- taxes;
    return netIncome;
} ;

const finalMessage= `*** INTEREST CALCULATOR ***
Deposited Money: ${depositedMoney}
Annual Interest: ${(annualInterest*100).toFixed(2)}%
Interest at 6 month: ${(calcSemiannualInterest(depositedMoney, annualInterest)).toFixed(2)}
Taxes: ${(calcTaxes(calcSemiannualInterest(depositedMoney, annualInterest))).toFixed(2)}
Money Received: ${(calcNetIncome(calcSemiannualInterest(depositedMoney, annualInterest), calcTaxes(calcSemiannualInterest(depositedMoney, annualInterest)))).toFixed(2)}`

console.log(finalMessage);