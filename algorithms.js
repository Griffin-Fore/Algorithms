// The Basic 13

// Print 1-255

    // function print1to255() {
    //     for(let i = 1; i <= 255; i++) {
    //         console.log(i)
    //     }
    // }

    // console.log(print1to255())

// Print Sum 0-255
// Print integers from 0 to 255, and with each integer print the sum so far.

    // function sum0to255() {
    //     var sum = 0
    //     for(let i = 0; i <= 255; i++) {
    //         console.log(i);
    //         sum += i
    //         console.log(sum)
    //     }
    // }

    // console.log(sum0to255())

// Find and Print Max
// Given an array, find and print its largest element.

    // function findAndPrintMax(arr) {
    //     if(arr.length == 0) {
    //         return "Invalid array"
    //     }
    //     if(arr.length == 1) {
    //         return arr[0]
    //     }
    //     let max = arr[0]
    //     for(let i = 0; i < arr.length; i++) {
    //         if(arr[i] > max) {
    //             max = arr[i]
    //         }
    //     }
    //     return max
    // }

    // console.log(findAndPrintMax([1,2,3]))
    // console.log(findAndPrintMax([3,2,1]))
    // console.log(findAndPrintMax([1]))

// Array with Odds
// Create an array with all the odd integers between 1 and 255 (inclusive).

    // function printArrayWithOdds1to255() {
    //     let arr = []
    //     for(let i = 1; i <= 255; i+=2) {
    //         arr.push(i)
    //     }
    //     return arr
    // }

    // console.log(printArrayWithOdds1to255())

// Greater Than Y
// Given an array and a value Y, count and print the number of array values greater than Y.

    // function returnAllValuesGreaterThanY(arr,y) {
    //     let count = 0
    //     for(let i = 0; i < arr.length; i++) {
    //         if(arr[i] > y) {
    //             count++
    //         }
    //     }
    //     return count
    // }

    // console.log(returnAllValuesGreaterThanY([1,2,3],4))
    // console.log(returnAllValuesGreaterThanY([1,2,3],0))

// Max, Min, Average
// Given an array, print the max, min and average values for that array.

    // function maxMinAvg(arr) {
    //     let maxMinAvgArr = []
    //     let min = arr[0]
    //     for(let i = 0; i < arr.length; i++) {
    //         if(arr[i] < min) {
    //             min = arr[i]
    //         }
    //     }
    //     maxMinAvgArr.push(min)
        
    //     let max = arr[0]
    //     for(let ii = 0; ii < arr.length; ii++) {
    //         if(arr[ii] > max) {
    //             max = arr[ii]
    //         }
    //     }
    //     maxMinAvgArr.push(max)

    //     let sum = 0
    //     for(let iii = 0; iii < arr.length; iii++) {
    //         sum += arr[iii]
    //     }
    //     let avg = sum / arr.length
    //     maxMinAvgArr.push(avg)

    //     return maxMinAvgArr
    // }

    // console.log(maxMinAvg([1,2,3]))
    // console.log(maxMinAvg([3,2,1]))
    // console.log(maxMinAvg([0,0,0]))

// Swap String For Array Negative Values
// Replace any negative array values with 'Dojo'​.

    // function negativesToDojo(arr) {
    //     for(let i = 0; i < arr.length; i++) {
    //         if(arr[i] < 0) {
    //             arr[i] = "Dojo"
    //         }
    //     }
    //     return arr
    // }

    // console.log(negativesToDojo([1,-1,2,-2,3,-3]))

// Print Odds 1-255
// Print all odd integers from 1 to 255.

    // function printOdds1to255() {
    //     for(let i = 1; i <= 255; i+=2) {
    //         console.log(i)
    //     }
    // }

    // console.log(printOdds1to255())

// Iterate and Print Array
// Iterate through a given array, printing each value.

    // function printArray(arr) {
    //     for(let i = 0; i < arr.length; i++) {
    //         console.log(arr[i])
    //     }
    // }

    // console.log(printArray([1,2,3,4,5]))
    // console.log(printArray([5,4,3,2,1]))

