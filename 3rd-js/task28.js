for (let i = 10; i <= 500; i++) {

    let num = i.toString();   
    let ascending = true;

    for (let j = 0; j < num.length - 1; j++) {

        if (num[j] >= num[j + 1]) {
            ascending = false;
            break;
        }

    }

    if (ascending) {
        document.writeln(i);
    }

}
