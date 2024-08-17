// Завдання

function findCharactersQuantity(str, char) {
  // функція має рахувати кількість символів char у строці str
  let counter = 0;

  for (const char1 of str) {
    if (char1 === char) {
      counter = counter + 1;
    }
  }

  return counter;
}

const result = findCharactersQuantity("a a a", "a"); // => 3 (три літери а)
console.log(result);

function encryption(str) {
  // функція має замініти у str:
  // кожну літеру а на :
  // кожну літеру b на -
  // кожну літеру с на !
  // for - of , switch - case

  let result = "";

  for (const char of str) {
    switch (char) {
      case "a":
        result = result.concat(":");
        break;

      case "b":
        result = result.concat("-");
        break;

      case "c":
        result = result.concat("!");
        break;

      default:
        result = result.concat(char);
    }
  }

  return result;
}

const result2 = encryption("abc");
// => ":-!"
const result3 = encryption("abcd");
// => ":-!d"
console.log(result2, result3);
