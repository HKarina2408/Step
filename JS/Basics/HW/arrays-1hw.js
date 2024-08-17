const array = ["user", "guest", "admin", "anonim"];

// 1. Порахуйте суму індексів адміна та юзера, помножену на довжину масиву
// 2. Перетворіть весь масив на масив, слова якого починаються з великої літери

for (const element of array) {
  sum = (array.indexOf("admin") + array.indexOf("user")) * array.length;
}

console.log(sum);

for (let i = 0; i < array.length; i++) {
  const word = array[i];
  array[i] = word.charAt(0).toUpperCase() + word.slice(1);
}

console.log(array);
