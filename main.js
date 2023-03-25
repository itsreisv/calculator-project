const input = document.querySelector('.input');
const lastInput = document.querySelector('.lastInput');
const numbers = document.querySelectorAll('.number');
const operator = document.querySelectorAll('.operator');
const equals = document.querySelector('#equals');
const decimal = document.querySelector('.dot');
const clear = document.querySelector('.clear');
const erase = document.querySelector('.delete');

let firstNum = '';
let secondNum = '';
let defaultValue = 0;
let firstOperator = '';
let currentOperation = null;


clear.addEventListener('click', clearPage)
equals.addEventListener('click' , evaluate)
erase.addEventListener('click' , deleteInput)

numbers.forEach((button) =>
button.addEventListener('click' , () => updateNumber(button.textContent))
)

operator.forEach((button) =>
  button.addEventListener('click', () => setOperation(button.textContent))
)

function deleteInput() {
    input.textContent = '';
}


function clearPage() {
input.textContent = '';
lastInput.textContent = '';
firstNum = '';
secondNum = '';
firstOperator = '';
}


function updateNumber(number) {
    
    if(input.textContent === '') {}
    input.textContent += number;

}

function setOperation(operator) {
    firstNum = input.textContent;
    currentOperation = operator
    lastInput.textContent = `${firstNum} ${currentOperation}`
    input.textContent = ''
}

function evaluate () {
    secondNum = input.textContent
    input.textContent = roundResult(operate(+firstNum, +secondNum, currentOperation));
    lastInput.textContent = `${firstNum} ${currentOperation} ${secondNum}`
    
}

function roundResult(number) {
    return Math.round(number * 1000) / 1000
  }

function resetScreen(){
    input.textContent = '';  

}

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

function operate(firstNum,secondNum, firstOperand) {
    if(firstOperand === '+'){
        return addition(firstNum,secondNum)
    } else if (firstOperand === '-'){
        return subtraction(firstNum,secondNum)
    } else if (firstOperand === '*'){
        return multiplication(firstNum,secondNum)
    } else if (firstOperand === '/'){
        return division(firstNum,secondNum)
    }
}
