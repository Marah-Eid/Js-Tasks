for (let i = 1; i <= 1000; i++) {

    let square = i * i;

    // count digits of i
    let num = i;
    let digits = 0;

    while (num > 0) {
        digits++;
        num = Math.floor(num / 10);
    }

    
    let lastPart = square % Math.pow(10, digits);

   
    if (lastPart === i) {
        document.write(i + "<br>");
    }
}