/*Greed is a dice game played with five six-sided dice. Your mission, should you choose to accept it, is to score a throw according to these rules. You will always be given an array with five six-sided dice values.

 Three 1's => 1000 points
 Three 6's =>  600 points
 Three 5's =>  500 points
 Three 4's =>  400 points
 Three 3's =>  300 points
 Three 2's =>  200 points
 One   1   =>  100 points
 One   5   =>   50 point
A single die can only be counted once in each roll. For example, a given "5" can only count as part of a triplet (contributing to the 500 points) or as a single 50 points, but not both in the same roll.

Example scoring

 Throw       Score
 ---------   ------------------
 5 1 3 4 1   250:  50 (for the 5) + 2 * 100 (for the 1s)
 1 1 1 3 1   1100: 1000 (for three 1s) + 100 (for the other 1)
 2 4 4 5 4   450:  400 (for three 4s) + 50 (for the 5)
In some languages, it is possible to mutate the input to the function. This is something that you should never do. If you mutate the input, you will not be able to pass all the tests.

*/
function score(dice) {
	let score = 0;
	const digits = [...dice].join('').toString();
	const one = digits.match(/1/g);
	if (one) {
		switch (one.length) {
			case 1:
				score += 100;
				break;
			case 2:
				score += 200;
				break;
			case 3:
				score += 1000;
				break;
			case 4:
				score += 1100;
				break;
			case 5:
				score += 1200;
		}
	}
	const two = digits.match(/2/g);
	if (two) {
		switch (two.length) {
			case 3:
			case 4:
			case 5:
				score += 200;
		}
	}
	const three = digits.match(/3/g);
	if (three) {
		switch (three.length) {
			case 3:
			case 4:
			case 5:
				score += 300;
		}
	}
	const four = digits.match(/4/g);
	if (four) {
		switch (four.length) {
			case 3:
			case 4:
			case 5:
				score += 400;
		}
	}
	const five = digits.match(/5/g);
	if (five) {
		switch (five.length) {
			case 1:
				score += 50;
				break;
			case 2:
				score += 100;
				break;
			case 3:
				score += 500;
				break;
			case 4:
				score += 550;
				break;
			case 5:
				score += 600;
		}
	}
	const six = digits.match(/6/g);
	if (six) {
		switch (six.length) {
			case 3:
			case 4:
			case 5:
				score += 600;
		}
	}
	return score;
}

console.log(score([2, 4, 4, 5, 4]));
console.log(score([1, 1, 1, 3, 1]));
console.log(score([5, 1, 3, 4, 1]));
console.log(score([2, 3, 4, 6, 2]));
console.log(score([4, 4, 4, 3, 3]));
console.log(score([2, 4, 4, 5, 4]));
console.log(score([6, 6, 6, 6, 6]));
