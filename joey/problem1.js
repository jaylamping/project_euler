let nums = [];

for (var x = 0; x < 1000; x++) {
  if (x % 3 == 0 || x % 5 == 0) {
    nums.push(x);
  }
}

let total = nums.reduce((a, b) => a + b, 0);

console.log(total);
