// 1.1 Print numbers from 1 to 10 using a for loop
for (let i = 1; i <= 10; i++) {
  console.log(i);
}

// 1.2 Print numbers from 10 down to 1 using a while loop
let j = 10;
while (j >= 1) {
  console.log(j);
  j--;
}

// 1.3 Print numbers from 1 to 5 using a do...while loop
let k = 1;
do {
  console.log(k);
  k++;
} while (k <= 5);
// 2.1 Print all even numbers from 1 to 50
for (let i = 1; i <= 50; i++) {
  if (i % 2 === 0) console.log(i);
}

// 2.2 Print all odd numbers between 20 and 50
for (let i = 21; i < 50; i += 2) {
  console.log(i);
}

// 2.3 Print all numbers divisible by 3 from 1 to 30
for (let i = 1; i <= 30; i++) {
  if (i % 3 === 0) console.log(i);
}
// 3.1 Sum from 1 to 100
let sum = 0;
for (let i = 1; i <= 100; i++) {
  sum += i;
}
console.log("Sum 1–100:", sum);

// 3.2 Product from 1 to 10
let product = 1;
for (let i = 1; i <= 10; i++) {
  product *= i;
}
console.log("Product 1–10:", product);

// 3.3 Sum of even numbers from 1 to 50
let evenSum = 0;
for (let i = 2; i <= 50; i += 2) {
  evenSum += i;
}
console.log("Sum of even 1–50:", evenSum);

// 3.4 Sum of squares from 1 to 10
let squareSum = 0;
for (let i = 1; i <= 10; i++) {
  squareSum += i * i;
}
console.log("Sum of squares 1–10:", squareSum);
// 4.1 Skip multiples of 4
for (let i = 1; i <= 20; i++) {
  if (i % 4 === 0) continue;
  console.log(i);
}

// 4.2 Stop at 7
for (let i = 1; i <= 10; i++) {
  if (i === 7) break;
  console.log(i);
}

// 4.3 Count numbers divisible by 3 and 5 between 1 and 100
let count = 0;
for (let i = 1; i <= 100; i++) {
  if (i % 3 === 0 && i % 5 === 0) count++;
}
console.log("Divisible by 3 and 5:", count);
// 5.1 Print all pairs (i, j) from 1 to 3
for (let i = 1; i <= 3; i++) {
  for (let j = 1; j <= 3; j++) {
    console.log(`(${i}, ${j})`);
  }
}

// 5.2 Find combinations where a + b = 5 (1 ≤ a,b ≤ 4)
for (let a = 1; a <= 4; a++) {
  for (let b = 1; b <= 4; b++) {
    if (a + b === 5) {
      console.log(`a=${a}, b=${b}`);
    }
  }
}// 6.1 Check if a number is prime
let num = 17;
let isPrime = true;
if (num < 2) isPrime = false;
for (let i = 2; i <= Math.sqrt(num); i++) {
  if (num % i === 0) {
    isPrime = false;
    break;
  }
}
console.log(`${num} is ${isPrime ? "prime" : "not prime"}`);

// 6.2 Print factorial
let n = 6;
let fact = 1;
for (let i = 1; i <= n; i++) {
  fact *= i;
}
console.log(`${n}! = ${fact}`);

// 6.3 Reverse a number
let number = 123;
let reversed = 0;
while (number > 0) {
  reversed = reversed * 10 + (number % 10);
  number = Math.floor(number / 10);
}
console.log("Reversed:", reversed);

// 6.4 Count digits in a number
let value = 12345;
let digits = 0;
let temp = value;
while (temp > 0) {
  temp = Math.floor(temp / 10);
  digits++;
}
console.log(`Digits in ${value}:`, digits);

// 6.5 Check if number is a palindrome
let original = 1331;
let reversedNum = 0;
let copy = original;
while (copy > 0) {
  reversedNum = reversedNum * 10 + (copy % 10);
  copy = Math.floor(copy / 10);
}
console.log(`${original} is ${original === reversedNum ? "a palindrome" : "not a palindrome"}`);
