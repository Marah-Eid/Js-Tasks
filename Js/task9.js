let username = prompt("Enter username:");
let password = prompt("Enter password:");

let message;

if (username === "admin" && password === "1234") {
    message = "Login Successful";
} else {
    message = "Invalid Username or Password";
}

alert(message);
console.log(message);