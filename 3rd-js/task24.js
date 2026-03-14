for (let i = 1; i <= 300; i++) {

    let num = i;
    let product = 1;

    while (num > 0) {

        let digit = num % 10;
        product *= digit;
        num = Math.floor(num / 10);

    }

    if (product !== 0 && i % product === 0) {
        document.writeln(i);
    }

}