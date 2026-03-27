for (let i = 1; i <= 500; i++) {

    let num = i;
    let sum = 0;
    let count = 0;

    
    while (num > 0) {
        let digit = num % 10;
        sum += digit;
        count++;
        num = Math.floor(num / 10);
    }

    
    if (sum % count === 0) {
        document.write(i + " (Sum=" + sum + ", Digits=" + count + ")<br>");
    }
}