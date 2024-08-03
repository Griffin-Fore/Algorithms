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

// Clock Hand Angles
// Traditional clocks are increasingly uncommon, but most can still read rotating hands of hours, minutes,
// and seconds.
// Create function clockHandAngles(seconds)​ that, given the number of seconds since 12:00:00, will
// print the angles (in degrees) of the hour, minute and second hands. As a quick review, there are 360
// degrees in a full arc rotation. Treat “straight-up” 12:00:00 as 0 degrees for all hands.

    // T-   I have to print the angles in degrees for the second, minute and hour hands of a given time
    // I-   I want to take every 3600 seconds and set it as one hour, then repeatedly subtract 12 hours to get the hours on the clock,
    //      Then I want to take every remaining 60 seconds and set those as the minutes, then I want to take what's less than
    //      60 seconds and set that as the second hand

    // function clockHandAngles(seconds) {
    //     let initialSeconds = seconds
    //     let hours = 0
    //     let minutes = 0
    //     while(seconds >= 3600) {
    //         hours++;
    //         seconds -= 3600;
    //     }
    //     while(seconds >= 60) {
    //         minutes++;
    //         seconds -= 60;
    //     }
    //     while(hours >= 12) {
    //         hours-=12
    //     }
    //     let hoursDegrees = hours * 30;
    //     let minutesDegrees = minutes * 6
    //     let secondsDegrees = seconds * 6
    //     return `Clock Hand Angles: Initial seconds: ${initialSeconds}, Hours: ${hours}, Hour angle: ${hoursDegrees},
    //     Minutes: ${minutes}, Minute angle: ${minutesDegrees}, Seconds: ${seconds}, Seconds angle: ${secondsDegrees}`
    // }

    // console.log(clockHandAngles(43200))

// PushFront
// Given an array and an additional value, insert this
// value at the beginning of the array. Do this
// without using any built-in array methods.

    // T-   I have to push a value to the front of an array
    // I-   I want to increast the length of the array by one, and then loop backwards through the array,
    //      setting the value of each index to the previous value
    //      I then want to set the first index to the param value

    // function pushFront(arr, val) {
    //     arr[arr.length] = 0
    //     for(let i = arr.length - 1; i > 0; i--) {
    //         arr[i] = arr[i-1]
    //     }
    //     arr[0] = val
    //     return arr
    // }

    // console.log(pushFront([1,2,3],4))

// PopFront
// Given an array, remove and return the value at
// the beginning of the array. Do this without using
// any built-in array methods except pop()​.

    // T-   I need to remove the first value of an array and return that value
    // I-   I want to assign a variable the value of the first array index
    //      Then I want to loop forwards through the array and assign each index to the next value
    //      Then I want to remove the last value
    
    // function popFront(arr) {
    //     let firstVal = arr[0]
    //     for(let i = 0; i < arr.length - 1; i++) {
    //         arr[i] = arr[i+1]
    //     }
    //     arr.pop()
    //     return `Array: ${arr}, First Value: ${firstVal}`
    // }

    // console.log(popFront([1,2,3,4]))

// InsertAt
// Given an array, index, and additional value, insert
// the value into the array at the given index. Do this
// without using built-in array methods. You can
// think of PushFront(arr,val)​ as equivalent to
// InsertAt(arr,0,val)​.

    // T-   I want to take an array, an index, and a value, and insert that value at that index
    // I-   I want to add one to the length of the array,
    //      Then I want to loop backwards through the array until the given index, setting each index to the value of the previous,
    //      then I want to set the given index to the given value, then I want to return the array
    // Edge-If the index is out of bounds
    
    // function insertAt(arr,index,val) {
    //     arr[arr.length] = 0
    //     for(let i = arr.length - 1; i >= index; i--) {
    //         arr[i] = arr[i-1]
    //     }
    //     arr[index] = val
    //     return arr
    // }

    // console.log(insertAt([1,2,3,4,5],5,6))

