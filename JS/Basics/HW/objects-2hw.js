const data = {
  a: 100,
  b: 300,
  c: 400,
  d: 500,
  e: 600,
  f: 700,
  g: 800,
};

const lowData = {}; // до 300 (включно)
const bigData = {}; // після 300

// За допомогою циклу опрацюйте дані так, щоб менші значення були у lowData,
// більші у bigData

function result(data) {
    const lowData = {};
    const bigData = {};
  
    for (const key in data) {
  
      if (data[key] <= 300) {
        lowData[key] = data[key];
      } else {
        bigData[key] = data[key];
      }
    }
  
    return { lowData, bigData };
  }
  
  console.log(result(data));
