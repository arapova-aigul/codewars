/*
    Name: Take an Arrow to the knee, Functionally
    Come here to practice the Arrow style functions Not much else to say good luck!
    You will be given an array of numbers which can be used using the String.fromCharCode() (JS) 
    method to convert the number to a character. It is recommended to map 
    over the array of numbers and convert each number to the corresponding ascii character.
    These are example of how to convert a number to an ascii Character:
    Javascript => String.fromCharCode(97) // a
*/

var ArrowFunc = function(arr) {
    return arr.map(x => String.fromCharCode(x)).join(''); 
};

/*
    Name: Merge two sorted arrays into one
    Description: You are given two sorted arrays that both only contain integers. 
    Your task is to find a way to merge them into a single one, sorted in asc order. 
    Complete the function mergeArrays(arr1, arr2), where arr1 and arr2 are the original sorted arrays.
    You don't need to worry about validation, since arr1 and arr2 must be arrays with 0 or more Integers. 
    If both arr1 and arr2 are empty, then just return an empty array.
    Note: arr1 and arr2 may be sorted in different orders. Also arr1 and arr2 may have same integers. 
    Remove duplicated in the returned result.
*/

function mergeArrays(arr1, arr2) {
    let arr3 = arr1.slice();
    for (let key in arr2) {
      arr3.push(arr2[key]);
    }
    arr3 = Array.from(new Set(arr3)); // remove duplicated
    return arr3.sort(function(a, b) { return a - b; }); // sorted
}

/*
    Name: 16+18=214
    Description: For this kata you will have to forget how to add two numbers. In simple terms, our method does 
    not like the principle of carrying over numbers and just writes down every number it calculates.
    You may assume both integers are positive integers.
*/

function add(num1, num2) {
    const arrNum1 = Array.from(String(num1.toString()), Number); 
    const arrNum2 = Array.from(String(num2.toString()), Number); 
    let result = '';
    
    while (arrNum1.length > arrNum2.length) arrNum2.unshift(0);  
    while (arrNum1.length < arrNum2.length) arrNum1.unshift(0);    
    
    if (arrNum2.length == arrNum1.length) {
      arrNum2.forEach((element,index) => {
        result = result + Number(element + arrNum1[index]);
      });
    }
    return Number(result);
}