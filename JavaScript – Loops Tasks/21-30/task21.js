for (let i = 1; i <= 200; i++) {

    let sum = 0;
    let num = i;

    while (num > 0) {
        sum += num % 10;
        num = Math.floor(num / 10);
    }

    if (sum === 5) {
        document.writeln(i);
    }
}