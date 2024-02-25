// Дано:

function task1() {
  const str1 = "Stirng number one";
  const str2 = "String number two";

  // виведіть найдовшу строку (if)

  if (str1.length > str2.length) {
    console.log(str1);
  } else {
    console.log(str2);
  }
}

task1();

// Дано:

function task2() {
  const str = "JavaScript";
  const repeatTimes = 12;

  // "Повторіть" (repeat) строку str [repeatTimes] разів.
  // Виведіть її у консоль тільки якщо після repeat довжина строки стала більшою за 100

  const repeatedStr = str.repeat(repeatTimes);
  if (repeatedStr.length > 100) {
  console.log(repeatedStr);
  }
}

task2();
