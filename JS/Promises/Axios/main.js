console.log(axios, window.axios);

// Most common way
// GET, POST, PATCH, PUT, DELETE

// get
axios
  .get("https://jsonplaceholder.typicode.com/albums")
  .then((response) => console.log(response.data))
  .catch((error) => console.log(error));

const data = {
  id: 10,
  userId: 10,
  title: "Hello, this is new album",
};

// post
axios
  .post("https://jsonplaceholder.typicode.com/albums", data)
  .then((response) => console.log(response.data))
  .catch((err) => console.log(err));

// Завдання:
// написати GET запит на посилання
// https://jsonplaceholder.typicode.com/users

// Отримати та вивести data
// Вiдловити помилки

axios
  .get("https://jsonplaceholder.typicode.com/users")
  .then((res) => console.log(res.data))
  .catch((error) => console.log(error));

// put
axios
  .put("https://jsonplaceholder.typicode.com/albums/1", {
    id: 11,
    userId: 8,
    title: "@@@@@@@@@",
  })
  .then((response) => console.log(response.data))
  .catch((err) => console.log(err));

// delete
axios
  .delete("https://jsonplaceholder.typicode.com/albums/1")
  .then((res) => console.log(res))
  .catch((error) => console.log(error));

// Another way of using axios

axios({
  method: "get",
  url: "https://jsonplaceholder.typicode.com/albums",
}).then((res) => console.log(res.data));

// get by default
axios("https://jsonplaceholder.typicode.com/albums").then((response) =>
  console.log(response.data)
);

// BACKEND - base url https://jsonplaceholder.typicode.com
// Creating an axios instance

const axiosInstance = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
  headers: {
    "Content-Type": "Application/json",
  },
  timeout: 5000,
});

// sub-route request
axiosInstance.get("/users").then((res) => console.log(res.data));
axiosInstance.get("/todos").then((res) => console.log(res.data));

// Завдання:
// Cтворiть свiй axios instance та зробiть кiлька запитiв (get):
// "/albums", "/posts", "/comments"

// Дочекайтеся всiх запитiв, вивести результат цих запитiв

const axiosInstance2 = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
  headers: {
    "Content-Type": "Application/json",
  },
});

// Promise.all([
//   axiosInstance2.get("/albums"),
//   axiosInstance2.get("/posts"),
//   axiosInstance2.get("/comments"),
// ]).then((data) => {
//   data.forEach((res, i) => {
//     console.log(`Data${i}: ${res.data}`);
//   });
// });

// Async / await

async function getUsers() {
  // await
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  console.log(response);
  const data = await response.json();

  console.log("Final data", data);

  return data;
}

getUsers().then((users) => console.log(users));

async function getPosts() {
  const { data } = await axiosInstance.get("/posts");
  console.log(data);
}

getPosts();

async function createPost(post) {
  const { data: createdPost } = await axiosInstance.post("/posts", post);
  return createdPost;
}

createPost({ id: 101, userId: 1, title: "Hello", body: "Something" }).then(
  (createdPost) => console.log(createdPost)
);

// const fn = async () => {};
// const fn1 = async function () {};

class API {
  constructor(baseURL, headers, timeout) {
    this.baseURL = baseURL;
    this.headers = headers;
    this.timeout = timeout;

    this.instance = axios.create({ baseURL, headers, timeout });
  }

  async get(path) {
    return (await this.instance.get(path)).data;
  }

  async post(path, body) {
    const { data } = await this.instance.post(path, body);
    return data;
  }

  async patch(path, body) {
    const { data } = await this.instance.patch(path, body);
    return data;
  }

  async put(path, body) {
    const { data } = await this.instance.put(path, body);
    return data;
  }

  async delete(path) {
    const { data } = await this.instance.delete(path);
    return data;
  }
}

// H/W

const api = new API(
  "https://jsonplaceholder.typicode.com",
  {
    "Content-Type": "Application/Json",
  },
  10000
);

// Just an example
api.get("./users").then((users) => console.log("USERS FROM API", users));

// Посилаючись на https://fakestoreapi.com/products/
// Унаслiдувати клас API та розписати додактовi методи:
// getOneProduct

class API {
  constructor(baseURL, headers, timeout) {
    this.baseURL = baseURL;
    this.headers = headers;
    this.timeout = timeout;

    this.instance = axios.create({ baseURL, headers, timeout });
  }

  async get(path) {
    return (await this.instance.get(path)).data;
  }
}

const getOneProduct = new API(
  "https://fakestoreapi.com/products/",
  {
    "Content-Type": "Application/Json",
  },
  10000
);

getOneProduct
  .get("https://fakestoreapi.com/products/")
  .then((products) => console.log("All Products", products))
  .catch((error) => console.error("Error", error));