// RemoveAt
// Given an array and an index into the array,
// remove and return the array value at that index.
// Do this without using any built-in array methods
// except pop()​. Think of PopFront(arr)​ as
// equivalent to RemoveAt(arr,0).

    // T-   I want to remove and return a value at a given index in a given array
    // I-   I want to create a variable with the value of the given index
    //      then I want to loop forwards through the array from the index and assign the value of each index to the next value
    //      then I want to return the given index value and the array

    // function removeAt(arr,index) {
    //     let removedVal = arr[index];
    //     for(let i = index; i < arr.length-1; i++) {
    //         arr[i] = arr[i+1]
    //     }
    //     arr.pop()
    //     return `Array: ${arr}, Index: ${removedVal}`
    // }

    // console.log(removeAt([1,2,3,4,5,6],3))

// Reverse Array
// Given a numerical array, reverse the order of the
// values. The reversed array should have the same
// length, with existing elements moved to other
// indices so that the order of elements is reversed.

    // T-   I want to reverse an array in place, meaning I want to swap all the array values
    // I-   I want to loop forwards to the halfway point of the array, and in the loop,
    //      I want to swap the current and last minus current index of the array
    //      Then I want to return the reversed array

    // function reverseArr(arr) {
    //     for(let i = 0; i < Math.floor(arr.length / 2); i++) {
    //         let temp = arr[i]
    //         arr[i] = arr[arr.length - 1 - i]
    //         arr[arr.length - 1 - i] = temp
    //     }
    //     return arr
    // }

    // console.log(reverseArr([1,2,3,4,5]))

// Remove Negatives
// Implement a function removeNegatives()​ that
// accepts an array and removes any values that
// are less than zero.
// Second-level challenge: ​don’t use nested loops.

    // T-   I want to take an array and in place remove negative values
    // I    I want to loop through the array, and every time I have a negative value,
    //      loop forwards through the array from the place of the negative,
    //          set each index to the value of the next
    //          remove the last index
    //      then return the array

    // function removeNegatives(arr) {
    //     for(let i = 0; i < arr.length; i++) {
    //         if(arr[i] < 0) {
    //             for(let ii = i; ii < arr.length-1; ii++) {
    //                 arr[ii] = arr[ii+1]
    //             }
    //             arr.pop()
    //         }
    //     }
    //     return arr
    // }

    // console.log(removeNegatives([1,-1,2,-2,3,-3]))

    // Alternately, remove negatives by creating a new array:

    // function removeNegatives(arr) {
    //     let positivesOnlyArr = []
    //     for(let i = 0; i < arr.length; i++) {
    //         if(arr[i] >= 0) {
    //             positivesOnlyArr.push(arr[i])
    //         }
    //     }
    //     return positivesOnlyArr
    // }

    // console.log(removeNegatives([-1,-2,-3,-4,-5,-6,-1]))

// Skyline Heights
// You are given an array with heights of consecutive buildings in the city. For example, [-1,7,3]​ would
// represent three buildings: first is actually below street level, second is seven stories high, and third is
// three stories high (but hidden behind the seven-story onbe). You are situated at street level. Return an
// array containing heights of the buildings you can see, in order. Given [1,-1,7,3]​ return [1,7]​.
    
    // T-   I need to take an array and return a new array consisting only of array values higher than all the following
    // I-   I want to create a runner for the tallest starting at zero, and only push indexes to the new array with values 
    //      higher than the runner, and only push indexes zero or higher

    // function skyLine(arr) {
    //     let tallest = arr[0]
    //     let visibleBuildings = []
    //     for(let i = 0; i < arr.length; i++) {
    //         if(arr[i] > tallest) {
    //             tallest = arr[i]
    //             if(tallest >= 0) {
    //                 visibleBuildings.push(tallest)
    //             }
    //         }
    //     }
    //     return visibleBuildings
    // }

    // console.log(skyLine([-1,-7,3,8]))

