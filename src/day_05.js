/**
 * Contains solutions for Day 5
 * Puzzle Description: https://adventofcode.com/2022/day/5
 */

const testLines = [
  '    [D]    ',
  '[N] [C]    ',
  '[Z] [M] [P]',
  ' 1   2   3 ',
  '',
  'move 1 from 2 to 1',
  'move 3 from 1 to 3',
  'move 2 from 2 to 1',
  'move 1 from 1 to 2'
]
// expected result: CMZ

const createStackMap = (inputArr) => {
  let numStacks = Math.max(...inputArr[0].match(/\d+/g));
  let stacks = inputArr.slice(1);
  let stackMap = {};
  for (let stackNum = 1; stackNum <= numStacks; stackNum++) {
    let stackArr = [];
    stacks.forEach((stack) => {
      //! incorrect, need to preserve index of stack (i.e. if [D] is the only letter in the line, but over stack 2, it should in stackMap[2], not stackMap[1] as is currently happening)
      let stackLetters = stack.match(/[A-Z]/g);
      if (stackLetters[stackNum-1] !== undefined) {
        stackArr.push(stackLetters[stackNum-1]);
      }
    });
    stackMap[stackNum] = stackArr;
  }
  return stackMap;
}

export const levelOne = ({ input, lines }) => {
  lines = testLines;
  //! first, split input into two arrays: one for the stacks, one for the moves
  //create stacks and moves array, splitting lines array where line === '' (above space is stacks, below is moves)
  let result = '';
  let stacks = lines.slice(0, lines.indexOf('')).reverse(); //reverse order of stacks array
  console.log(stacks);
  let moves = lines.slice(lines.indexOf('') + 1);
  //num of stacks = max value of numbers (stacks.length-1)
  //regex to match last instance of number in line
  let stackMap = createStackMap(stacks);
  console.log('stackMap: ', stackMap);
  //! next, iterate through moves array, and perform each move on the stacks
  moves.forEach((move) => {
    // move x num of boxes from stack y to stack z
    // update stackMap
    let [numToMove, fromStack, toStack] = move.match(/\d+/g);
    let startIndex = stackMap[fromStack].length - numToMove;
    let lettersToMove = stackMap[fromStack].slice(startIndex);
    stackMap[toStack].push(...lettersToMove);
    stackMap[fromStack] = stackMap[fromStack].slice(0, startIndex);

    console.log(`move ${numToMove} from ${fromStack} to ${toStack}`);
    console.log('resulting stackMap: ', stackMap);
  });
  

  return 0;

  
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
};
