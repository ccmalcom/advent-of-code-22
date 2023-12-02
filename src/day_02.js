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
  // a, x = rock
  // b, y = paper
  // c, z = scissors
  // loss = 0, tie = 3, win = 6
  // additionally, playing rock gets 1 point, playing paper gets 2 points, playing scissors gets 3 points
  // recieve an array of strings. The first char represents player 1 and will be a, b, or c. Second char represents player 2 and will be x, y, or z. these correspond to rock, paper, scissors.
  // rock beats scissors, scissors beats paper, paper beats rock
  // a win gets 6 points, a tie gets 3 points, a loss gets 0 points
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
  // a = rock, 1 point
  // b = paper, 2 points
  // c = scissors, 3 points
  // x = lose, 0 points
  // y = tie, 3 points
  // z = win, 6 points

  // return final score
  let finalScore = 0;
  lines.forEach((line) => {
    let score = 0;
    let p1 = line.at(0).toUpperCase();
    let p2 = line.at(-1).toUpperCase();
    if (p1 === "A") {
      if (p2 === "X") {
        score += 3;
      } else if (p2 === "Y") {
        score += 4;
      } else if (p2 === "Z") {
        score += 8;
      }
    } else if (p1 === "B") {
      if (p2 === "X") {
        score += 1;
      } else if (p2 === "Y") {
        score += 5;
      } else if (p2 === "Z") {
        score += 9;
      }
    } else if (p1 === "C") {
      if (p2 === "X") {
        score += 2;
      } else if (p2 === "Y") {
        score += 6;
      } else if (p2 === "Z") {
        score += 7;
      }
    }
    finalScore += score;
  });
  return finalScore;
};
