const o1 = { a: 1, b: 2, c: 3 };
const o2 = { a: 1, d: 4 };

// виведіть за допомогою циклу всі спільні ключі о1 та о2 (in)

function general(o1, o2) {
  const result = {};

  for (const key in o1) {
    if (key in o2) {
      result[key] = o1[key];
    }
  }
  console.log(result);
}

general(o1, o2);
