function pickOperation() {
    let operation = prompt('choose your operation(+,-,*,/.)');
    console.log(operation);
    return operation;
}
function pickNumber(message) {
    let result = prompt(message);
    return result;
    
}
function calc(operation,firstNumber,secondNumber) {
    let result;

    if(operation == '+') {
        result = firstNumber + secondNumber; 
    }
    else if(operation == '-') {
        result = firstNumber - secondNumber;
    }
    else if(operation == '*') {
        result = firstNumber * secondNumber;
    }
    else if(operation == '/') {
        result = firstNumber / secondNumber;
    }
    alert(result);
}
let operation;
let firstNumber;
let secondNumber;
operation = pickOperation();
if(operation !='+' && operation !='-' && operation !='*' && operation !='/') {
    alert('wrong symbol')   
}
else {
    firstNumber = pickNumber('Pick first number');
    secondNumber = pickNumber('Pick second number');
    console.log(firstNumber,secondNumber);
    calc(operation,firstNumber,secondNumber);
}