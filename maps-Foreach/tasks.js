// 1
function doubleNumbers(arr){
    return arr.map(n => n * 2);
}

// 2
function numbersToStrings(arr){
    return arr.map(n => n.toString());
}

// 3
function upperCaseNames(arr){
    return arr.map(name => name.toUpperCase());
}

// 4
function addFive(arr){
    return arr.map(n => n + 5);
}

// 5
function getNames(arr){
    return arr.map(obj => obj.name);
}

// 6
function wordLengths(arr){
    return arr.map(word => word.length);
}

// 7
function valTimesIndex(arr){
    return arr.map((val, index) => val * index);
}

// 8
function makeUsernames(arr){
    return arr.map(obj => "@" + obj.username);
}

// 9
function squareNumbers(arr){
    return arr.map(n => n * n);
}

// 10
function firstLetters(arr){
    return arr.map(word => word[0]);
}

// 11
function sumNumbers(arr){
    let sum = 0;
    arr.forEach(n => sum += n);
    return sum;
}

// 12
function countEven(arr){
    let count = 0;
    arr.forEach(n => {
        if(n % 2 === 0) count++;
    });
    return count;
}

// 13
function timesTen(arr){
    return arr.map(n => n * 10);
}

// 14
function addAdult(arr){
    return arr.map(obj => ({
        ...obj,
        adult: obj.age >= 18
    }));
}

// 15
function addTax(arr){
    return arr.map(price => price + 10);
}

// 16
function countBig(arr){
    let count = 0;
    arr.forEach(n => {
        if(n > 50) count++;
    });
    return count;
}

// 17
function labelNumbers(arr){
    return arr.map(n => "Number: " + n);
}

// 18
function productNames(arr){
    return arr.map(obj => obj.product);
}

// 19
function addIndex(arr){
    return arr.map((n, i) => n + i);
}

// 20
function isEvenArray(arr){
    return arr.map(n => n % 2 === 0);
}