// Binary Search
// Given a sorted array and a value, return whether
// that value is present in the array. Do not
// sequentially iterate the entire array. Instead,
// ‘divide and conquer’, taking advantage of the fact
// that the array is sorted.

    // T-   I need to look through a sorted array to find if a given value is present
    // I-   I need to create two runners for left and right
    //      I need to create a while loop for while left is less than or equal to right
    //          I need to set the middle point as equal to half the distance between left and right
    //          If mid equals the given value
    //              I return positive
    //          If mid is less than the target
    //              set left to mid plus one
    //          If mid is greater than the target, set right to mid minus one
    //      If none of that loop returns the value, return negative one

    // function binarySearch(arr, value) {
    //     let left = 0
    //     let right = arr.length - 1
    //     while(left <= right) {
    //         mid = Math.floor((left + right ) / 2)
    //         if(mid == value) {
    //             return "Value exists"
    //         }
    //         else if(mid < value) {
    //             left = mid + 1
    //         }
    //         else {
    //             right = mid - 1
    //         }
    //     }
    //     return -1
    // }

    // console.log(binarySearch([1,2,3,4,5,6,7,8,9,10]-5))

// Rotate Array
// Implement rotateArr(arr, shiftBy)​ that
// accepts array and offset. Shift arr’s values to the
// right by that amount. ‘Wrap-around’ any values
// that shift off array’s end to the other side, so that
// no data is lost. Operate in-place: given
// ([1,2,3],1)​, change the array to [3,1,2]​.

    // T-   I want to rotate an array by shifting all the values to the right a given amount, but I can only operate in place
    // I-   I want to create a loop with the number of times being the given rotate value:
    //          I want to record the last array value
    //          then I want to loop backwards setting each index to the value of the next
    //          then I want to set the first index value to the recorded value

    // function rotateArr(arr, rotateValue) {
    //     for(let i = 0; i < rotateValue; i++) {
    //         let lastValue = arr[arr.length - 1];
    //         for(let ii = arr.length - 1; ii > 0; ii--) {
    //             arr[ii] = arr[ii-1]
    //             console.log(arr)
    //         }
    //         arr[0] = lastValue
    //     }
    //     return arr
    // }
    
    // console.log(rotateArr([1,2,3,4],2))

// Min Of Sorted-Rotated
// You will be given a numerical array that has first
// been sorted, then rotated by an unknown
// amount. Find and return the minimum value in
// that array.

    // T-   I want to take a rotated sorted array and find the minimum value
    // I-   I want to create a while loop for while the last value is smaller than the first value,
    //      I want to rotate the array left
    //      then I want to return the last value

    // function minOfSortedRotated(arr) {
    //     let front = arr[0]
    //     let end = arr[arr.length -1]
    //     while(front > end) {
    //         let firstValue = arr[0]
    //         for(let i = 0; i < arr.length -1; i++) {
    //             arr[i] = arr[i+1]
    //         }
    //         arr[arr.length - 1] = firstValue
    //         front = arr[0]
    //         end = arr[arr.length - 1]
    //     }
    //     return arr[0]
    // }

    // console.log(minOfSortedRotated([3,4,5,6,1,2]))

// Second-to-Last
// Return the second-to-last element of an array.

    // T-   I want to return the second to last item from an array
    // I-   I want to return the arr[arr.length - 2]
    // Edge-If the array has less than two items, return "Array too short"

    // function returnSecondToLastArrayValue(arr) {
    //     if(arr.length < 2) {
    //         return "Array too short"
    //     }
    //     return arr[arr.length - 2]
    // }

    // console.log(returnSecondToLastArrayValue([1,2,3]))

// Nth-to-Last
// Return the element that is N-from-array’s-end.

    // T-   I am supposed to return the nth from last array value

    // function returnNthFromLastArrayValue(arr,n) {
    //     if(arr[arr.length - 1 - n]) {
    //         return arr[arr.length - 1 - n]
    //     }
    //     return "N out of bounds"
    // }

    // console.log(returnNthFromLastArrayValue([1,2,3,4,5],5))