// Get and Print Average
// Analyze an array’s values and print the average.

    // function printArrayAverage(arr) {
    //     let sum = 0
    //     for(let i = 0; i < arr.length; i++) {
    //         sum += arr[i]
    //     }
    //     return sum / arr.length
    // }

    // console.log(printArrayAverage([1,2,3]))
    // console.log(printArrayAverage([3,2,1]))
    // console.log(printArrayAverage([0,2,1]))

// Square the Values
// Square each value in a given array, returning that same array with changed values.

    // function squareArrayValues(arr) {
    //     for(let i = 0; i < arr.length; i++) {
    //         arr[i] *= arr[i]
    //     }
    //     return arr
    // }

    // console.log(squareArrayValues([1,2,3]))
    // console.log(squareArrayValues([-3,-2,-1]))

// Zero Out Negative Numbers
// Return the given array, after setting any negative values to zero.

    // function negativesToZero(arr) {
    //     for(let i = 0; i < arr.length; i++) {
    //         if(arr[i] < 0) {
    //             arr[i] = 0
    //         }
    //     }
    //     return arr
    // }

    // console.log(negativesToZero([1,-1,2,-2,3,-3]))
    // console.log(negativesToZero([-3,3,-2,2,-1,1]))

// Shift Array Values
// Given an array, move all values forward by one index, dropping the first and leaving a '0'​ value at the
// end.

    // function shiftArrayValuesLeft(arr) {
    //     for(let i = 0; i < arr.length; i++) {
    //         arr[i] = arr[i+1]
    //     }
    //     arr[arr.length - 1] = 0
    //     return arr
    // }

    // console.log(shiftArrayValuesLeft([1,2,3,4,5]))
    // console.log(shiftArrayValuesLeft([5,4,3,2,1]))

// Sigma
// Implement a function sigma(num)​ that, given a
// number, returns the sum of all positive integers
// from 1 up to number (inclusive). Ex.: sigma(3)
// = 6 (or 1+2+3); sigma(5)​ = 15 (or 1+2+3+4+5).

    // T-   I am asked to create a function that returns a sum of all the positive integers up to the given number
    // H-   I need to create a value for a sum and create a for loop that adds each integer to that sum
    // I-   I need to create a sum with a value of zero
    //      I need to create a for loop that iterates by 1 and starts at zero and ends after the value equals the param
    //      I need to loop through and add the current loop value to the sum
    //      I need to return that sum

    // K -  If the param is negative
    //      If the param is zero

    // function Sigma(sig) {
    //     if(sig < 0) {
    //         return "Invalid number: negative"
    //     }
    //     if(sig == 0) {
    //         return 0
    //     }
    //     let sum = 0;
    //     for(let i = 0; i <= sig; i++) {
    //         sum += i
    //     }
    //     return sum
    // }

    // console.log(Sigma(-1));
    // console.log(Sigma(0));
    // console.log(Sigma(3));

// Factorial
// Write a function factorial(num)​ that, given a
// number, returns the product (multiplication) of all
// positive integers from 1 up to number (inclusive).
// For example, factorial(3)​ = 6 (or 1 * 2 * 3);
// factorial(5)​ = 120 (or 1 * 2 * 3 * 4 * 5).

    // T-   I need to take a param and return the value of all th integers multiplied from 1 to that param
    // H-   I need to create a product and multiply all the numbers from 1 until the sum
    // I-   I need to create a product
    //      I need to create a for loop starting at 1, ending after the param, and iterating by 1
    //      In each loop I need to multiply the current value by the product
    //      I need to return the product

    // function Factorial(param) {
    //     if(param < 1) {
    //         return "Invalid param: less than 1"
    //     }
    //     let product = 1
    //     for(let i = 1; i <= param; i++) {
    //         product *= i
    //     }
    //     return product
    // }

    // console.log(Factorial(-1));
    // console.log(Factorial(0));
    // console.log(Factorial(1));
    // console.log(Factorial(3));

