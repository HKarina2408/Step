// Реалізувати логіку патерну Factory на власному прикладі
// (мінімум 2 випадки створення екземплярів)

function Car(type, model, year, color) {
    if (type === "Sedan") {
      return new Sedan(model, year, color);
    }
  
    if (type === "SUV") {
      return new SUV(model, year, color);
    }
  
    if (type === "Truck") {
      return new Truck(model, year, color);
    }
  }
  
  function Sedan(model, year, color) {
    this.model = model;
    this.year = year;
    this.color = color;
  
    this.isSedan = function () {
      return `Sedan Model: ${this.model}, Year: ${this.year}, Color: ${this.color}`;
    };
  }
  
  function SUV(model, year, color) {
    this.model = model;
    this.year = year;
    this.color = color;
  
    this.isSUV = function () {
      return `SUV Model: ${this.model}, Year: ${this.year}, Color: ${this.color}`;
    };
  }
  
  function Truck(model, year, color) {
    this.model = model;
    this.year = year;
    this.color = color;
  
    this.isTruck = function () {
      return `Truck Model: ${this.model}, Year: ${this.year}, Color: ${this.color}`;
    };
  }
  
  const sedan = Car("Sedan", "Toyota", 2023, "blue");
  console.log(sedan.isSedan());
  
  const suv = Car("SUV", "Honda", 2024, ["black"]);
  console.log(suv.isSUV());
  
  const truck = Car("Truck", "Ford", 2022, "white");
  console.log(truck.isTruck());
  