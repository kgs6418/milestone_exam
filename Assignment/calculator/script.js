const num1 = prompt("enter first number");
const op = prompt("enter mathematical operator:  +,-,*,/");
const num2 = prompt("enter second number");

switch (op) {
    case "+":
        var result = parseFloat(num1)+parseFloat(num2);
        console.log(result);break;
    case "-":
        var result = parseFloat(num1)-parseFloat(num2);
        console.log(result);break;
    case "*":
        var result = parseFloat(num1)*parseFloat(num2);
        console.log(result);break;
    case "/":
        var result = parseFloat(num1)/parseFloat(num2);
        console.log(result);break;
   
    default:  console.log("Invalid Operator ")
        break;
}