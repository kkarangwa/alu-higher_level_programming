#!/usr/bin/node

function factorial (n) {
  if (n === 0 || n === 1) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
}

const firstArg = process.argv[2];

if (isNaN(firstArg)) {
  console.log(1);
} else {
  const n = Number(firstArg);
  console.log(factorial(n));
}
