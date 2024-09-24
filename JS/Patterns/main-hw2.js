// Завдання: на базі прикладів з уроку реалізувати один з патернів, 
// що розглядався (Observer, Prototype, Middleware)

class Observer {
  constructor(name) {
    this.name = name;
  }

  update(message) {
    console.log(`${this.name} received update: ${message}`);
  }
}

class Subject {
  constructor() {
    this.observers = [];
  }

  subscribe(observer) {
    this.observers.push(observer);
  }

  unsubscribe(observer) {
    this.observers = this.observers.filter((obs) => obs !== observer);
  }

  notify(message) {
    this.observers.forEach((observer) => observer.update(message));
  }
}

const subject = new Subject();

const observer1 = new Observer("Karina");
const observer2 = new Observer("Igor");

subject.subscribe(observer1);
subject.subscribe(observer2);

subject.notify("New project update available!");

subject.unsubscribe(observer1);

subject.notify("Project deadline approaching soon!");
