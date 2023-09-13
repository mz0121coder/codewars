/*
Given a string, you progressively need to concatenate the first letter from the left and the first letter to the right and "1", then the second letter from the left and the second letter to the right and "2", and so on.

If the string's length is odd drop the central element.

For example:

charConcat("abcdef")    == 'af1be2cd3'
charConcat("abc!def")   == 'af1be2cd3' // same result
*/

function charConcat(string) {
	let result = '';
	let right = string.length;
	let num = 0;
	for (let left = 0; left < Math.floor(string.length / 2); left++) {
		num++;
		right--;
		result += `${string[left]}${string[right]}${num}`;
	}
	return result;
}

console.log(charConcat('abc def')); //,'af1be2cd3',"Should work for example test");
console.log(charConcat('CodeWars')); //,'Cs1or2da3eW4',"Should work for 'CodeWars'");
