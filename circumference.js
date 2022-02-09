const radius= prompt('Enter the radius of your circumference');

const calcDiameter= function(radius){                //function that calc the diameter
    const diameter= 2*radius;
    return diameter;
};

const calcArea= function(radius){                    //function that calc the area
    const area= Math.PI*Math.pow(radius, 2);
    return area;
};

const calcLength= function(radius){
    const length= calcDiameter(radius)*Math.PI;      //function that calc the length
    return length;
};

const finalMessage= `Your radius: ${radius}
Diameter: ${calcDiameter(radius)}
Length: ${calcLength(radius)}
Area: ${calcArea(radius)}`;

console.log(finalMessage);
