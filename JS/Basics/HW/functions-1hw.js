const obj = {
  addValues: function ({ key, value }) {
    this[key] = value;
    return this;
  },
};

obj.addValues({ key: "a", value: 10 });
obj.addValues({ key: "b", value: 20 });

console.log(obj);

// Допишіть функцію так, щоб всі аргументи що ви передасте у неїї записувалися у obj
// передавати аргументи можна тільки так {key: "ключ", value: "значення"}

//ПРИКЛАД
// obj.addValues({ key: a, value: 10 }, { key: b, value: 20 });

// результат: obj
// {a: 10, b: 20, adddValues: function () {}}
