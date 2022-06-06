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