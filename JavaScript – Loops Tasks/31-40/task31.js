/*Write a program that prints numbers between 1 and 200 where the
 sum of digits is greater than 10.*/
 for (let i =1; i<=200;i++){

    let sum=0;
    let num= i.toString();
    for (let j=0 ;j< num.length ; j++){
        sum += parseInt(num[j]);

    }
    if(parseInt(sum)>10){
    document.writeln(i)
}
 }