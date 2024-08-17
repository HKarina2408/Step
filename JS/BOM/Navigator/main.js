// DOM
Navigator;

console.log(window.navigator);

console.log(navigator.language, navigator.languages);
const stableLanguages = navigator.languages.filter(
  (lang) => !lang.includes("-")
);

console.log(stableLanguages);

console.log(navigator.userAgent);

// 0.25, 0.5, 1, 2, 4, 8
console.log(navigator.deviceMemory);

console.log(navigator.serviceWorker);

console.log(navigator.cookieEnabled);

if (navigator.cookieEnabled) {
  // your cookie code goes here
}

console.log(navigator.javaEnabled());

console.log(navigator.onLine);

//in development
console.log(navigator.bluetooth);

// Main things

navigator.geolocation;
navigator.clipboard;
navigator.credentials;

navigator.permissions
  .query({ name: "notifications" })
  .then((p) => {
    console.log(p);
  })
  .catch((e) => console.log(e));

Notification.requestPermission().then((permission) => {
  if (permission === "granted") {
    new Notification("Hello");
  }
  console.log(permission);
});

navigator.geolocation;
navigator.clipboard;

navigator.geolocation.getCurrentPosition(
  // success
  (position) => {
    console.log(position, "position");

    const url =
      "https://yahoo-weather5.p.rapidapi.com/weather?lat=50.4434029&long=30.4953502&format=json&u=c";
    const options = {
      method: "GET",
      headers: {
        "x-rapidapi-key": "2ecc6a18f1msh149a8c93469a116p1ff3e3jsn92ea038f0326",
        "x-rapidapi-host": "yahoo-weather5.p.rapidapi.com",
      },
    };

    fetch(url, options)
      .then((res) => res.json())
      .then((data) => console.log(data));
  },
  // error
  (err) => {
    console.log(err.PERMISSION_DENIED);
    console.log(err.POSITION_UNAVAILABLE);
    console.log(err.TIMEOUT);
    console.log(err.message);
  },
  // options
  { enableHighAccuracy: true }
);

const watchId = navigator.geolocation.watchPosition(
  (position) => {
    console.log(position);
  },
  (err) => {
    console.log(err.PERMISSION_DENIED);
  },
  { timeout: 2000, maximumAge: 0 }
);

navigator.geolocation.clearWatch(watchId);

// Завдання:
// Відслідковуйте локацію користувача кожні 3 секунди,
// всі данні про latitude та longitude записуйте у масив у вигляді {lat: , lon: }
// після 10 секунд зупиніть відслідковування
// Поверніть з масиву перші та останні координати користувача

const coordsData = [];

const navigatorWatchId = navigator.geolocation.watchPosition(
  (locationData) => {
    // success
    const { coords } = locationData;

    coordsData.push({
      lat: coords.latitude,
      lon: coords.longitude,
    });
  },
  // error
  (err) => {
    console.log(err);
  },
  {
    // options
    timeout: 3000,
  }
);

setTimeout(() => {
  navigator.geolocation.clearWatch(navigatorWatchId);

  console.log(`Results:`, coordsData.at(0), coordsData.at(-1));
  console.log(`All the results`, coordsData);
}, 10_000);

// clipboard
navigator.clipboard
  .readText()
  .then((text) => console.log(text))
  .catch((err) => console.log(err));

navigator.clipboard
  .writeText("Hello!")
  .then((data) => console.log(data))
  .catch((err) => console.log(err));

const displayH2 = document.querySelector("#display-copy-text");
const copyButton = document.querySelector("#copy-btn");
const textElement = document.querySelector("#copy-text");
const clearButton = document.querySelector("#clear-btn");

copyButton.onclick = () => {
  navigator.clipboard
    .writeText(textElement.textContent)
    .then(() => {
      displayH2.innerHTML += ` ${textElement.textContent}`;
    })
    .catch((err) => console.log(err));
};

clearButton.onclick = () => {
    navigator.clipboard.writeText("")
      .then(() => {
        console.log("Clipboard cleared");
      })
      .catch((err) => console.log(err));
  };
