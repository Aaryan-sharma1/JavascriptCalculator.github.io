function calculator(num1, num2, operator) {
    function add(a, b)
    {return a + b;}
    function subtract(a, b)
    {return a - b;}
    function multiply(a, b)
    {return a * b;}
    function divide(a, b)
    {return a / b;}
    switch (operator) {
        case '+':
            return add(num1, num2);
        case '-':
            return subtract(num1, num2);
        case '*':
            return multiply(num1, num2);
        case '/':
            return divide(num1, num2);
        default:
            return "Invalid operator";
    }
}
let number1 = Number(prompt("Enter first number: "));
let number2 = Number(prompt("Enter second number: "));
let op = prompt("Enter operator (+, -, *, /): ");
let result = calculator(number1, number2, op);
document.write("Result: " + result);

