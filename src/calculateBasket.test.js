const calculateBasket = require("./calculateBasket");

describe("Calculate Basket", () => {
  test("it should return 0.00 when no input is given", () => {
    const items = [];
    const { total, errors } = calculateBasket(items);
    expect(total).toEqual(0.0);
    expect(errors).toEqual("All items scanned successfully!");
  });

  test("it should return 1.58 when input is: 2 Apples, 3 Bananas and 2 pens", () => {
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
    expect(errors).toEqual("All items scanned successfully!");
  });

  test("it should return 3.29 when input is: 4 Apples, 2 Oranges, 2 Pens, 1 Pineapple and 2 Bananas", () => {
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
    expect(errors).toEqual("All items scanned successfully!");
  });

  test("it should errors for some input and 1.46 when input is: 1 Apple, 1 Orange and 3 Bananas", () => {
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
