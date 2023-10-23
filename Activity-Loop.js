

// 1. Create a loop that runs from 0 to 9.


// for (let i = 0; i <=9; i++) {
//     console.log (i)
// }

// 2. Create a loop that runs from 9 to 0.

// for (let i = 9; i >= 0; i--) {
//     console.log (i)
// }


// 3. Create a while loop that runs as long as i is less than 10.

//keep it less than 10- stops at 9

// let i = 1

// while (i < 10) {
//     console.log (i)
//     i++
   
// }

// 4. Create a while loop that runs as long as i is less than 100, but increase i with 2 each time.


// let J = 0

// while (J < 100) {
//     console.log (J)
//     J += 2
   
// }






// 5. Look at the following code that shows even numbers (divisible by 2) between 1 and 10.

// console.log (10 % 2)
// console.log (7 % 3)
// console.log (100 % 50)

// for (let i = 1; i <= 10; i++) {
//   if (i % 2 === 0) {
//     console.log(`${i} is even`);
//   } else if (i % 2 === 1) {
//     console.log (`${i} is odd`)
//   }
// }




/* Bonus: FizzBuzz
Write a program that shows all numbers between 1 and 100 with the following exceptions:

It shows "Fizz" instead if the number is divisible by 3.

It shows "Buzz" instead if the number is divisible by 5 and not by 3.

When it's done, improve it so that the program shows "Fizz Buzz" instead for numbers divisible both by 3 and by 5. */

// const ourNumber = 100

// for (let ourNumber = 0; ourNumber <=100; ourNumber++) {
// if (ourNumber % 3 == 0 && ourNumber % 5 == 0) 
//     console.log ("FizzBuzz") 
// } else if (ourNumber %5 === 0 ) {
//     console.log ("Buzz")
// } else if ( ourNumber %3 === 0 ) {
//     console.log ("Fizz")
// } else { console.log (ourNumber)}