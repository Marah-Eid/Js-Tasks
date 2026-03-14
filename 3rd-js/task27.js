for (let i = 10; i <= 200; i++) {

    let lastDigit = i % 10;
    let firstDigit = Math.floor(i / 10);

    if (Math.abs(firstDigit - lastDigit) === 2) {
        document.writeln(i);
    }

}
