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
