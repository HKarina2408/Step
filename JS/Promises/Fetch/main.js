// Promises
Promise;

new Promise((res, rej) => {
  console.log("Promise");

  rej("Rejected");
  res("Hello");
})
  .then((result) => {
    console.log(result);
    return result;
  })
  .catch((err) => {
    console.log(err);
    return err;
  })
  .finally(() => console.log("Finally"));

// fetch
// JSON
// Application/json

function renderUsers(users) {
  users.forEach((user) => {
    const { email, name, id, phone, username, website } = user;

    document.body.innerHTML += `
      <div>
        <h4>${name}</h4>
        <p>${email}</p>
        <p>${phone}</p>
      </div>
      `;
  });
}

fetch("https://jsonplaceholder.typicode.com/users")
  .then((response) => response.json())
  .then((dataFromJson) => {
    console.log(dataFromJson);
    renderUsers(dataFromJson);
    localStorage.setItem("usersFromServer", JSON.stringify(dataFromJson));
  })
  .catch((err) => {
    console.log(err);
  });

fetch("https://jsonplaceholder.typicode.com/todos")
  .then((res) => res.json())
  .then((todos) => console.log(todos))
  .catch((err) => console.log(err));

// Завдання:
// Зробити GET запит за допомогою fetch на посилання
// https://jsonplaceholder.typicode.com/comments
// Отриману інформацію вивести у консоль, розпакувати її .json()

fetch("https://jsonplaceholder.typicode.com/comments")
  .then((result) => result.json())
  .then((comments) => {
    console.log(comments);
    renderComments(comments);
  })
  .catch((err) => console.log(err));

// Завдання: опишіть функцію renderComments
// функція має виводити коментарі на екран (document.body)
// body, email, id, name, postId
// вивести можна у форматі карток

// Вивести коментарі за допомогою fetch

function renderComments(comments) {
  comments.forEach((comment) => {
    const { body, email, id, name, postId } = comment;

    document.body.innerHTML += `
        <div>
          <p>${body}</p>
          <p>${email}</p>
          <p>${id}</p>
          <p>${name}</p>
          <p>${postId}</p>
        </div>
        `;
  });
}

// Requests variations
// GET
// POST
// PATCH
// PUT
// DELETE

fetch("https://jsonplaceholder.typicode.com/comments", {
  method: "GET",
})
  .then((res) => res.json())
  .then((data) => console.log(data));

const comment = {
  id: 10,
  postId: 1,
  body: "lorem",
  email: "email@gmail.com",
  name: "Karina",
};

// POST - creates new entity
fetch("https://jsonplaceholder.typicode.com/comments", {
  method: "POST",
  body: JSON.stringify(comment),
  headers: {
    "Content-Type": "application/json",
  },
})
  .then((response) => response.json())
  .then((data) => console.log(data, "created comment"))
  .catch((err) => console.log(err));

// PUT/PATCH
fetch("https://jsonplaceholder.typicode.com/comments/1", {
  method: "PATCH",
  body: JSON.stringify({
    id: 1,
    postId: 1,
    body: "updated body",
    email: "email@gmail.com",
    name: "Karina",
  }),
  headers: {
    "Content-Type": "application/json",
  },
})
  .then((res) => res.json())
  .then((comment) => console.log(comment, "comment"))
  .catch((err) => console.log(err));

// DELETE
fetch("https://jsonplaceholder.typicode.com/comments/1", { method: "DELETE" })
  .then((res) => {
    console.log(res);
    return res.json();
  })
  .then((data) => console.log(data))
  .catch((err) => console.log(err));

// CRUD Operations

// Завдання: Використовуючи fetch зробіть запит на посилання
// `https://jsonplaceholder.typicode.com/albums`
// Виведіть дані з альбомів на екран, описавши функцію renderAlbums

fetch("https://jsonplaceholder.typicode.com/albums")
  .then((res) => res.json())
  .then((albums) => {
    renderAlbums(albums);
    console.log(albums);
  })
  .catch((err) => console.log(err));

function renderAlbums(albums) {
  albums.forEach((album) => {
    const { id, title, userId } = album;

    document.body.innerHTML += `
          <div>
            <h3>${id}</h3>
            <p>${title}</p>
            <p>${userId}</p>
          </div>
          `;
  });
}
