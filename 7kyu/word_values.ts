/*
Given a string "abc" and assuming that each letter in the string has a value equal to its position in the alphabet, our string will have a value of 1 + 2 + 3 = 6. This means that: a = 1, b = 2, c = 3 ....z = 26.

You will be given a list of strings and your task will be to return the values of the strings as explained above multiplied by the position of that string in the list. For our purpose, position begins with 1.

nameValue ["abc","abc abc"] should return [6,24] because of [ 6 * 1, 12 * 2 ]. Note how spaces are ignored.

"abc" has a value of 6, while "abc abc" has a value of 12. Now, the value at position 1 is multiplied by 1 while the value at position 2 is multiplied by 2.

Input will only contain lowercase characters and spaces.

Good luck!
*/
/*
Define helper method that takes in a string and returns sum of its characters' positions in alphabet
Call method on each string in arr, multiply result by index + 1
*/

export const wordValue = (arr: string[]) => {
	const alphabet = 'abcdefghijklmnopqrstuvwxyz';
	const getScore = (word: string) =>
		[...word].reduce((sum, char) => {
			if (/[a-z]/.test(char)) sum += alphabet.indexOf(char) + 1;
			return sum;
		}, 0);
	return arr.map((word, index) => getScore(word) * (index + 1));
};

console.log(wordValue(['codewars', 'abc', 'xyz'])); //, [88, 12, 225]);
console.log(wordValue(['abc abc', 'abc abc', 'abc', 'abc'])); //, [12, 24, 18, 24]);
console.log(wordValue(['abc', 'abc', 'abc', 'abc'])); //, [6, 12, 18, 24]);
console.log(
	wordValue(['abcdefghijklmnopqrstuvwxyz', 'stamford bridge', 'haskellers'])
); //, [351, 282, 330]);
console.log(wordValue(['i love coding', 'better than pizza', 'i got this'])); //, [115, 382, 321]);
console.log(
	wordValue([
		'mercury',
		'venus',
		'earth mars',
		'jupiter saturn',
		'uranus neptune',
	])
); //, [103, 162, 309, 768, 945]);
console.log(wordValue(['a cup', 'some tea', 'more coffee', 'one glass'])); //, [41, 156, 273, 368]);
console.log(wordValue(['a', 'e', 'i', 'o', 'u', 'the end'])); //, [1, 10, 27, 60, 105, 336]);
console.log(wordValue(['coding', 'better pizza', 'i got this too'])); //, [52, 296, 471]);
