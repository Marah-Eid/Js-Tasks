for (let i=1; i<=30;i++){
    if(i%3==0){
    document.writeln("Fizz")
    }
    else if(i%5==0){
    document.writeln("Buzz")
    }
    else if(i%3==0 && i%5==0){
    document.writeln("FizzBuzz")
    }
    else{
        document.writeln(i);
    }

}
