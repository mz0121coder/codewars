/*
Create a function that takes a Roman numeral as its argument and returns its value as a numeric decimal integer. You don't need to validate the form of the Roman numeral.

Modern Roman numerals are written by expressing each decimal digit of the number to be encoded separately, starting with the leftmost digit and skipping any 0s. So 1990 is rendered "MCMXC" (1000 = M, 900 = CM, 90 = XC) and 2008 is rendered "MMVIII" (2000 = MM, 8 = VIII). The Roman numeral for 1666, "MDCLXVI", uses each letter in descending order.

Example:
"MM"      -> 2000
"MDCLXVI" -> 1666
"M"       -> 1000
"CD"      ->  400
"XC"      ->   90
"XL"      ->   40
"I"       ->    1
Help:
Symbol    Value
I          1
V          5
X          10
L          50
C          100
D          500
M          1,000
Courtesy of rosettacode.org
*/

/*
create an object to represent roman numerals and their values
start result as the input string
loop through keys in object:
if result starts with current key,
remove it from start and add its value to a total
continue until result is empty and then return total
*/

function solution(roman, num = 0) {
	const obj = {
		M: 1000,
		CM: 900,
		D: 500,
		CD: 400,
		C: 100,
		XC: 90,
		L: 50,
		XL: 40,
		X: 10,
		IX: 9,
		VIII: 8,
		VII: 7,
		VI: 6,
		V: 5,
		IV: 4,
		III: 3,
		II: 2,
		I: 1,
	};
	let res = roman;
	for (const key in obj) {
		if (res.startsWith(key)) {
			res = res.replace(key, '');
			num += obj[key];
		}
	}
	return res.length ? solution(res, num) : num;
}
