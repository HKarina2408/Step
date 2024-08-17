const obj = {
  name: "Karina",
  age: 24,
};

const str = "Hello";

// for with iterator for(let i = 0; i < 10; i ++)
// for of (for strings and arrays) for (const char of str)
// for in (for objects!!!) for (const key in obj)

for (const char of str) {
  console.log(char);
}

console.log(obj["name"]);
console.log(obj["age"]);

for (const key in obj) {
  console.log(key, obj[key]);
}

const numbersObj = {
  a: 10,
  b: 10,
  c: 80,
  d: 100,
  e: 80,
  f: 0,
};

function checkValues(obj) {
  let sum = 0;

  for (const key in obj) {
    console.log(key);
    console.log(obj[key]);

    sum = sum + obj[key];
  }

  console.log(sum);

  if (sum > 50) {
    console.log(true);
  }
}

checkValues(numbersObj);

// Завдання:
function decrease(obj) {
  let sum = 500;
  // відняти всі поля obj від sum та вививести те, що залишиться

  for (const key in obj) {
    console.log(key);
    console.log(obj[key]);

    sum = sum - obj[key];
  }

  console.log(sum);
}

decrease({ a: 10, b: 100, c: 200 });

// Завдання

function filterObjectValues(obj) {
  // опишіть функцію так, щоб якщо вона зустрічає значення
  // менше за 10 - вона змінювала його на undefined

  for (const key in obj) {
    if (obj[key] < 10) {
      obj[key] = undefined;
    }
  }

  return obj;
}

const result2 = filterObjectValues({ a: 11, b: 7, c: 30 });
console.log(result2);
// => {a: 11, b: undefined, c: 30 }

const obj1 = {
  a: 10,
  b: 80,
};

delete obj1.b;
delete obj1["a"];
console.log(obj1);

Object;

String;

const str1 = "Hello";

const obj4 = { x: 50 };

const keys = Object.keys(obj4);
const values = Object.values(obj4);

console.log(keys);
console.log(values);

const obj5 = Object.create({ message: "Hello" });
console.log(obj5);

const objectToChange = { o: 70 };

Object.freeze(objectToChange);

objectToChange.o = 90;
objectToChange.a = 30;
console.log(objectToChange);

function checkAndFreezeObject(obj, allowedKeysQuanity) {
  // Якщо obj має кількість ключів більшу за allowedKeysQuanity
  // Забороняйте зміни цього obj
  let keys = 0;

  for (const key in obj) {
    keys = keys + 1;

    if (keys > allowedKeysQuanity) {
      Object.freeze(obj);
      return;
    }
  }
}

const obj6 = { a: 10, b: 90 };

checkAndFreezeObject(obj6, 1);

obj6.a = 100;

console.log(obj6);

console.log(Object.isFrozen({}));
console.log(Object.isFrozen(objectToChange));

const obj7 = { a: 10 };
Object.seal(obj7);

obj7.b = 10;
obj7.a = 11;

console.log(obj7);
console.log(Object.isSealed(obj7));

// Завдання

function tournament(obj1, obj2) {
  // порахуйте суми довжин всіх string значень obj1, obj2
  // той obj що має меншу довжину має бути замороженим
  let sumObj1 = 0;
  let sumObj2 = 0;

  for (const key in obj1) {
    if (typeof obj1[key] === "string") {
      sumObj1 += obj1[key].length;
    }
  }

  for (const key in obj2) {
    if (typeof obj2[key] === "string") {
      sumObj2 += obj2[key].length;
    }
  }

  if (sumObj1 < sumObj2) {
    Object.freeze(obj1);
    return obj1;
  } else {
    Object.freeze(obj2);
    return obj2;
  }
}

console.log(tournament({ message: "Hello", a: 1, b: "14" }, { a: 10, c: "World!" }));
