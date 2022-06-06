/*  
    Name: Function 1 - hello world 
    Description: Make a simple function called greet that returns the most-famous "hello world!". 
*/

function greet() {
    return "hello world!";
}

/*
    Name: Can we divide it?
    Description: Your task is to create the functionisDivideBy (or is_divide_by) to check if an 
    integer number is divisible by both integers a and b.
*/

function isDivideBy(a,b,c) {
    return (a % b == 0) && (a % c == 0);
}

/*
    Name: Capitalization and Mutability
    Description: Your coworker was supposed to write a simple helper function to capitalize a string 
    (that contains a single word) before they went on vacation.
    Unfortunately, they have now left and the code they gave you doesn't work. Fix the helper function 
    they wrote so that it works as intended (i.e. make the first character in the string "word" upper case).
    Don't worry about numbers, special characters, or non-string types being passed to the function. 
    The string lengths will be from 1 character up to 10 characters, but will never be empty.
*/

function capitalizeWord(word) {
    return word[0].toUpperCase() + word.slice(1);
}

/*
    Name: Century From Year
    Description: The first century spans from the year 1 up to and including the year 100, the second 
    century - from the year 101 up to and including the year 200. Given a year, return the century it is in.
*/

function century(year) {
    return (year % 100 == 0) ? (year / 100) : Math.floor(year / 100) + 1;
}

/*
    Name: Convert a Number to a String!
    Description: We need a function that can transform a number into a string. 
    What ways of achieving this do you know?
*/

function numberToString(num) {
    return String(num);
}

/*
    Name: Convert a String to a Number!
    Description: We need a function that can transform a string into a number. What ways of achieving this do you know?
    Don't worry, all inputs will be strings, and every string is a perfectly valid representation of an integral number.
*/

var stringToNumber = function(str) {
    return Number(str);
}

/*
    Name: Convert to Binary
    Description: Given a non-negative integer n, write a function to_binary/ToBinary which 
    returns that number in a binary format.
*/

function toBinary(n) {
    return Number(n.toString(2));
}

/*
    Name: Even or Odd
    Description: Create a function that takes an integer as an argument and returns "Even" 
    for even numbers or "Odd" for odd numbers.
*/

function even_or_odd(number) {
    return (number % 2 == 0) ? "Even" : "Odd";
}

/*
    Name: Fake Binary
    Description: Given a string of digits, you should replace any digit below 5 with '0' and any 
    digit 5 and above with '1'. Return the resulting string. Input will never be an empty string.
*/

function fakeBin(x) {
    const arrX =  x.split("");
    const resArr = arrX.flatMap(item => (item < 5) ? 0 : 1);
    let resStr = resArr.toString();
    let result = resStr.split(',').join(''); 
    return result;
}

/*
    Name: Largest Square Inside A Circle
    Description: Determine the area of the largest square that can fit inside a circle with radius r.
*/

function areaLargestSquare(r) {
    return r * r * 2;
}