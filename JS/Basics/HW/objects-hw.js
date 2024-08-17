const obj = { a: 10, b: 10, c: 80 };

function checkValues(obj) {
  // функція має виводити true
  // якщо obj має у сумі показників значень a,b,c число більше за 50
  const sum = obj.a + obj.b + obj.c;

  if (sum > 50) {
    console.log(true);
  }
}

checkValues(obj);
