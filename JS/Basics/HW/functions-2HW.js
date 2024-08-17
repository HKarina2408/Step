// Завдання:

// Створіть свій шаблон Person за допомогою функції конструктора

// Опишіть поля name, age, skills (масив строк)

// Опишіть методи learn(skillName) - додає до навичок новий скілл, forget(skillName) - видаляэ з масиву навичок скілл

// Створіть декілька екземплярів та  перевірте правильність роботи методів)

function Person(name, age, skills) {
  this.name = name;
  this.age = age;
  this.skills = skills;

  this.learn = function (skill) {
    this.skills.push(skill);
  };

  this.forget = function (skill) {
    this.skills = this.skills.filter((skl) => skl !== skill);
  };

  return this;
}

const person = new Person("Karina", 24, ["HTML", "JS"]);

console.log(person);
person.learn("Python");
console.log(person);
person.forget("Python");
console.log(person);
