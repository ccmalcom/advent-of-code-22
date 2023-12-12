/**
 * Contains solutions for Day 3
 * Puzzle Description: https://adventofcode.com/2022/day/3
 */

const testLines = [
  'vJrwpWtwJgWrhcsFMMfFFhFp',
  'jqHRNqRjqzjGDLGLrsFMfFZSrLrFZsSL',
  'PmmdzqPrVvPwwTWBwg',
  'wMqvLMZHhHMvwLHjbvcjnnSBnvTQFn',
  'ttgJtRGJQctTZtZT',
  'CrZsJsPPZsGzwwsLwLmpwMDw'
]

const alphabetValues = {
  // Lowercase item types a through z have priorities 1 through 26.
  // Uppercase item types A through Z have priorities 27 through 52 (lowercase + 26)
  'a': 1,
  'b': 2,
  'c': 3,
  'd': 4,
  'e': 5,
  'f': 6,
  'g': 7,
  'h': 8,
  'i': 9,
  'j': 10,
  'k': 11,
  'l': 12,
  'm': 13,
  'n': 14,
  'o': 15,
  'p': 16,
  'q': 17,
  'r': 18,
  's': 19,
  't': 20,
  'u': 21,
  'v': 22,
  'w': 23,
  'x': 24,
  'y': 25,
  'z': 26,
  'A': 27,
  'B': 28,
  'C': 29,
  'D': 30,
  'E': 31,
  'F': 32,
  'G': 33,
  'H': 34,
  'I': 35,
  'J': 36,
  'K': 37,
  'L': 38,
  'M': 39,
  'N': 40,
  'O': 41,
  'P': 42,
  'Q': 43,
  'R': 44,
  'S': 45,
  'T': 46,
  'U': 47,
  'V': 48,
  'W': 49,
  'X': 50,
  'Y': 51,
  'Z': 52
}
export const levelOne = ({ lines }) => {
  //each line is one elf's inventory, divided into 2 equal compartments
  //step 1: find the common letter(s) between the two compartments (case sensitive)
  //step 2: find the value of the common letter(s) and add to sum
  // lines = testLines;
  let totalValue = 0;
  lines.forEach((line) => {
    let lineValue = 0;
    let firstHalf = line.slice(0, line.length / 2);
    let secondHalf = line.slice(line.length / 2);
    for (let i = 0; i < firstHalf.length; i++) {
      if (secondHalf.includes(firstHalf[i])) {
        let commonLetter = firstHalf[i];
        lineValue += Number(alphabetValues[commonLetter]);
        break;
      }
    }
    totalValue += lineValue;
  });
  // console.log('totalValue', totalValue);

  return totalValue;

};

export const levelTwo = ({ lines }) => {
  // every 3 lines represent one group of elf inventories. The 'badge' value is the common letter between all 3 lines
  // step 1: find the common letter(s) between the 3 lines (case sensitive)
  // step 2: find the value of the common letter(s) and add to sum
  // lines = testLines;
  let totalValue = 0;
  let group = [];
  lines.forEach((line, index) => {
    // console.log(line);
    group.push(line);
    if (group.length === 3 || index === lines.length - 1) {
      let [groupOne, groupTwo, groupThree] = group;
      for (let i = 0; i < groupOne.length; i++) {
        if (groupTwo.includes(groupOne[i]) && groupThree.includes(groupOne[i])) {
          // console.log('common letter', groupOne[i]);
          totalValue += Number(alphabetValues[groupOne[i]]);
          break;
        }
      }
      group = [];
    }
  });
  // console.log('totalValue', totalValue);
  return totalValue;
};
