let operation = prompt("Enter operation (+, -, *, /):");
let firstNumber = Number(prompt("Enter first number:"));
let secondNumber = Number(prompt("Enter second number:"));
let result;

if (operation === "+") {
  result = firstNumber + secondNumber;
  }
   else if (operation === "-") {
  result = firstNumber - secondNumber;
} 
else if (operation === "*") {
  result = firstNumber * secondNumber;
}
 else if (operation === "/") {
  result = firstNumber / secondNumber;
}
 else {
  result = "Invalid operation";
}

let re = `${firstNumber} ${operation} ${secondNumber} = ${result}`;
console.log(re);

document.getElementById("output").innerHTML = re;