// 2. Завдання: створіть 5 різних елементів використовуючи DOM js
// 3. Видаліть 2 останніх створенних елемента
// 4. Першому елементу дайте клас “first”
// 5. Другому елементу дайте Id “second”

const elementsNames = ["div", "p", "span", "h2", "ul"];
const elements = elementsNames.map((tag) => document.createElement(tag));

elements.forEach((element) => document.body.appendChild(element));

elements.slice(-2).forEach((element) => document.body.removeChild(element));

elements.at(0).className = "first";
elements.at(1).className = "second";
