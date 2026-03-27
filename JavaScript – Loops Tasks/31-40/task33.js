for (let i = 1; i <= 300; i++) {

    let num = i;
    let d1 = num % 10;
    num = Math.floor(num / 10);

    let d2 = num % 10;
    num = Math.floor(num / 10);

    let d3 = num % 10;

    let count = 0;

    if (d1 === d2) count++;
    if (d1 === d3) count++;
    if (d2 === d3) count++;

    if (count === 1) {
        document.write(i + "<br>");
    }
}