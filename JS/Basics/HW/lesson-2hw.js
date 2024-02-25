// Дано
const str1 = "Hello";
// Зробіть останню літеру строки str1 великою, а першу - маленькою

const result =
  str1[0].toLowerCase() + str1.slice(1, -1) + str1.slice(-1).toUpperCase();
  console.log(result);

// Дано
const str2 = "karina";
// напишіть ваше їм'я з великої літери (регістр першої літери)

const firstNameLetter = str2[0].toUpperCase();
console.log(firstNameLetter.concat("arina"));

// Дано
const n = 12.6436;
// Залишіть 2 символи після коми, додайте символ $ на початок та кінець

console.log("$".concat(n.toFixed(2)).concat("$"));

const str3 = "H!el*l000o";
// Порахуйте кількість літер у str3 (саме літер)

const lettersQuantity = str3.match(/[a-zA-Z]/g).length
console.log(lettersQuantity);
