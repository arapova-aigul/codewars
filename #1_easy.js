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
