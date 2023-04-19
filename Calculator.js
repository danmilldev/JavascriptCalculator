function _checkForCorrectInput(num1,num2)
{
    if(typeof(num1) !== 'number' | typeof num2 !== 'number')
    {
        throw new TypeError;
    }
}

function sum(num1,num2) {
    _checkForCorrectInput(num1,num2);
    return num1 + num2;
}

function subtract(num1,num2)
{
    _checkForCorrectInput(num1,num2);
    return num1 - num2;
}

function multiply(num1,num2)
{
    _checkForCorrectInput(num1,num2);
    return num1 * num2;
}

function divide(num1,num2) {
    _checkForCorrectInput(num1,num2);
    return num1 / num2;
}

module.exports = {sum,subtract,multiply,divide}