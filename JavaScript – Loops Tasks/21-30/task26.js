for (let i = 1; i <= 500; i++) {

    let num = i;
    let reverse=0;

    while (num > 0) {

        let digit = num % 10;
        reverse = reverse * 10 + digit;
        num = Math.floor(num / 10);

    }

    if (reverse%3==0) {
       document.writeln(i);
    }
}