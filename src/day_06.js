/**
 * Contains solutions for Day 6
 * Puzzle Description: https://adventofcode.com/2022/day/6
 */



const testInput = 'bvwbjplbgvbhsrlpgdmjqwftvncz'; // first marker after char 5
export const levelOne = ({ input, lines }) => {
  // your code here
  // input = testInput;
  let result = 0;
  let charGroup = [];
  for (let i = 0; i < input.length; i++) {
    charGroup.push(input[i]);
    if (charGroup.length === 4) {
      const set = new Set(charGroup);
      const isUnique = set.size === charGroup.length;
      if (isUnique === true) {
        return i + 1;
      } else {
        charGroup.shift();
      }
    }
  }
  return result;
};


export const levelTwo = ({ input, lines }) => {
  // input = testInput;
  let result = 0;
  let charGroup = [];
  for (let i = 0; i < input.length; i++) {
    charGroup.push(input[i]);
    if (charGroup.length === 14) {
      const set = new Set(charGroup);
      const isUnique = set.size === charGroup.length;
      if (isUnique === true) {
        return i + 1;
      } else {
        charGroup.shift();
      }
    }
  }
  return result;
};
