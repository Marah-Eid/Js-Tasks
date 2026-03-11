let x= Number(prompt("Enter the first number"));
let y= Number(prompt("Enter the second number"));
let result;

if (x > y) {
  result = "Hello World";
} else {
  result = "Goodbye";
}

alert(result);
console.log(result);
document.getElementById("output").innerHTML = result;