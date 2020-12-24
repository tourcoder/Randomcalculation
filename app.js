'use strict';

let GetRandomNum = (Min,Max)=>{
    let Range = Max - Min;   
    let Rand = Math.random();   
    return(Min + Math.round(Rand * Range)); 
}

exports.randomcalculation = function randomcalculation(firstMin, firstMax, secondMin, secondMax){
    const operatorArray = ["+", "-", "*", "/"];
    let randomArray = operatorArray[Math.floor(Math.random()*operatorArray.length)].toString();
    let firstNumber = GetRandomNum(firstMin, firstMax);
    let secondNumber = 0;
    let result;
    switch(randomArray) {
    	case'+':
    		    result = firstNumber + secondNumber;
    	   break;	             
    	case'-':
    		    result = firstNumber - secondNumber;
    	   break;
        case'*':
    		    result = firstNumber * secondNumber;
            break;
        case'/':
                if (secondNumber == 0) {
                    return {error: false, msg: '0 cannot be used as a divisor'};
                } else {
                    result = firstNumber / secondNumber;
                }
            break;
        default:

            break;
    }
    let equation = firstNumber + randomArray + secondNumber;
    return {result, equation};
}
