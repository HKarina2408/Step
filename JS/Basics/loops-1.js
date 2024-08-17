const str = "123456789";

const sum =
  Number(str[0]) +
  Number(str[1]) +
  Number(str[2]) +
  Number(str[3]) +
  Number(str[4]) +
  Number(str[5]) +
  Number(str[6]) +
  Number(str[7]) +
  Number(str[8]);

console.log(sum);

// while
// for

let counter = 0;
let border = str.length;

let loopSum = 0;

while (counter < border) {
  loopSum = loopSum + Number(str[counter]);
  console.log(loopSum);
  counter = counter + 1;
}

console.log(loopSum);

// Завдання:
const str2 = "Hello world. I am a programmer :)";
// Порахуйте пробіли у строці ' '; ===

let counter2 = 0;
let border2 = str2.length;
let amount = 0;

while (counter2 < border2) {
  if (str2[counter2] === " ") {
    amount = amount + 1;
  }

  counter2 = counter2 + 1;
}

console.log(amount);
