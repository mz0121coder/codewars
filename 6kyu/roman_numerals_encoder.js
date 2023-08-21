/*
Create a function taking a positive integer between 1 and 3999 (both included) as its parameter and returning a string containing the Roman Numeral representation of that integer.

Modern Roman numerals are written by expressing each digit separately starting with the left most digit and skipping any digit with a value of zero. In Roman numerals 1990 is rendered: 1000=M, 900=CM, 90=XC; resulting in MCMXC. 2008 is written as 2000=MM, 8=VIII; or MMVIII. 1666 uses each Roman symbol in descending order: MDCLXVI.

Example:

solution(1000); // should return 'M'
Help:

Symbol    Value
I          1
V          5
X          10
L          50
C          100
D          500
M          1,000
Remember that there can't be more than 3 identical symbols in a row.

More about roman numerals - http://en.wikipedia.org/wiki/Roman_numerals
*/

function solution(number) {
	const roman = {
		1000: 'M',
		900: 'CM',
		500: 'D',
		400: 'CD',
		100: 'C',
		90: 'XC',
		50: 'L',
		40: 'XL',
		10: 'X',
		9: 'IX',
		5: 'V',
		4: 'IV',
		1: 'I',
	};
	let total = number;
	let result = '';
	if (total > 0) {
		Object.keys(roman)
			.reverse()
			.forEach(key => {
				while (total >= key) {
					total -= key;
					result += roman[key];
				}
			});
	}
	return result;
}

console.log(solution(1)); //, 'I', '1 should return "I"');
console.log(solution(2)); //, 'II', '2 should return "II"');
console.log(solution(3)); //, 'III', '3 should return "III"');
console.log(solution(4)); //, 'IV', '4 should return "IV"');
console.log(solution(5)); //, 'V', '5 should return "V"');
console.log(solution(9)); //, 'IX', '9 should return "IX"');
console.log(solution(10)); //, 'X', '10 should return "X"');
console.log(solution(11)); //, 'XI', '11 should return "XI"');
console.log(solution(19)); //, 'XIX', '19 should return "XIX"');
console.log(solution(22)); //, 'XXII', '22 should return "XXII"');
console.log(solution(15)); //, 'XV', '15 should return "XV"');

console.log(solution(1000)); //, 'M', '1000 should, "M"')
console.log(solution(1001)); //, 'MI', '1001 should, "MI"')
console.log(solution(1990)); //, 'MCMXC', '1990 should, "MCMXC"')
console.log(solution(2007)); //, 'MMVII', '2007 should, "MMVII"')
console.log(solution(2008)); //, 'MMVIII', '2008 should, "MMVIII"')
