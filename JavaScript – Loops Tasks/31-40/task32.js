for (let i = 1; i <= 500; i++) {

    let num = i;
    let sum = 0;

    while (num > 0) {
        sum += num % 10;
        num = Math.floor(num / 10);
    }

   
    let isPrime = true;

    if (sum <= 1) {
        isPrime = false;
    } else {
        for (let j = 2; j <= Math.sqrt(sum); j++) {
            if (sum % j === 0) {
                isPrime = false;
                break;
            }
        }
    }

    
    if (isPrime) {
        console.log(i + " (Digit Sum = " + sum + ")");
    }
}