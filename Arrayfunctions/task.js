function firstAndLast(arr) {
  return [arr[0], arr[arr.length - 1]];
}

document.writeln( firstAndLast  ([1,2,3,4,5])  );
document.writeln("<br>");

/** */

function removeMiddle(arr) {
  let middle = Math.floor(arr.length / 2);
  arr.splice(middle, 1);
  return arr;
}
document.writeln(removeMiddle([1,2,3,4,5]));
document.writeln("<br>");

/** */
function swapFirstLast(arr) {
  let temp = arr[0];
  arr[0] = arr[arr.length - 1];
  arr[arr.length - 1] = temp;
  return arr;
}

document.writeln(swapFirstLast([1,2,3,4,5]));
document.writeln("<br>");

/** */
function insertAtMiddle(arr, value) {
    let middle = Math.floor(arr.length / 2);
    arr.splice(middle, 0, value);
    return arr;
}

let result = insertAtMiddle([1,2,3,4], 10);

document.writeln(result);
document.writeln("<br>");

/** */

function duplicateArray(arr){
    return arr.concat(arr);
}

document.writeln(duplicateArray([1,2,3]));
document.writeln("<br>");

/** */
function removeDuplicates(arr){
    let resultt = [];

    for(let num of arr){
        if(!resultt.includes(num)){
            resultt.push(num);
        }
    }

    return resultt;
}

let output = removeDuplicates([1,2,2,3,4,4,5]);

document.writeln(output);
document.writeln("<br>");

/** */
function findSecondLargest(arr){
    arr.sort((a,b) => b-a);
    return arr[1];
}

let ret = findSecondLargest([4,9,2,10,6]);

document.writeln(ret);
document.writeln("<br>");

/** */
function findSecondSmallest(arr){
    arr.sort((a,b) => a-b);
    return arr[1];
}

let rese = findSecondSmallest([4,9,2,10,6]);

document.writeln(rese);
document.writeln("<br>");

/** */
function removeGreaterThan(arr, value){
    return arr.filter(num => num < value);
}

let rss = removeGreaterThan([10,5,20,3,8], 10);

document.writeln(rss);
document.writeln("<br>");

/** */
function removeLessThan(arr, value){
    return arr.filter(num => num >= value);
}

let resee = removeLessThan([10,5,20,3,8],10);

document.writeln(resee);
document.writeln("<br>");

/** */
function countOccurrences(arr, value){
    return arr.filter(num => num === value).length;
}

let rlt = countOccurrences([1,2,3,2,4,2],2);

document.writeln(rlt);
document.writeln("<br>");

/** */
function arrayIntersection(arr1, arr2){
    return arr1.filter(num => arr2.includes(num));
}

let ar = arrayIntersection([1,2,3,4], [3,4,5,6]);

document.writeln(ar);
document.writeln("<br>");

/** */
function arrayDifference(arr1, arr2){
    return arr1.filter(num => !arr2.includes(num));
}

let boo = arrayDifference([1,2,3,4], [3,4]);

document.writeln(boo);
document.writeln("<br>");

/** */

function uniqueMerge(arr1, arr2){
    let merged = arr1.concat(arr2);
    let result = [];

    for(let num of merged){
        if(!result.includes(num)){
            result.push(num);
        }
    }

    return result;
}

let out = uniqueMerge([1,2,3], [3,4,5]);

document.writeln(out);
document.writeln("<br>");

/** */

function removeNegativeNumbers(arr){
    return arr.filter(num => num >= 0);
}

let mrh = removeNegativeNumbers([5,-2,10,-3,7]);

document.writeln(mrh);
document.writeln("<br>");

/** */
function wordsLongerThan(arr, length){
    return arr.filter(word => word.length > length);
}

let roo = wordsLongerThan(["alex","mohammad","ali","sara"], 4);

document.writeln(roo);
document.writeln("<br>");

/** */
function countLetterInWords(arr, letter){
    return arr.filter(word => word.includes(letter)).length;
}

let rm = countLetterInWords(["apple","banana","car","dog"], "a");

document.writeln(rm);
document.writeln("<br>");

/** */
function removeShortWords(arr, length){
    return arr.filter(word => word.length >= length);
}

let m = removeShortWords(["apple","cat","banana","dog"],3);

document.writeln(m);
document.writeln("<br>");

/** */
function findLongestWord(arr){
    arr.sort((a,b) => b.length - a.length);
    return arr[0];
}

let y = findLongestWord(["apple","banana","cat","elephant"]);

document.writeln(y);
document.writeln("<br>");

/** */
function findshortestWord(arr){
    arr.sort((a,b) => a.length - b.length);
    return arr[0];
}

let ye = findshortestWord(["apple","banana","cat","elephant"]);

document.writeln(ye);
document.writeln("<br>");

/** */
function sortByLength(arr) {
  return arr.sort((a, b) => a.length - b.length);
}
document.writeln(sortByLength(["apple", "hi", "banana"]));
document.writeln("<br>");

/** */
function removeEverySecond(arr) {
  return arr.filter((num) => num % 2 === 0);
}
document.writeln(removeEverySecond([1,2,3,4,5,6]));
document.writeln("<br>");

/** */
function sumEvenNumbers(arr) {
  return arr
    .filter(num => num % 2 === 0)
    .reduce((sum, num) => sum + num, 0);
}
document.writeln(sumEvenNumbers([1,2,3,4,5,6]));
document.writeln("<br>");

/** */
function sumoddindex(arr) {
  return arr
    .filter((num, index) => index % 2 !== 0)
    .reduce((sum, num) => sum + num, 0);
}
document.writeln(sumoddindex([1,2,3,4,5,6]));
document.writeln("<br>");
/** */

function reverseWithoutReverse(arr) {
  let result = [];

  for (let num of arr) {
    result.unshift(num);
  }

  return result;
}
document.writeln(reverseWithoutReverse([1,2,3,4,5,6]));
document.writeln("<br>");
/** */
function findMissingNumber(arr) {
  arr.sort((a, b) => a - b);

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== i + 1) {
      return i + 1;
    }
  }

  return 0;
}
document.writeln(findMissingNumber([1,2,3,5,6]));
document.writeln("<br>");
/** */
function pairSum(arr, target) {
  for (let item of arr) {
    if (arr.includes(target - item)) {
      return [item, target - item];
    }
  }
}
document.writeln(pairSum([2, 7, 11, 15], 9));
document.writeln("<br>");
/** */
function rotateArray(arr, steps) {
  

  let firstPart = arr.slice(arr.length - steps);
  let secondPart = arr.slice(0, arr.length - steps);

  return firstPart.concat(secondPart);
}document.writeln(rotateArray([1, 2, 3, 4, 5], 2));
document.writeln("<br>");
/** */
function chunkArray(arr, size) {
  let result = [];

  for (let i = 0; i < arr.length; i += size) {
    result.push(arr.slice(i, i + size));
  }

  return result;
}
document.writeln(chunkArray([1,2,3,4,5,6], 2));
document.writeln("<br>");


function groupByLength(arr) {
  let result = {};

  for (let word of arr) {
    let len = word.length;
    result[len] = result[len] || [];
    result[len].push(word);
  }

  return result;
}

let outut = groupByLength(["hi","cat","dog","apple"]);

for (let key in outut) {
  document.writeln(key + ": [" + outut[key].join(", ") + "]<br>");
}