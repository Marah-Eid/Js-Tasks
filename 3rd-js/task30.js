for (let i =1;i<=300;i++){

    let last= i%10;

    let num= Math.floor(i/10);
    let str=num.toString();
    let sum=0;


    for (let j=0 ; j< str.length;j++)
    {
        sum+= parseInt(str[j]);
    }


    if (sum ==last){
        document.writeln(i);
    }

}