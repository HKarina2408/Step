const str = "Hello";

Array;

// empty array
const array = [];
const str2 = new String("0123456789");

const numbers = [0, 9, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const strings = ["H", "e", "l", "l", "o"];
const booleans = [true, false, true, true];

console.log(numbers);
console.log(str2);

console.log(numbers[0], numbers[8]);
console.log(numbers.length);

console.log("1234".includes("12"));
console.log(numbers.includes(4));

// Завдання:

const arr1 = ["Hello", "World", "Coding", "JavaScript"];
// Перевірте, чи є в arr1 елементи: "Hello", "JavaScript", "Admin"
console.log(arr1.includes("Hello"));
console.log(arr1.includes("JavaScript"));
console.log(arr1.includes("Admin"));

console.log("0123456789".slice(0, 5));
console.log(numbers.slice(0, 5));

console.log(numbers.at(-1), numbers[1]);

console.log("0123456789".indexOf(9), "01923456789".lastIndexOf(9));
// only primitive values in array (not works with array of objects)
// [1, 2, 3] - works
// [{a:10}, {a:15}] - not works!!! (use findIndex())
console.log(numbers.indexOf(9), numbers.lastIndexOf(9));

for (const element of numbers) {
  console.log(element);
}

let helloStr = "";

for (const str of strings) {
  helloStr += str;
}

console.log(helloStr);

// Завдання:
const elements = [100, 80, 20, 50, 800];
// порахуйте суму елементів
let sum = 0;

for (const element of elements) {
  sum += element;
}
console.log(sum);

const arr = [1, 2, 3, 4, 5];
arr[2] = 100;
arr[5] = 7;
// arr[9] = 11;
// arr[10] = 10;
// Assing the latest element to the array
arr[arr.length] = 6;
arr[arr.length] = 7;
arr[arr.length] = 8;
console.log(arr);

for (const element of arr) {
  console.log(element);
}

// Завдання:
const arr2 = [100, 200, 300, 400, 500, 600, 700, 800];
// залиште лише ті числа, що менші за 400
// та поверніть їх у вигляді окремого масива

function solution(arr2) {
    let newArr = [];
 
    for (const element of arr2) {
        if (element < 400) {
            newArr[newArr.length] = element;
        }
    }
 
    return newArr;
}
 
console.log(solution(arr2));

const array1 = [1, 2, 3];
const array2 = array1;

array1[0] = 100;
console.log(array2);

const arr5 = ["a", "b", "c", "d"];
// Завдання:
// Зробити регістр кожної літери масива великим

const bigLetters = [];

for (const element of arr5) {
  bigLetters[bigLetters.length] = element.toUpperCase();
}
console.log(bigLetters);