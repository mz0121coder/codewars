// define function that takes in a string to calculate score
// function defines variable score that starts at 0
// if string includes '!' find number of matches, multiply by 2, add to score
// if string includes '?' find number of matches, multiply by 3, add to score
// return score
// call this function on left and right arguments to calculate their score
// return 'Left' is left score is greater
// return 'Right' if right score is greater
// return 'Balance' if scores are balanced
/*
Each exclamation mark's weight is 2; each question mark's weight is 3. Putting two strings left and right on the balance - are they balanced?

If the left side is more heavy, return "Left"; if the right side is more heavy, return "Right"; if they are balanced, return "Balance".

Examples
"!!", "??"     -->  "Right"
"!??", "?!!"   -->  "Left"
"!?!!", "?!?"  -->  "Left"
"!!???!????", "??!!?!!!!!!!"  -->  "Balance"
*/

function balance(left, right) {
	const getScore = str => {
		let score = 0;
		if (str.includes('!')) {
			score += str.match(/!/g).length * 2;
		}
		if (str.includes('?')) {
			score += str.match(/\?/g).length * 3;
		}
		return score;
	};
	const leftScore = getScore(left);
	const rightScore = getScore(right);
	return leftScore > rightScore
		? 'Left'
		: rightScore > leftScore
		? 'Right'
		: 'Balance';
}

console.log(balance('!!', '??')); // , "Right")
console.log(balance('!??', '?!!')); // , "Left")
console.log(balance('!?!!', '?!?')); // , "Left")
console.log(balance('!!???!????', '??!!?!!!!!!!')); // , "Balance")
