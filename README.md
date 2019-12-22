# CalculateBasket

## Run the project

1. Firstly, run the command `yarn install` to install all the npm packages needed
2. To run the project, run the command `node src/index.js ${items in the basket separated with space}`
3. To run the tests, run the command `yarn test`
4. To run eslint, run the command `yarn eslint`

## Info about the project

1. There is no parser/sanitiser for the input (as requested). Thus, to run the project with correct input, the items must be separated with a space, e.g, `node src/index.js Apple Banana Pen Banana`
2. The name of the items scanned are case sensivite, which means: `Apple !== apple`
3. Once you run the code, you will be informed whether all the items were scanned correctly and how many items could not be scanned.
4. In case there are items in the input that cannot be scanned, the total price returned concers only the total of the items that were scanned correctly.

## General info about the code

1. The code is written in JS (node.js).
2. The import and export of functions/variables are done with `module.exports` and `require` (AMD) instead of the es6 way to be compatible with older versions of node.js installed on your machine.
