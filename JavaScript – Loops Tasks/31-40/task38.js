for (let i = 1; i <= 300; i++) {

    let num = i;

    
    let last = num % 10;

    
    while (num >= 10) {
        num = Math.floor(num / 10);
    }
    let first = num;

    
    if (last * last === first) {
        document.write(i + "<br>");
    }
}