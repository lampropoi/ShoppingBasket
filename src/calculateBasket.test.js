const calculateBasket = require("./calculateBasket");

describe("Calculate Basket", () => {
  test("it should return 0.00", () => {
    const items = [];
    const { total, errors } = calculateBasket(items);
    expect(total).toEqual(0.0);
    expect(errors).toEqual("All items scanned successfully");
  });

  test("it should return 1.58", () => {
    const items = [
      "Apple",
      "Apple",
      "Banana",
      "Banana",
      "Banana",
      "Pen",
      "Pen"
    ];
    const { total, errors } = calculateBasket(items);
    expect(total).toEqual(1.58);
    expect(errors).toEqual("All items scanned successfully");
  });

  test("it should return 3.29", () => {
    const items = [
      "Apple",
      "Apple",
      "Orange",
      "Apple",
      "Pen",
      "Pineapple",
      "Apple",
      "Pen",
      "Banana",
      "Orange",
      "Banana"
    ];
    const { total, errors } = calculateBasket(items);
    expect(total).toEqual(3.29);
    expect(errors).toEqual("All items scanned successfully");
  });

  test("it should return 1.46", () => {
    const items = [
      "apple",
      "Apple",
      "Orange",
      "Spinach",
      "Banana",
      "Banana",
      "Banana",
      "banana"
    ];
    const { total, errors } = calculateBasket(items);
    expect(total).toEqual(1.46);
    expect(errors).toEqual("Could not scan the items: apple, Spinach, banana");
  });
});
