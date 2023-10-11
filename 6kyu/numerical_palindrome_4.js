/*
A palindrome is a word, phrase, number, or other sequence of characters which reads the same backward as forward. Examples of numerical palindromes are:

2332
110011
54322345

For a given number num, return its closest numerical palindrome which can either be smaller or larger than num. If there are 2 possible values, the larger value should be returned. If num is a numerical palindrome itself, return it.

For this kata, single digit numbers will NOT be considered numerical palindromes.

Also, you know the drill - be sure to return "Not valid" if the input is not an integer or is less than 0.

palindrome(8) => 11
palindrome(281) => 282 
palindrome(1029) => 1001
palindrome(1221) => 1221
palindrome("1221") => "Not valid"
*/

function palindrome(num) {
	if (typeof num !== 'number' || num < 0) return 'Not valid';
	if (num < 10) return 11;

	let upperPalindrome;
	let upperDistance = -1;
	let lowerPalindrome;
	let lowerDistance = -1;

	const isPal = n => n.toString().split('').reverse().join('') === n.toString();

	for (let i = num; i < Infinity; i++) {
		upperDistance++;
		if (isPal(i)) {
			upperPalindrome = i;
			break;
		}
	}

	for (let x = num; x >= 10; x--) {
		lowerDistance++;
		if (isPal(x)) {
			lowerPalindrome = x;
			break;
		}
	}
	return lowerDistance < upperDistance ? lowerPalindrome : upperPalindrome;
}

console.log(palindrome(8)); //,11);
console.log(palindrome(281)); //,282);
console.log(palindrome(1029)); //,1001);
console.log(palindrome(1221)); //,1221);
console.log(palindrome('BGHHGB')); //,"Not valid");
console.log(palindrome('11029')); //,"Not valid");
console.log(palindrome(-1029)); //,"Not valid");

function cookingTime(eggs) {
	if (eggs === 0) {
		return 0;
	} else if (eggs <= 8) {
		return 5;
	} else {
		let eggsToBoil = eggs;
		for (let time = 5; time < Infinity; time += 5) {
			let reduction = eggsToBoil >= 8 ? 8 : eggsToBoil;
			eggsToBoil -= reduction;
			if (eggsToBoil === 0) return time;
		}
	}
}
