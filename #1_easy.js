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
};

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

/*
    Name: Number of Decimal Digits
    Description: Determine the total number of digits in the integer (n>=0) given as input to the function. 
    For example, 9 is a single digit, 66 has 2 digits and 128685 has 6 digits. Be careful to avoid 
    overflows/underflows. All inputs will be valid.
*/

function digits(n) {
    return n.toString().length;
}

/*
    Name: Opposite number
    Description: Very simple, given an integer or a floating-point number, find its opposite.
*/

function opposite(number) {
    return - number;
}

/*
    Name: Perimeter sequence
    Description: The first three stages of a sequence are shown.
*/

function perimeterSequence(a,n) {
    return 4 * a * n;
}

/*
    Name: Remove First and Last Character
    Description: It's pretty straightforward. Your goal is to create a function that removes 
    the first and last characters of a string. You're given one parameter, the original string. 
    You don't have to worry with strings with less than two characters.
*/

function removeChar(str) {
    return str.substr(1, str.length-2);
}

/*
    Name: Remove String Spaces
    Description: Simple, remove the spaces from the string, then return the resultant string.
*/

function noSpace(x) {
    return x.split(" ").join("");
}

/*
    Name: String ends with?
    Description: Complete the solution so that it returns true if the first argument(string) 
    passed in ends with the 2nd argument (also a string).
*/

function solution(str, ending) {
    const index = str.length - ending.length;
    return str.includes(ending,index);
}

/*
    Name: Simple multiplication
    Description: This kata is about multiplying a given number by eight if it is an even number 
    and by nine otherwise.
*/

function simpleMultiplication(number) {
    return (number % 2 == 0) ? number * 8 : number * 9;
}

/*
    Name: String repeat
    Description: Write a function called repeatStr which repeats the given string string 
    exactly n times.
*/

function repeatStr(n, s) {
    let res = '';
    while (n > 0) {
      res = res + s;
      n--;
    }
    return res;
}

/*
    Name: Student's Final Grade
    Description: Create a function finalGrade, which calculates the final grade of a student depending 
    on two parameters: a grade for the exam and a number of completed projects.
    This function should take two arguments: exam - grade for exam (from 0 to 100); 
    projects - number of completed projects (from 0 and above);
    This function should return a number (final grade). There are four types of final grades:
    100, if a grade for the exam is more than 90 or if a number of completed projects more than 10.
    90, if a grade for the exam is more than 75 and if a number of completed projects is minimum 5.
    75, if a grade for the exam is more than 50 and if a number of completed projects is minimum 2.
    0, in other cases
*/

function finalGrade(exam, projects) {
    if (exam > 90 || projects > 10) return 100;    
    else if (exam > 75 && projects >= 5) return 90;
    else if (exam > 50 && projects >= 2) return 75;
    else return 0;
}

/*
    Name: Switch it Up!
    Description: When provided with a number between 0-9, return it in words.
    Input :: 1 Output :: "One".
    If your language supports it, try using a switch statement.
*/

function switchItUp(number) {
    switch(number) {
        case 0 : return "Zero"
        case 1 : return "One"
        case 2 : return "Two"
        case 3 : return "Three"
        case 4 : return "Four"
        case 5 : return "Five"
        case 6 : return "Six"
        case 7 : return "Seven"
        case 8 : return "Eight"
        case 9 : return "Nine"
    }
}

/*
    Name: Thinkful - Logic Drills: Traffic light
    Description: You're writing code to control your town's traffic lights. 
    You need a function to handle each change from green, to yellow, to red, and then to green again.
    Complete the function that takes a string as an argument representing the current state of the light 
    and returns a string representing the state the light should change to.
    For example, update_light('green') should return 'yellow'.
*/

function updateLight(current) {
    if (current == 'green') return 'yellow';
    if (current == 'yellow') return 'red';
    if (current == 'red') return 'green'
}

/*
    Name: Third Angle of a Triangle
    Description: You are given two interior angles (in degrees) of a triangle.
    Write a function to return the 3rd.
    Note: only positive integers will be tested.
*/

function otherAngle(a, b) {
    return 180 - a - b;
}

/*
    Name: Transportation on vacation
    Description: After a hard quarter in the office you decide to get some rest on a vacation. 
    So you will book a flight for you and your girlfriend and try to leave all the mess behind you.
    You will need a rental car in order for you to get around in your vacation. The manager of the car 
    rental makes you some good offers.
    Every day you rent the car costs $40. If you rent the car for 7 or more days, you get $50 off your total. 
    Alternatively, if you rent the car for 3 or more days, you get $20 off your total.
    Write a code that gives out the total amount for different days(d).
*/

function rentalCarCost(d) {
    if (d >= 7) return d * 40 - 50;
    else if (d >= 3) return d * 40 - 20;
    else return d * 40;
}

/*
    Name: Type of sum
    Description: Return the type of the sum of the two arguments
*/

function typeOfSum(a, b) {
    return typeof(a + b);
}

/*
    Name: Will you make it?
    Description: You were camping with your friends far away from home, but when it's time to go back, 
    you realize that your fuel is running out and the nearest pump is 50 miles away! 
    You know that on average, your car runs on about 25 miles per gallon. There are 2 gallons left. 
    Considering these factors, write a function that tells you if it is possible to get to the pump or not. 
    Function should return true if it is possible and false if not. The input values are always positive.
*/

const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
    return distanceToPump / mpg <= fuelLeft;
};