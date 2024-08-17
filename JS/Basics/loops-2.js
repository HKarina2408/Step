let numbers = "";

while (numbers.length !== 10) {
  console.log(numbers);
  numbers = numbers.concat("1");
}

console.log(numbers, numbers.length);

let shouldGoOn = true;
let n = -10;

while (shouldGoOn) {
  console.log(n);
  n = n + 1;

  if (n === 0) {
    shouldGoOn = false;
  }
}

console.log(n);

let n1 = 10;

while (true) {
  if (n1 === 5) {
    continue;
    // i++;
  }

  console.log(n1);
  n1 = n1 - 1;

  if (n1 === 0) {
    break;
  }
}
console.log(n1);

// // Завдання:

function draw(symbol, iterations) {
  let str = "";

  while (str.length !== iterations) {
    str = str.concat(symbol);
    console.log(str);
  }

  while (str.length !== 0) {
    console.log(str);
    str = str.slice(0, str.length - 1);
  }
}
draw("*", 3);
console.log();
draw("^", 5);

// for

const str = "qwertyuiop";

for (let i = 0; i < str.length; i = i + 1) {
  console.log(str[i], i);

  if ( i === 6) break;
}

for (let i = 0; i < str.length / 2; i = i + 1) {
  console.log(str[i], i);
}
