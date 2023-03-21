let defaultNumberOne = 0;
let defaultNumberTwo = 0;
let firstOperand = '';


function addition(a,b){
    return a + b;
}

function subtraction(a,b) {
return a - b;
}

function multiplication(a,b) {
return a * b;
}

function division(a,b) {
    return a / b;
}

function operate(defaultNumberOne,defaultNumberTwo, firstOperand) {
    if(firstOperand === '+'){
        return defaultNumberOne + defaultNumberTwo;
    } else if (firstOperand === '-'){
        return defaultNumberOne - defaultNumberTwo;
    } else if (firstOperand === '*'){
        return defaultNumberOne * defaultNumberTwo;
    } else if (firstOperand === '/'){
        return defaultNumberOne / defaultNumberTwo;
    }
}
console.log(operate(5,5, '/'));
