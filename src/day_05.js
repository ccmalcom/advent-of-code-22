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

const mapStackNums = (inputStr) => {
  let outputArr = [];
  for (const char of inputStr) {
    if (char !== ' ') {
      outputArr.push({ index: inputStr.indexOf(char), value: char });
    }
  }
  return outputArr;
}

const createStackMap = (inputArr) => {
  let outputMap = {};
  let stackNumsMap = mapStackNums(inputArr[0]);
  let stackLines = inputArr.slice(1);

  stackNumsMap.forEach((stackNum) => {
    let stackArr = [];
    for (let i = 0; i < stackLines.length; i++) {
      //TODO: map stacks
      let line = stackLines[i];
      if (line[stackNum.index] !== ' ') {
        stackArr.push(line[stackNum.index]);
      }
    }
    outputMap[stackNum.value] = stackArr;
  })
  return outputMap;
}

const moveBoxes = (stackMap, moves) => {
  let newStackMap = stackMap;
  moves.forEach((move) => {
    let [numToMove, fromStack, toStack] = move.match(/\d+/g);
    let startIndex = newStackMap[fromStack].length - numToMove;
    let lettersToMove = newStackMap[fromStack].slice(startIndex).reverse();
    newStackMap[toStack].push(...lettersToMove);
    newStackMap[fromStack] = newStackMap[fromStack].slice(0, startIndex);
    // console.log(`move ${numToMove} from ${fromStack} to ${toStack}`);
    // console.log('resulting stackMap: ', stackMap);
  });
  return newStackMap;
};

export const levelOne = ({ lines }) => {
  // lines = testLines;
  let result = '';
  let stacks = lines.slice(0, lines.indexOf('')).reverse();
  let moves = lines.slice(lines.indexOf('') + 1);

  let stackMap = createStackMap(stacks);
  let newStackMap = moveBoxes(stackMap, moves);

  let numOfStacks = Object.keys(newStackMap).length;
  for (let i = 0; i < numOfStacks; i++) {
    let stack = newStackMap[i + 1];
    if (stack.length > 0) {
      result += stack[stack.length - 1];
    }
  }
  return result;
};

const moveBoxes9001 = (stackMap, moves) => {
  let newStackMap = stackMap;
  moves.forEach((move) => {
    let [numToMove, fromStack, toStack] = move.match(/\d+/g);
    let startIndex = newStackMap[fromStack].length - numToMove;
    let lettersToMove = newStackMap[fromStack].slice(startIndex);
    newStackMap[toStack].push(...lettersToMove);
    newStackMap[fromStack] = newStackMap[fromStack].slice(0, startIndex);
    // console.log(`move ${numToMove} from ${fromStack} to ${toStack}`);
    // console.log('resulting stackMap: ', stackMap);
  });
  return newStackMap;
};

export const levelTwo = ({ lines }) => {
  // lines = testLines;
  let result = '';
  let stacks = lines.slice(0, lines.indexOf('')).reverse();
  let moves = lines.slice(lines.indexOf('') + 1);

  let stackMap = createStackMap(stacks);
  let newStackMap = moveBoxes9001(stackMap, moves);

  let numOfStacks = Object.keys(newStackMap).length;
  for (let i = 0; i < numOfStacks; i++) {
    let stack = newStackMap[i + 1];
    if (stack.length > 0) {
      result += stack[stack.length - 1];
    }
  }
  return result;
};
