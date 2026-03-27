for (let i = 1; i <= 1000; i++) {

    let num = i;
    let sum = 0;

    
    while (num > 0) {
        let digit = num % 10;
        sum += digit * digit * digit;
        num = Math.floor(num / 10);
    }

    
    if (sum === i) {
        document.write(i + "<br>");
    }
}