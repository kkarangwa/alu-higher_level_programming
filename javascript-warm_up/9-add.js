#!/usr/bin/node

function add (a, b) {
  console.log(a + b);
}

const [a, b] = process.argv.slice(2, 4).map(n => Number(n));
add(a, b);
