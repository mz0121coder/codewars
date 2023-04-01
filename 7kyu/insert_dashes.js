/*Write a function insert_dash(num) / insertDash(num) / InsertDash(int num) that will insert dashes ('-') between each two odd digits in num. For example: if num is 454793 the output should be 4547-9-3. Don't count zero as an odd digit.

Note that the number will always be non-negative (>= 0).
*/

function insertDash(num) {
	let result = num.toString()[0];
	for (let i = 1; i < num.toString().length; i++) {
		if (
			`${num.toString()[i - 1]}${num.toString()[i]}`.match(/(1|3|5|7|9){2}/)
		) {
			result += `-${num.toString()[i]}`;
		} else {
			result += num.toString()[i];
		}
	}
	return result;
}

console.log(insertDash(454793)); //,'4547-9-3');
console.log(insertDash(123456)); //,'123456');
console.log(insertDash(1003567)); //,'1003-567');
