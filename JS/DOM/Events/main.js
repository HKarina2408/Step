// DOM

const scripts = document.scripts;
console.log(scripts);

const myOwnCustomScript = document.createElement("script");
myOwnCustomScript.src = "./hello.js";
document.body.appendChild(myOwnCustomScript);

console.log(scripts);

const forms = document.forms;
console.log(forms);

for (const form of forms) {
  form.onsubmit = (event) => {
    event.preventDefault();
  };
}

const images = [
  "https://static.toiimg.com/photo/80387978.cms",
  "https://www.usnews.com/object/image/00000187-05a8-d67e-a38f-2ff8100b0000/2023-chevrolet-corvette-z06-13.jpg?update-time=1679427111996&size=responsive640",
  "https://static.vecteezy.com/system/resources/previews/023/192/562/non_2x/sport-car-running-on-the-road-in-future-city-created-with-generative-ai-free-photo.jpg",
];

// Завдання:
// напишіть логіку створення та виведення зоображень з масиву на сторінку(body)
// .src =

images.forEach((src) => {
  const image = document.createElement("img");
  image.src = src;
  document.body.appendChild(image);
});

console.log(document.images);

const styles = document.styleSheets;
console.log(styles);

document.title = "TITLE FROM JS";
console.log(document.head);

let count = 0;

setInterval(() => {
  count = count + 1;
  document.title = count;
}, 1000);

const style = document.createElement("style");
style.innerHTML = `body {
    background: red;
}`;

document.head.appendChild(style);

// EVENTS in DOM

let count2 = 0;

const count2Element = document.createElement("h1");
count2Element.textContent = count2;

document.body.appendChild(count2Element);

// Завдання:
// Використовуючи dblClick на 2 попередніх кнопках
// реалізувати логіку обнулення count2 (має виводитись)

const resetCount2 = () => {
  count2 = 0;
  count2Element.textContent = count2;
};

// +1
const button = document.createElement("button");
button.textContent = "+1";

button.onclick = () => {
  count2 = count2 + 1;
  count2Element.textContent = count2;
  console.log("The button was clicked", count2);
};
button.ondblclick = resetCount2;

document.body.appendChild(button);

// Завдання:
// Cтворити кнопку, що буде зменшувати на 1 значення count2

// -1
const secondButton = document.createElement("button");
secondButton.textContent = "-1";

secondButton.onclick = () => {
  count2 = count2 - 1;
  count2Element.textContent = count2;
};
secondButton.ondblclick = resetCount2;

document.body.appendChild(secondButton);

// Main events:
// onclick, ondbllclick, onChange, onInput, onMouseMove
// onMouseEnter, onMouseLeave, onBlur, onFocus, onLoad

const dblClickButton = document.createElement("button");
dblClickButton.textContent = "Click 2 times";

dblClickButton.ondblclick = function () {
  console.log("DBL click was fired");
};

dblClickButton.onclick = function (event) {
  console.log(event);
  console.log("Click was fired");
};

document.body.appendChild(dblClickButton);

const selectButtonsWrapper = document.getElementById("select-buttons-wrapper");

const selectButtonsNumbers = [1, 2, 3];
let selectedButtons = [];

const selectButtons = selectButtonsNumbers.map((number) => {
  const selectBtn = document.createElement("button");
  selectBtn.textContent = number;

  selectBtn.onclick = (event) => {
    if (event.ctrlKey && !selectedButtons.includes(number)) {
      selectedButtons.push(number);
      event.target.classList.add("selected");

      console.log(event.target);

      console.log(selectedButtons);
    }

    // Завдання: реалізуйте логіку, що буде прибирати ефект обраної кнопки, 
    // якщо ви затискаєте клавішу shift при натисканні на неї
    
    if (event.shiftKey && selectedButtons.includes(number)) {
      selectedButtons = selectedButtons.filter((n) => n !== number);
      event.target.classList.remove("selected");

      console.log(event.shiftKey);
    }

    console.log(number);
  };

  selectButtonsWrapper.appendChild(selectBtn);
});
