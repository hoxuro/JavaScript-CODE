'use strict';

const euPeConversor= function(euro){              //function that convert euros to pesetas
    const pes= euro*166.386;
    return pes;
};

const peEuConversor= function(peseta){           //function that convert pesetas to euros
    const eur= peseta/166.386;
    return eur;
};

const euros= prompt('Cantidad de euros a convertir: ');
console.log(`${euros} euros son ${euPeConversor(euros)} pesetas.`);

const pesetas= prompt('Cantidad de pesetas a convertir: ');
console.log(`${pesetas} pesetas son ${peEuConversor(pesetas)} pesetas.`);