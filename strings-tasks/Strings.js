let str1="Hello";
let str2="world";
document.writeln(str1.concat(" "+ str2));
document.writeln("<br>")

/**** */

let str3="JavaScript";
document.writeln(str3.length);
document.writeln("<br>")

/**** */

let str4="Programming";
document.writeln(str4[0]);
document.writeln("<br>")

/**** */

let str5="coding is fun";
document.writeln(str5.slice(0,7));
document.writeln("<br>")

/**** */

let str6="cat";
document.writeln(str6.replace('a','e'));
document.writeln("<br>")

/**** */
let str7="javascript";
document.writeln(str7.toUpperCase());
document.writeln("<br>")

/**** */
let str8="apple,banana,orange";
document.writeln(str8.split(","));
document.writeln("<br>")

/**** */
const arr = ["hello", "world"];
const result = arr.join(" ");
document.writeln(result); 
document.writeln("<br>")
/**** */
let str9="  hello world ";
document.writeln(str9.trim());
document.writeln("<br>")
/**** */
let str10="hello world";
document.writeln(str10.includes("world"));
document.writeln("<br>")
/**** */
const text = "hello";
const re = text.split("").reverse().join("");
document.writeln(re); 
document.writeln("<br>")
/**** */
/**** */
let str12 = "elephant";
let count = 0;

for (let char of str12) {
    if (char === "e") {
        count++;
    }
}
document.writeln(count); 
document.writeln("<br>")
/** */

let str13="racecar";
let str14=str13.split("").reverse().join("");
if (str13===str14){
    document.writeln("true");
}
document.writeln("<br>");
/** */

let input = "hello world";
let r = input.split(" ") .map(word => word.charAt(0).toUpperCase() + word.slice(1)) // 2. "H" + "ello"
  .join(" "); 
document.writeln(r); 
document.writeln("<br>");
/** */
let num =1234.5678 ;
document.writeln(num.toFixed(2));
document.writeln("<br>");
/** */
let str15="There are 3 apples and 2 oranges";
let numbers = str15.match(/\d+/g);
document.writeln(numbers);
document.writeln("<br>");
/** */
let email = "example@email.com";

let str16 = email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/);

document.writeln(str16 !== null);
document.writeln("<br>");
/** */
let str17="This is bad world";
document.writeln(str17.replace("bad","good"));
document.writeln("<br>");
/** */

let str = "aabbc";
let res = "";
for (let char of str) {
  if (!res.includes(char)) {
    res += char;
  }
}
document.writeln(res);
document.writeln("<br>");

/** */
let str18="hello";
document.writeln(str18.split("").sort().join(""));
document.writeln("<br>");

/** */
let str19="listen";
let str20="silent";
let flag=true;
for (let ch of str20){

    if (!str19.includes(ch)){
    flag=false;
    }
}
document.writeln(flag);
document.writeln("<br>");

/** */
let str21="The quick brown fox";
document.writeln(str21.split(" ").reverse().join(" "));
document.writeln("<br>");
/** */

let str22 ="Web development is fascinating";
let longest;
longest=str22.split(" ")[0];

for (let word of str22.split(" ")){
    if(word.length>longest.length){
        longest=word;
    }
}
document.writeln(longest);
document.writeln("<br>");
/** */
let str23 = "A man, a plan, a canal, Panama!";

let cleaned = str23.toLowerCase().replace(/[^a-z0-9]/g, "");

document.writeln(cleaned === cleaned.split("").reverse().join(""));
document.writeln("<br>");
/** */
let str24 = "mississippi";
let freq = {};
for (let char of str24) {
    freq[char] = (freq[char] || 0) + 1;}
console.log(freq); 
/** */

let str25= "Hello world";

let ree = str25
  .replace(/a/gi, "1")
  .replace(/e/gi, "2")
  .replace(/i/gi, "3")
  .replace(/o/gi, "4")
  .replace(/u/gi, "5");

document.writeln(ree);
document.writeln("<br>");
/** */
let str26="JavaScript is fun";
document.writeln(str26.startsWith("Java"))
document.writeln("<br>");
/** */
let str27="image.png";
document.writeln(str27.endsWith("png"))
document.writeln("<br>");
/** */
document.writeln("ha".repeat(3));
document.writeln("<br>");
/** */
document.writeln("Hello World".indexOf("o"));


















