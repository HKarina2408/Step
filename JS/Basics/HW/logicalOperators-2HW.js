// Дано
function calculation() {
  const x = 10;
  const y = 1;
  const z = 50;

  // якщо всі числа більше за нуль - виведіть середнє арифметичне
  // якщо хоча б одне з чисел відсутнє (undefined) - виведіть "Invalid calculation"
  // якщо всі числа від`ємні - виведіть лише X

  if (x > 0 && y > 0 && z > 0) {
    console.log((x + y + z) / 3);
  } else if (x === undefined || y === undefined || z === undefined) {
    console.log("Invalid calculation");
  } else if (x < 0 && y < 0 && z < 0) {
    console.log(x);
  }
}
calculation();

// Дано
const data = undefined;
const backup = {};

function checkData() {
  // якщо дані undefined - виведіть backup, якщо ж дані є - зaпишіть їх у backup
  // та виведіть
  if (data === undefined) {
    console.log(backup);
  } else {
    Object.assign(backup, data);
    console.log(data);
  }
}
checkData();
