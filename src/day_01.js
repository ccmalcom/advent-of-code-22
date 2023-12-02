/**
 * Contains solutions for Day 1
 * Puzzle Description: https://adventofcode.com/2022/day/1
 */


// function to sum each key's array
const sumArray = (array) => {
  let sum = 0;
  array.forEach((element) => {
    sum += Number(element);
  });
  return sum;
};

const createGroupInventory = (lines) => {
  const groupInventory = {};
  let inventory = [];
  let i = 0;
  // your code here
  lines.forEach((line) => {
    if (line === "") {
      groupInventory[i] = sumArray(inventory);
      inventory=[];
      i++;
    } else {
      inventory.push(line);
    }
  });
  return groupInventory;
};

export const levelOne = ({ input, lines }) => {
  //lines = Array(String)
  let arr = Object.values(createGroupInventory(lines));
  return Math.max(...arr);
};

/**
 * Returns the solution for level two of this puzzle.
 * @param {Object} args - Provides both raw and split input.
 * @param {String} args.input - The original, unparsed input string.
 * @param {String[]} args.lines - Array containing each line of the input string.
 * @returns {Number|String}
 */
export const levelTwo = ({ input, lines }) => {
  // your code here
  //create array from object values
  let arr = Object.values(createGroupInventory(lines));
  //sort array and get 3 highest values
  return sumArray(arr.sort((a, b) => b - a).slice(0, 3));

};
