const calculateBasket = require("./calculateBasket");

// read the items from the terminal, items must be given in the same line separated by space
const items = process.argv.slice(2);
const { total, errors } = calculateBasket(items);

console.log(`Total Price: ${total}p`);
console.log("Errors:", errors);
