for (let i = 1; i <= 1000; i++) {

    let num = i;
    let sum = 0;
    let product = 1;

    
    while (num > 0) {
        let digit = num % 10;
        sum += digit;
        product *= digit;
        num = Math.floor(num / 10);
    }

    
    if (sum === product) {
        document.write(i + "<br>");
    }
}