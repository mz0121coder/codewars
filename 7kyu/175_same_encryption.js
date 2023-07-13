/*
Task
John loves encryption. He can encrypt any string by the following algorithm:

take the first and the last letters of the word;
replace the letters between them with their number;
replace this number with the sum of it digits 
          until a single digit is obtained.```
Given two strings(`s1` and `s2`))//, return `true` if their encryption is the same, or `false` otherwise.

# Example

 For `s1 = "EbnhGfjklmjhgz" and s2 = "Eabcz"`, the result should be `true`.
"EbnhGfjklmjhgz" --> "E12z" --> "E3z" "Eabcz" --> "E3z" Their encryption is the same.```

Input/Output
[input] string s1
The first string to be encrypted.

s1.length >= 3

[input] string s2
The second string to be encrypted.

s2.length >= 3

[output] a boolean value
true if encryption is the same, false otherwise.
*/

// define function that takes in any string and replaces middle letters with their number
// then continues replacing the number with sum of its digits
// until a single number is reached, and returns the result
// call this function on both strings and check if result is same
function sameEncryption(s1, s2) {
	const encrypt = str => str[0] + str.slice(1, -1).length + str.slice(-1);
	const arr1 = [encrypt(s1)];
	const arr2 = [encrypt(s2)];

	const getDigitSum = str =>
		[...str.slice(1, -1)].reduce((acc, curr) => acc + Number(curr), 0);

	while (arr1.at(-1).length > 3) {
		const firstLetter = arr1.at(-1)[0];
		const lastLetter = arr1.at(-1).slice(-1);
		const digitSum = getDigitSum(arr1.at(-1));

		arr1.push(`${firstLetter}${digitSum}${lastLetter}`);
	}
	while (arr2.at(-1).length > 3) {
		const firstLetter = arr2.at(-1)[0];
		const lastLetter = arr2.at(-1).slice(-1);
		const digitSum = getDigitSum(arr2.at(-1));

		arr2.push(`${firstLetter}${digitSum}${lastLetter}`);
	}

	return arr1.at(-1) === arr2.at(-1);
}

console.log(sameEncryption('abc', 'abc')); //,true)
console.log(sameEncryption('abc', 'abd')); //,false)
console.log(sameEncryption('fKhjuytrdfcdc', 'flJc')); //,true)
console.log(sameEncryption('OKhjuytrdfcdc', 'OijK')); //,false)
