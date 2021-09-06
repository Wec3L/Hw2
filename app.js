function pickOperation() {
    const operation = prompt('choose your operation(+,-,*,/.)');
    console.log(operation);
    return operation;
}
function pickNumber(message) {
    const result = prompt(message);
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
    let conditionOfCalcFailed = !firstNumber || !secondNumber || isNaN(firstNumber) || isNaN(secondNumber);
    if(conditionOfCalcFailed) { 
       alert("please use digits only, and let's try one more time");
       firstNumber = pickNumber('Pick first number');
       secondNumber = pickNumber('Pick second number');
       conditionOfCalcFailed = !firstNumber || !secondNumber || isNaN(firstNumber) || isNaN(secondNumber);
       if(conditionOfCalcFailed) {
           alert('something goes wrong... please, relod page')
       }
       else {
           calc(operation,firstNumber,secondNumber);
       }
    }
    else {
        calc(operation,firstNumber,secondNumber);
    }
}