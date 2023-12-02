/**
 * Contains solutions for Day 2
 * Puzzle Description: https://adventofcode.com/2022/day/2
 */

/**
 * Returns the solution for level one of this puzzle.
 * @param {Object} args - Provides both raw and split input.
 * @param {String} args.input - The original, unparsed input string.
 * @param {String[]} args.lines - Array containing each line of the input string.
 * @returns {Number|String}
 */
export const levelOne = ({ input, lines }) => {
  // a, x, 1 = rock
  // b, y, 2 = paper
  // c, z, 3 = scissors
  // loss = 0, tie = 3, win = 6
  // recieve an array of strings. The first char represents player 1 and will be a, b, or c. Second char represents player 2 and will be x, y, or z. these correspond to rock, paper, scissors.
  //rock beats scissors, scissors beats paper, paper beats rock
  // a win gets 6 points, a tie gets 3 points, a loss gets 0 points
  // additionally, playing rock gets 1 point, playing paper gets 2 points, playing scissors gets 3 points
  // return the total score of player 2
  // your code here
  let finalScore = 0;
  lines.forEach((line) => {
    let score = 0;
    let p1 = line.at(0).toUpperCase();
    let p2 = line.at(-1).toUpperCase();
    if (p2 === "X") {
      score += 1;
      if (p1 === "C") {
        score += 6;
      } else if (p1 === "A") {
        score += 3;
      }
    } else if (p2 === "Y") {
      score += 2;
      if (p1 === "A") {
        score += 6;
      } else if (p1 === "B") {
        score += 3;
      }
    } else if (p2 === "Z") {
      score += 3;
      if (p1 === "B") {
        score += 6;
      } else if (p1 === "C") {
        score += 3;
      }
    } 
    finalScore += score;
  });

  return finalScore;
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
