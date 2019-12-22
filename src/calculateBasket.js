const prices = require("./prices");

module.exports = items => {
  let totalPrice = 0;
  const scannedItems = {};
  const errors = [];
  items.forEach(item => {
    if (prices[item]) {
      if (!scannedItems[item]) {
        scannedItems[item] = 1;
        totalPrice += prices[item].price;
      } else {
        // check for getFree bargains
        scannedItems[item]++;
        if (scannedItems[item] % prices[item].getFreeBargain !== 0) {
          totalPrice += prices[item].price;
        }
      }
    } else {
      errors.push(item);
    }
  });

  return {
    total: Number(totalPrice.toFixed(2)),
    errors: errors.length
      ? `Could not scan the items: ${errors.join(", ")}`
      : "All items scanned successfully!"
  };
};