// Second-Largest
// Return the second-largest element of an array.
    
    // T-   I need to return the second largest item in an array
    // I-   I want to sort the array:
    //      I want to set a runner for the minimum value
    //      I want to find the minimum value, and set it to the first index
    //      I want to successively loop from each point one forward every time I set the current minimum runner to 
    //      the next value from the front
    //      Then I want to return the second last value

    // function returnTheSecondLargestArrayValue(arr) {
    //     if(arr.length < 2) {
    //         return "Invalid: Array too short."
    //     }
    //     const n = arr.length;
    //     for(let i = 0; i < n - 1; i++) {
    //         for(let j = 0; j < n - i - 1; j++) {
    //             if(arr[j] > arr[j+1]) {
    //                 [arr[j], arr[j+1]] = [arr[j+1], arr[j]]
    //             }
    //         }
    //     }
    //     return arr[arr.length - 2]
    // }

    // console.log(returnTheSecondLargestArrayValue([1,4,2,4,3]))

// Nth-Largest
// Given an array, return the Nth-largest element:
// there should be (N - 1) elements that are larger.

    // function returnTheNthLargestElementFromTheArray(arr,nth) {
    //     if(arr.length <= nth) {
    //         return "Invalid: N out of bounds"
    //     }
    //     const n = arr.length;
    //     for(let i =  0; i < n - 1; i++) {
    //         for(let j = 0; j < n - i - 1; j++) {
    //             if(arr[j] > arr[j+1]) {
    //                 [arr[j], arr[j+1]] = [arr[j+1], arr[j]]
    //             }
    //         }
    //     }
    //     return arr[arr.length - 1 - nth]
    // }

    // console.log(returnTheNthLargestElementFromTheArray([1,2,4,5,3],2))

// arrConcat
// Replicate JavaScript’s concat()​. Create a
// standalone function that accepts two arrays.
// Return a new array containing the first array’s
// elements, followed by the second array’s
// elements. Do not alter the original arrays. Ex.:
// arrConcat( ['a','b'], [1,2] )​ should
// return ['a','b',1,2]​.

    // T-   I want to take two arrays and put them together
    // I-   I want to initialize a new array, then I want to loop through the first array and add all elements to a new array,
    // //      then loop through the second array and add all elements to the new array

    // function arrConcat(arr1,arr2) {
    //     let concatArr = [];
    //     for(let i = 0; i < arr1.length; i++) {
    //         concatArr.push(arr1[i])
    //     }
    //     for(let ii = 0; ii < arr2.length; ii++) {
    //         concatArr.push(arr2[ii])
    //     }
    //     return concatArr
    // }

    // console.log(arrConcat([1,2,3],['a','b','c']))

// Faster Factorial
// Remember iFactorial from last chapter? Take
// that implementation and use a time-space
// tradeoff to accelerate the average running time.
// Recall that iFactorial(num) returns the product of
// positive integers from 1 to the given num. For
// example: fact(1)​ = 1, fact(2)​ = 2, fact(3)
// = 6. For these purposes, fact(0)​ = 1.

    // T-   I want to take a number and return the factorial
    // I-   I want to loop and in each loop multiply the last value by the current

    // function fasterFactorial(place) {
    //     let factor = 1
    //     for(let i = 1; i <= place; i++) {
    //         factor *= i
    //     }
    //     return factor
    // }

    // console.log(fasterFactorial(4))

// Shuffle
// Recreate the shuffle()​built into JavaScript, to
// efficiently shuffle a given array’s values. Do you
// need to return anything from your function?

    // function shuffle(arr) {
    //     for (let i = arr.length - 1; i > 0; i--) {
    //         const j = Math.floor(Math.random() * (i + 1));
    //         [arr[i], arr[j]] = [arr[j], arr[i]];
    //     }
    //     return arr;
    // }

    // console.log(shuffle([1,2,3,4,5,6,7,8,9]))

