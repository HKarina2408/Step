// document.cookie

document.cookie;

console.log(document.cookie);

document.cookie = "name=Karina";
document.cookie = "age=24";
document.cookie = "city=Kyiv";

// Delete cookies

// document.cookie = "name=;";
// key - name
// value - Karina

// secure - HTTPS only (not http)
// samesite - Requests only from same domain (sub-domain)
// httpOnly - cookie is available only for http based requests
// expires - sets the UTC date of exparation

// const exparationDate = new Date();
// exparationDate.setSeconds(exparationDate.getSeconds() + 5);

// console.log(new Date().toUTCString());

// class Cookies {
//   static setCookie(
//     name,
//     value,
//     options = {
//       samesite: "",
//       secure: "",
//       httpOnly: "",
//       expires: "",
//       path: "",
//       domain: "",
//     }
//   ) {
//     let optionsString = "";
//     for (const option in options) {
//       if (options[option]) {
//         optionsString += `${option} = ${options[option]};`;
//       }
//     }

//     console.log(`${name}=${value}; ${optionsString}`);
//     document.cookie = `${name}=${value}; ${optionsString}`;
//   }

//   static getCookie(name) {
//     // Завдання:
//     // Використайте Cookies.getAllCookies() для отримання всіх cookie
//     // Поверніть значення того cookie яке ви шукаєте за параметром name
//     // getCookie("age") => 24
//     return Cookies.getAllCookies()[name];
//   }

//   static getAllCookies() {
//     // in object performance
//     const cookies = {};
//     const arrayOfCookies = document.cookie.split("; ");
//     // name=value (=)
//     // Завдання:
//     // Написати логіку зберігання даних у cookies через масив arrayOfCookies
//     // (в кожному елементі масива є значанення що розділяється = )
//     // ліва частина - ключ, права - значення (name=Igor) name - ключ, Igor - значення
//     // {name: Igor}

//     for (const cookiePair of arrayOfCookies) {
//       console.log(cookiePair);
//       const splittedPair = cookiePair.split("=");
//       const key = splittedPair[0];
//       const value = splittedPair[1];

//       cookies[key] = value;
//     }

//     return cookies;
//   }
// }

// const cookies = Cookies.getAllCookies();
// console.log(cookies);

// console.log(Cookies.getCookie("age"));

// Cookies.setCookie("newCookie", "NEW", {
//   expires: exparationDate.toUTCString(),
// });
// console.log(Cookies.getCookie("newCookie"));
// console.log(Cookies.getAllCookies());

// LIBRARY! https://www.jsdelivr.com/package/npm/js-cookie

Cookies.set("key", "value", { domain: ".com" });
console.log(Cookies.get("key"));
Cookies.remove("name", { path: "/JS/Cookies" });

const data = {
  value1: "value",
  value2: "value",
  value3: "value",
  value4: 10,
  value5: 11,
};

for (const item in data) {
  if (typeof data[item] === "string") {
    document.cookie = `${item}=${data[item]}`;
  }

  if (typeof data[item] === "number") {
    const expiresDate = new Date();
    expiresDate.setHours(expiresDate.getHours() + 1);

    document.cookie = `${item}=${
      data[item]
    }; expires=${expiresDate.toUTCString()}`;
  }
}
