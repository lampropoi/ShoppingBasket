const products = require("./products");

module.exports = items => {
  let totalPrice = 0;
  const scannedItems = {};
  const errors = [];
  items.forEach(item => {
    if (products[item]) {
      // if item exists in the list of products, calculate new total
      if (!scannedItems[item]) {
        scannedItems[item] = 1;
        totalPrice += products[item].price;
      } else {
        scannedItems[item]++;
        // check for bargains and if there is no one based on the items already scanned
        // and the bargains of a product, add price to total
        if (scannedItems[item] % products[item].getFreeBargain !== 0) {
          totalPrice += products[item].price;
        }
      }
    } else {
      // if item doesnt exist in the list of products, add an error for that item
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