// Smarter Sum
// Use a time-space tradeoff to accelerate the
// average running time of an iSigma(num) function
// that returns the sum of all positive integers from 1
// to num. Recall: sig(1) = 1, sig(2) = 3, sig(3) = 6,
// sig(4) = 10.

    // T-   I want to return the sum of all positive integers from 1 to the given number
    // I-   I want to initialize the sum, then create a for loop
    //          I want to add each number to the sum
    //      then I return the sum

    // function iSigma(numParam) {
    //     if(numParam <= 0) {
    //         return "Invalid: number must be at least 1"
    //     }
    //     let sum = 0
    //     for(let i = 1; i <= numParam; i++) {
    //         sum += i
    //     }
    //     return sum
    // }

    // console.log(iSigma(1))

// Fabulous Fibonacci
// Use a time-space tradeoff to accelerate the
// average running time of an iFibonacci(num)
// function that returns the ‘num’th number in the
// Fibonacci sequence. Recall: fib(0) = 0, fib(1) = 1,
// fib(2) = 1, fib(3) = 2.

    // T-   I want to take a place and return the fibonacci value for that place
    // I-   I want to create a three runners for the first, second and third value and a for loop
    //          inside: I want to set the value of the third as equal to the previous two

    // function fibonacci(place) {
    //     if(place == 0) {
    //         return 0
    //     }
    //     if(place == 1) {
    //         return 1
    //     }
    //     let fib1 = 0
    //     let fib2 = 1
    //     let fib3
    //     for(let i = 0; i < place; i++) {
    //         fib3 = fib1 + fib2
    //         fib1 = fib2
    //         fib2 = fib3
    //     }
    //     return fib3
    // }

    // console.log(fibonacci(3))

// Tricky Tribonacci
// Why stop with fibonacci? Create a function to
// retrieve a “tribonacci” number, from the sum of
// the previous 3. Tribonaccis are {0, 0, 1, 1, 2, 4, 7,
// 13, 24, 44, 81, ...}. Again, use a time-space
// tradeoff to make this fast.

    // I want to take a place and return the tribonacci value
    // I want to create four runners,
    // then I want to create a for loop where I set each runner to the value of the next

    // function tribonacci(place) {
    //     if(place == 0) {
    //         return 0
    //     }
    //     if(place == 1) {
    //         return 0
    //     }
    //     if(place == 2) {
    //         return 1
    //     }
    //     let fib1 = 0
    //     let fib2 = 0
    //     let fib3 = 1
    //     let fib4
    //     for(let i = 3; i <= place; i++) {
    //         fib4 = fib1 + fib2 + fib3
    //         fib1 = fib2
    //         fib2 = fib3
    //         fib3 = fib4
    //     }
    //     return fib4
    // }

    // console.log(tribonacci(5))

// The “Buggy 13” (#1)
// Below are solutions to the “Basic 13” algorithms. Unfortunately, some of these solutions contain errors.
// Which ones have bugs, and what are they?
// Print1To255()
// Print all the integers from 1 to 255.

    // function print1to255()
    // {
    //     var num = 1;
    //     while (num < 255) {
    //     console.log(num);
    //     num = num + 1;
    //     }
    // }

    // console.log(print1to255())
    // num won't reach 255

// PrintIntsAndSum0To255()
// Print integers from 0 to 255, and the sum so far.
    
    // function printSum0to255()
    // {
    //     var sum = 0;
    //     for(var num = 0;num <= 255;num++)
    //     { sum += num; }
    //     return sum;
    // }

    // console.log(printSum0to255())
    // Does not print sum

// PrintMaxOfArray(arr)
// Print the largest element in a given array.
    
    // function printArrayMax(arr) {
    //     if (arr.length == 0) {
    //         console.log("[], no max val.");
    //         return;
    //     }
    //     var max = 0;
    //     for (var idx = 0; idx < arr.length; idx++) {
    //         if (arr[idx] > max)
    //         { max = arr[idx]; }
    //     }
    //     console.log("Max value is:", max);
    // }

    // Errors:
    // max should be arr[0], not 0

