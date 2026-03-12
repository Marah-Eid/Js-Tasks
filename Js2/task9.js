let n = (Number(prompt("Enter num")))
let res="";
let a=0;
let b=1;

for (let i=0 ; i<=n ; i++){
   res+= a+ "";
   let next = a+b;
   a=b;
   b=next;
    
}
document.writeln(res);

