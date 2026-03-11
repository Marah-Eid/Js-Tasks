let age= Number(prompt("Enter ur age"));
let ageCategory;

if(age<13){
    ageCategory='Child';
}

else if (age>=13 && age<=19){
    ageCategory='Teenager';
}

else if(age>=20 && age<=59){
    ageCategory='Adult';
}

else{
    ageCategory='Senior';
}

alert(` You are an ${ageCategory}` );
console.log(` You are an ${ageCategory}`);
