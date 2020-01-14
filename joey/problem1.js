/*
    If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

    Find the sum of all the multiples of 3 or 5 below 1000.
*/

let nums = [];

for (var x = 0; x < 1000; x++) {
  if (x % 3 == 0 || x % 5 == 0) {
    nums.push(x);
  }
}

let total = nums.reduce((a, b) => a + b, 0);

console.log(total);
