let find = require("./plants");
let plants = [
  { id: 1, name: "Garden Rocket Arugula" },
  { id: 2, name: "Watercress" },
  { id: 3, name: "Royal Rose Radicchio" },
];

const result = plants.find((plant) => plant.id == 2);
console.log(result);
