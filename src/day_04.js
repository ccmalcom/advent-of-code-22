/**
 * Contains solutions for Day 4
 * Puzzle Description: https://adventofcode.com/2022/day/4
 */

const testLines = [
  '2-4,6-8',
  '2-3,4-5',
  '5-7,7-9',
  '2-8,3-7',
  '6-6,4-6',
  '2-6,4-8',
  '6-11,11-84'
]
export const levelOne = ({ input, lines }) => {
  // input is array of strings. Each string is a range of numbers, separated by commas.
  //step 1: determine if one range fully contains another range (e.g. 2-4,3-4 or 5-100, 6-99)
  //step 2: if so, increment total by 1
  // lines= testLines;
  let total = 0;

  lines.forEach((line) => {
    let [rangeOne, rangeTwo] = line.split(',');
    let [rangeOneMin, rangeOneMax] = rangeOne.split('-');
    let [rangeTwoMin, rangeTwoMax] = rangeTwo.split('-');
    let a = parseInt(rangeOneMin);
    let b = parseInt(rangeOneMax);
    let x = parseInt(rangeTwoMin);
    let y = parseInt(rangeTwoMax);
    if ((a <= x && b >= y )||(x <= a && y >= b)) {
      // console.log(`match, rangeOne: ${rangeOne} fits into rangeTwo:${rangeTwo}`);
      total++;
    } 
  })
  return total;
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
  //step 1: determine if one range overlaps another range (e.g. 2-4,4-5 or 5-100, 6-104), or fully contains another range (e.g. 2-4,3-4 or 5-100, 6-99)
  //step 2: if so, increment total by 1
  let total = 0;

  lines.forEach((line) => {
    let [rangeOne, rangeTwo] = line.split(',');
    let [rangeOneMin, rangeOneMax] = rangeOne.split('-');
    let [rangeTwoMin, rangeTwoMax] = rangeTwo.split('-');
    let a = parseInt(rangeOneMin);
    let b = parseInt(rangeOneMax);
    let x = parseInt(rangeTwoMin);
    let y = parseInt(rangeTwoMax);
    if ((a <= x && b >= y )||(x <= a && y >= b)) {
      // console.log(`match, rangeOne: ${rangeOne} fits into rangeTwo:${rangeTwo}`);
      total++;
    } else if ((a <= x && b >= x )||(a <= y && b >= y)) {
      // console.log(`match, rangeOne: ${rangeOne} overlaps rangeTwo:${rangeTwo}`);
      total++;
    }
    
  })
  return total;
};
