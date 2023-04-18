/*Let's create some scrolling text!

Your task is to complete the function which takes a string, and returns an array with all possible rotations of the given string, in uppercase.

Example
scrollingText("codewars") should return:

[ "CODEWARS",
  "ODEWARSC",
  "DEWARSCO",
  "EWARSCOD",
  "WARSCODE",
  "ARSCODEW"
  "RSCODEWA",
  "SCODEWAR" ]
*/

function scrollingText(text) {
	const result = [text.toUpperCase()];
	for (let i = 1; i <= text.length; i++) {
		let newOrder = result[i - 1].slice(1) + result[i - 1][0];
		if (!result.includes(newOrder)) {
			result.push(newOrder);
		}
	}
	return result;
}

console.log(scrollingText('abc')); //, ["ABC","BCA","CAB"])
