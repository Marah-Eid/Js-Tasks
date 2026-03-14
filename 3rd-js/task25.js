for (let i = 1; i <= 100; i++) {

    let num = i;
    let product = 1;
    let sum=0;

    while (num > 0) {

        let digit = num % 10;
        product *= digit;
        sum +=digit;
        num = Math.floor(num / 10);

    }

    if (product==sum) {
       document.writeln(i);
    }

}