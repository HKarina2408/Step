const data = [
  { balance: 1000, purchases: 2, email: "email1@gmail.com" },
  { balance: 9000, purchases: 9, email: "email2@gmail.com" },
  { balance: 100, purchases: 7, email: "email3@gmail.com" },
  { balance: 4500, purchases: 1, email: "email4@gmail.com" },
];

// 1. Знайдіть користувача з балансом 100
// 2. Перевірте, чи ВСІ користувачі мають більше 1 purchase
// 3. Знайдіть всіх користувачів з балансом більше 100 та з покупками більше 2

const result = data.find((user) => user.balance === 100);
console.log(result);

const result2 = data.every((users) => users.purchases > 1);
console.log(result2);

const result3 = data.filter((users) => {
  return users.balance > 100 && users.purchases > 2;
});
console.log(result3);
