const { faker } = require("@faker-js/faker");
const fs = require("fs").promises;
const { createFile } = require("../files/files");

function getUsers() {
  return fetch("https://jsonplaceholder.typicode.com/users")
    .then((res) => res.json())
    .catch((err) => console.error("Error fetching users:", err));
}

function generateUsersLayout() {
  getUsers().then((users) => {
    let content = "";

    const userFilePromises = users.map(
      ({ id, name, email, website, address }) => {
        const userImageSrc = faker.image.avatar();

        content += `
        <div class="user-card">
          <img alt="user-image-${name}" src="${userImageSrc}" />
          <h3>${name}</h3>
          <p>${email}</p>
          <p>${website}</p>
          <a href="./users/user-${id}.html">Link to profile</a>
        </div>
      `;

        const { street, city } = address;

        createFile(
          `./src/files/storage/users/user-${id}.html`,
          `
          <head>
            <title>${name}</title>
          </head>
          <body>
            <h1>User: ${name}</h1>
            <img alt="user-image-${name}" src="${userImageSrc}" />
            <p>${email}</p>
            <p>${street}</p>
            <p>${city}</p>
            <script src="../../../../client/user.js"></script>
          </body>
        `
        );
      }
    );

    Promise.all(userFilePromises)
      .then(() => fs.appendFile("./src/files/storage/users.html", content))
      .catch((err) => console.error("Error creating user files:", err));
  });
}

module.exports = {
  getUsers,
  generateUsersLayout,
};
