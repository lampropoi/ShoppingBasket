const products = require("./products");

/**
 * This function calculates the total price of the valid items in a basket and also returns the items
 * that could not be scanned. To optimise the algorithm so as to have time complexity O(N),
 * the items are validated in the same for-loop in which the total price of the basket is calculated.
 * In a real world application, it might be better to have one fuction that validates the input and one
 * that calculates the total to follow the separation of concerns(SoC) design pattern
 *
 * @param string[] items items inside a basket
 * @returns {total: Number, error: string} total amount of basket and errors in input
 */

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