// PrintOdds1To255()
// Print all odd integers from 1 to 255.
    // function printOdds1to255()
    // {
    //     var num = 1;
    //     while (num <= 255)
    //     {
    //     console.log(num + 2);
    //     }
    // }

    // Errors:
    // num doesn't increase

// PrintArrayVals(arr)
// Print all values in a given array.
    // function printArrayValues(arr) {
    //     for var idx = 0;idx < arr.length;
    //     arr++) {
    //     console.log("array[", idx,"] =",arr[idx]);
    //     }
    // }

    // Errors:
    // No parenthesis for the for loop
    // the iterator in the loop is arr++0

// PrintAverageOfArray(arr)
// Analyze an array’s values and print the average.
    // arr = [1,4,7,2,5,8];
    // if (arr.length == 0) {
    //     console.log("[ ], no avg val.");
    //     return;
    // }
    // var sum = arr[0];
    // for (var idx = 1; idx < arr.length;
    //     idx++) {
    //     sum += arr[idx];
    // }
    // console.log("Avg val:", sum/arr.length);

    // Errors:
    // No function
    // sum = arr[0] when it should be 0
    // idx starts at 1 when it should start at 0

// ReturnOddsArray1To255()
// Create & return array with odd integers 1-255.
    // function oddArray1to255() {
    //     var oddArray = [];
    //     for (var num = 1; num <= 255;
    //     num += 2)
    //     { oddArray.push(num); }
    // }
    
    // Errors:
    // No return

// ReturnArrayCountGreaterThanY(arr, y)
// Given an array, return count greater than Y.
    // function numGreaterThanY(arr, y) {
    //     var numGreater = 0;
    //     for(var idx = 0; idx < arr.length;
    //     idx++) {
    //         if (arr[idx] > y)
    //         { numGreater++; }
    //     }
    //     return arr[y];
    // }

    // Errors:
    // the return is arr[y], when it should be numGreater

// PrintMaxMinAverageArrayVals(arr)
// Print the max, min and average array values.
    // function maxMinAverage(arr) {
    //     if (arr.length == 0) { return; }
    //     var min = arr[0];
    //     var max = arr[0];
    //     var sum = arr[0];
    //     for (var idx=1; idx <= arr.length;
    //     idx++) {
    //         if (arr[idx] < min)
    //         { min = arr[idx]; }
    //         if (arr[idx] > max)
    //         { max = arr[idx]; }
    //         sum += arr[idx];
    //     }
    //     return min;
    //     return max;
    //     return avg;
    // }

    // Errors:
    // the for loop endpoint is arr.length when it should be one less than arr.length
    // there is no avg: it should be sum / arr.length but the calculation is not there

// SquareArrayVals(arr)
// Given an array, square each value in the array.
    // function squareArrVals(arr) {
    //     for (var idx = 0;idx < arr.length;
    //         idx++){
    //         arr[idx] = arr[idx] + arr[idx];
    //     }
    // }

    // Errors:
    // the calculation in the loop doubles, not squares
    // There is no return of arr

// ZeroOutArrayNegativeVals(arr)
// Given an array, set negative values to zero.
    // setNegsToZero(arr) {
    //     for (var idx = 0;idx < arr.length;
    //     idx++){
    //     if (arr[idx] < 0){ arr[idx]=0; }
    //     }
    // }

    // Errors:
    // There is no return of arr

// ShiftArrayValsLeft(arr)
// Shift array values forward, leaving '0'​ at end.
    // function arrShift(arr) {
    //     for (var idx = 1;idx < arr.length;
    //     idx++){
    //         arr[idx - 1] = arr[idx];
    //     }
    //     arr.length--;
    //     return arr;
    // }

    // Errors:
    // arr.length-- doesn't work, should be arr[arr.length-1] = 0

