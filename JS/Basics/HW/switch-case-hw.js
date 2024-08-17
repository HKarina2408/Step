// Дано

function repeat(message, times) {
  // опишіть функцію repeat так, щоб вона виводила message [times] разів (while)

  let counter = 0;
  while (counter < times) {
    console.log(message);
    counter = counter + 1;
  }
}

repeat("Hello", 5);

// Дано

function getMonthsOf(season) {
  // опишіть функцію getMonthsOf, яка залежно від пори року
  // (winter, summer, autumnm, spring) поверне її місяці як строку (switch-case)


  switch (season) {
    case "winter":
      return "December, January, February";

    case "summer":
      return "June, July, August";

    case "autumn":
      return "September, October, November";

    case "spring":
      return "March, April, May";

    default:
      return;
  }
}

const winter = getMonthsOf("winter");
console.log(winter);

const summer = getMonthsOf("summer");
console.log(summer);

const autumn = getMonthsOf("autumn");
console.log(autumn);

const spring = getMonthsOf("spring");
console.log(spring);

getMonthsOf("summer"); // -> June, July, August