// Threes and Fives
// Create function ThreesFives()​ that adds each value from 100 and 4000000 (inclusive) if that value
// is evenly divisible by 3 or 5 but not both. Display the final sum in the console.

    // T-   I need to create a sum of all the values divisible by either 3 or 5 between 100 and 400k
    // I-   I need to create a sum with a value of zero
    //      I need to create a for loop starting at 100 and ending at 400k and iterating by 1
    //      If the current value is divisible by either 3 or 5, but not both, I add the value to the sum
    //      I return the sum

    // function ThreesFives() {
    //     let sum = 0
    //     for(let i = 100; i <= 400000; i++) {
    //         if((i % 3 == 0) || (i % 5 == 0)) {
    //             sum += i
    //         }
    //     }
    //     return sum
    // }

    // console.log(ThreesFives())

// Second:​ Change your function to make a BetterThreesFives(start,end)​where start and end
// values are customizable. You can think of the above ThreesFives()​ function as
// BetterThreesFives(100,4000000)​.

    // function BetterThreesFives(start,end) {
    //     let sum = 0
    //     for(let i = start; i <= end; i++) {
    //         if((i % 3 == 0)||(i % 5 == 0)) {
    //             sum += i
    //         }
    //     }
    //     return sum
    // }

    // console.log(BetterThreesFives(100,400000))

// Generate Coin Change
// Implement generateCoinChange(cents)​ that accepts a parameter for the number of cents, and
// computes how to represent that amount with the smallest number of coins. Console.log the result.

    // T-   I'm supposed to take a number of cents, and return the smallest number of coins from those cents
    // I-   I want to create a total, and counts for quarters, dimes, nickels and pennies
    //      Then I want to create a while loop, and while the value is greater than or equal to 25, add 1 to the quarters count,
    //      and subtract 25 from the total
    //      Then when the value is less than 25, create a while loop for greater than or equal to 10,
    //      add 1 to the dimes count, and subtract 10 from the total
    //      Then create a while loop for greater than or equal to 5, 
    //      add 1 to the nickels count, and subtract 5 from the total
    //      then create a while loop for greater than or equal to 1,
    //      add one to the pennies count, and subtract 1 from the total\
    //      then return all the counts

    // function generateCoinChange(cents) {
    //     let total = cents
    //     let quarters = 0
    //     let dimes = 0
    //     let nickels = 0
    //     let pennies = 0
    //     while(total >= 25) {
    //         total -= 25;
    //         quarters ++;
    //     }
    //     while(total >= 10) {
    //         total -= 10;
    //         dimes ++;
    //     }
    //     while(total >= 5) {
    //         total -= 5;
    //         nickels ++;
    //     }
    //     while(total >= 1) {
    //         total --;
    //         pennies ++;
    //     }
    //     return `Total: ${quarters} quarters, ${dimes} dimes, ${nickels} nickels, ${pennies} pennies`
    // }

    // console.log(generateCoinChange(100))
    // console.log(generateCoinChange(105))
    // console.log(generateCoinChange(119))

