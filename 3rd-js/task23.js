for (let i =1 ;i<=100; i++){
    
    let firstDigit = Math.floor(i / 10);
    let lastDigit = i % 10;

    if (firstDigit == lastDigit) {
        document.writeln(i);
    }

}