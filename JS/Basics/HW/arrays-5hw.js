const shopItems = [
  {
    name: "T-shirt",
    price: 15.99,
    quantity: 50,
    category: "Clothing",
  },
  {
    name: "Running Shoes",
    price: 49.99,
    quantity: 30,
    category: "Footwear",
  },
  {
    name: "Backpack",
    price: 39.99,
    quantity: 20,
    category: "Accessories",
  },
  {
    name: "Jeans",
    price: 29.99,
    quantity: 40,
    category: "Clothing",
  },
  {
    name: "Watch",
    price: 99.99,
    quantity: 15,
    category: "Accessories",
  },
  {
    name: "Sunglasses",
    price: 19.99,
    quantity: 25,
    category: "Accessories",
  },
  {
    name: "Hiking Boots",
    price: 79.99,
    quantity: 10,
    category: "Footwear",
  },
];

// 1. Обчисліть загальну ціну товарів (зважайте на кількість) - (пр: 50 футболок по 20 доларів)
// 2. Поверніть масив категорій без дублікатів) ["Accessories", "Footwear", "Clothing]

const result = shopItems.reduce((acc, item) => {
  acc = acc + item.price * item.quantity;
  return acc;
}, 0);

console.log(result);

const result2 = shopItems.reduce((acc, item) => {
  if (!acc.includes(item.category)) {
    acc.push(item.category);
  }
  return acc;
}, []);

console.log(result2);