// Statistics to Doubles
// Implement a ‘die’ that randomly returns an
// integer between 1 and 6 inclusive. Roll a pair of
// these dice, tracking the statistics until doubles
// are rolled. Display the number of rolls, min, max,
// and average.

    // T-   I need to create a dice roller that takes two rolls, and tracks until the two rolls ar the same,
    //      I need to return the minimum, maximum and average roll
    // I-   I want to create an empty array, and I want to create two empty values a and b, and a while loop for while a and b
    //      aren't the same
    //      I want to create two random numbers and assign them the value of a and ba, and add them to the array
    //      then when the while loop exits, I want to use two for loops to get the minimum and maximum values from the array,
    //      then also get the average dice value
    //      The number or rolls is the length of the array divided by 2
    //      then I want to return the min, max, average, and number of rolls

    // function doubleDiceRoll() {
    //     let a = Math.floor(Math.random() * 6) + 1
    //     let b = Math.floor(Math.random() * 6) + 1
    //     let rolls = [a,b]
    //     while(a != b) {
    //         a = Math.floor(Math.random() * 6) + 1
    //         b = Math.floor(Math.random() * 6) + 1
    //         rolls.push(a)
    //         rolls.push(b)
    //     }

    //     let min = rolls[0]
    //     for(let i = 0; i < rolls.length; i++) {
    //         if(rolls[i] < min) {
    //             min = rolls[i]
    //         }
    //     }

    //     let max = rolls[0]
    //     for(let ii = 0; ii < rolls.length; ii++) {
    //         if(rolls[ii] > max) {
    //             max = rolls[ii]
    //         }
    //     }

    //     let sum = 0
    //     for(let iii = 0; iii < rolls.length; iii++) {
    //         sum += rolls[iii]
    //     }
    //     avg = sum / rolls.length

    //     numberOfRolls = rolls.length / 2

    //     doubles = [rolls[rolls.length - 2], rolls[rolls.length - 1]]

    //     return `Min: ${min}, Max: ${max}, Avg: ${avg}, Number Of Rolls Until Doubles: ${numberOfRolls}, Doubles: ${doubles}`
    // }

    // console.log(doubleDiceRoll())

// Sum To One Digit
// Implement a function sumToOne(num)​ that,
// given a number, sums that number’s digits
// repeatedly until the sum is only one digit. Return
// that final one digit result.

    // T-   I have to add the individual digits of a number until there is one digit left
    // I-   I want to split the number into a string, then while the digits are more than 1, I loop
    //      Inside the while I want to create a sum, then
    //      I want to for loop add each digit to the next, then when all the digits are added together, repeat the 
    //      while loop until it's done

    // function sumToOne(num) {
    //     let numString = num.toString()
    //     let sum = 0
    //     while(num > 9) {
    //         sum = 0
    //         for(let i = 0; i < numString.length; i++) {
    //             sum += Number(numString[i])
    //         }
    //         num = sum
    //         numString = num.toString()
    //     }
    //     return sum
    // }

    // console.log(sumToOne(1514))

// Fibonacci
// Implement the Fibonacci function, a famous mathematical equation that generates a numerical
// sequence such that each number is the sum of the previous two. The Fibonacci numbers at index 0
// and 1, coincidentally, have values of 0 and 1. Your function should accept an argument of which
// Fibonacci number.
// Examples: fibonacci(2)​ = 1, fibonacci(3)​ = 2, fibonacci(4)​ = 3, fibonacci(5)​ = 5, etc.

    // T-   I need to take in a place in the fibonacci sequence, and return the value at that place
    // I-   I want to create an array with the starting values of one and two, and
    //      create a for loop ending with the given place, with three runners: the first two having the values of the first 
    //      and second array values, and the third's value the first two runners combined
    //      I want to return that third value
    // K-   If the value is the first or second place, return that value

    // function fibonacci(place) {
    //     if(place == 0) {
    //         return 0
    //     }
    //     if(place == 1) {
    //         return 1
    //     }
    //     let fibonArr = [0,1]
    //     for(let i = 1; i < place; i++) {
    //         fibonArr[i+1] = fibonArr[i-1] + fibonArr[i]
    //     }
    //     return fibonArr[fibonArr.length-1]
    // }

    // console.log(fibonacci(5))

// Implement a function that accepts two non-negative integers as arguments. Function lastDigitAtoB(a,
// b)​ should return the last digit of the first number (a) raised to an exponent of the second number (b).
// Examples: given (3, 4)​, you should return 1​ (the last digit of 81: 3 * 3 * 3 * 3). Given (12, 5)​, return
// 2​ (the least significant digit of 248832, which is 12 * 12 * 12 * 12 * 12).

    // function lastDigitOfPower(a,exp) {
    //     let power = Math.pow(a,exp)
    //     let digitString = power.toString()
    //     let lastDigit = digitString[digitString.length - 1]
    //     return lastDigit
    // }

    // console.log(lastDigitOfPower(3,4))
    // console.log(lastDigitOfPower(3,2))

