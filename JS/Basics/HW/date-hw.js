// Завдання: опрацюйте логіку таймеру, додавши вивід мілесекунд (hh:mm:ss:msms).

// Оновлюйте таймер кожні 500 мілесекунд замість 1000

const date6 = new Date();

const fixedTimeValue = (value) => {
  const stringedValue = `${value}`;

  if (stringedValue.length < 2) {
    return `0${stringedValue}`;
  } else {
    return stringedValue;
  }
};

setInterval(() => {
  date6.setMilliseconds(date6.getMilliseconds() + 500);
  const [hours, minutes, seconds, milliseconds] = [
    date6.getHours(),
    date6.getMinutes(),
    date6.getSeconds(),
    date6.getMilliseconds(),
  ];

  console.log(
    `${fixedTimeValue(hours)}:${fixedTimeValue(minutes)}:${fixedTimeValue(
      seconds
    )}:${fixedTimeValue(milliseconds)}`
  );
}, 500);