// SwapStringForArrayNegativeVals(arr)
// Replace negative array values with 'Dojo'​.
    // function subStringForNegs(arr) {
    //     for (var idx = 0;idx < arr.length;idx++){
    //     if(idx < 0) {arr[idx]="Dojo"}
    //     }
    //     return arr;
    // }
    
    // Errors:
    // the if statement is if idx < 0; it should be if arr[idx] < 0

// Arrs2Map
// Given two arrays, create an associative array (map) containing keys of the first, and values of the
// second. For arr1 = ["abc", 3, "yo"]​ and arr2 = [42, "wassup", true]​, return {"abc":
// 42, 3: "wassup", "yo": true}​.

    // T-   I want to take two arrays and turn them into key-value pairs of a new associative array
    // I-   I want to instantiate an associative array
    //      then I want to create a for loop, and in the loop I want to set the key to the value in the index of the first array, 
    //      and the value to the value of the index of the second array
    //      then I want to return the new associative array
    // Edge:I want to return "Invalid" if the arrays are different lengths

    // function marpTwoArrays(arr1,arr2) {
    //     if(arr1.length !== arr2.length) {
    //         return "Invalid: Arrays different lengths"
    //     }
    //     let assocArr = {}
    //     for(let i = 0; i < arr1.length; i++) {
    //         assocArr[arr1[i]] = arr2[i]
    //     }
    //     return assocArr
    // }

    // console.log(marpTwoArrays(["a","b","c"],[1,2,null]))

// InvertHash
// Create invertHash(assocArr) that converts a hash’s keys to values and values to corresponding keys.
// Example: given {"name": "Zaphod"; "numHeads": 2}​, return {"Zaphod": "name"; 2:
// "numHeads"}​. You will need to learn and use a JavaScript for ... in​ h​ere!

    // T-   I want to take a hash map and swap the keys and values
    // I-   I need to take a for in loop and swap each key and value

    // function invertHash(obj) {
    //     let swapped = {}
    //     for(key in obj) {
    //         swapped[obj[key]] = key
    //     }
    //     return swapped
    // }

    // console.log(invertHash({"a": 1, "b": 2, "c": 3}))

// ReverseString
// Implement a function reverseString(str) that, given a string, will return the string of the same length but
// with characters reversed. Example: given "creature"​, return "erutaerc"​. Do not use the built-in
// reverse()​ function!

    // T-   I want to reverse a string
    // I-   I want to turn the string into an array, for loop to the halfway point of the array,
    //          and at each step I want to switch the current index with the index equally far from the back,
    //      then I want to join the array

    // function reverseString(string) {
    //     let arr = string.split('')
    //     halfwayPoint = Math.floor(arr.length / 2)
    //     for(let i = 0; i <= halfwayPoint; i++) {
    //         temp = arr[i]
    //         arr[i] = arr[arr.length - i - 1]
    //         arr[arr.length - i - 1] = temp
    //     }
    //     return arr.join('')
    // }

    // console.log(reverseString("String"))

// Remove Blanks
// Create a function that, given a string, returns the string, without blanks. Given " play that
// Funky Music "​, returns a string containing "playthatFunkyMusic"​.

    // T-   I want to take a string and remove the spaces from it
    // I-   I want to split the string into an array,
    //      then I want to create a for loop and iterate through the array
    //          every time I encounter a space, I want to loop forwards through the array,
    //              and set each value equal to the next value,
    //          then remove the last index from the array

    // function removeBlanks(string) {
    //     let arr = string.split("")
    //     for(let i = 0; i< arr.length; i++) {
    //         if(arr[i] == " ") {
    //             for(let ii = i; ii < arr.length - 1; ii++) {
    //                 arr[ii] = arr[ii+1]
    //             }
    //             arr.pop()
    //         }
    //     }
    //     return arr.join("")
    // }

    // console.log(removeBlanks(" play that Funky Music "))

