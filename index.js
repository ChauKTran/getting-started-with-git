let nien = {
  age: 1,
};
nien.age++;
let total = {};
total[Object.keys(nien)] = 2;
total[Object.keys(nien)]++;
console.log(nien);
console.log(total);
