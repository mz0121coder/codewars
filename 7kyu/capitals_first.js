/*
Create a function that takes an input String and returns a String, where all the uppercase words of the input String are in front and all the lowercase words at the end. The order of the uppercase and lowercase words should be the order in which they occur.

If a word starts with a number or special character, skip the word and leave it out of the result.

Input String will not be empty.

For an input String: "hey You, Sort me Already!" the function should return: "You, Sort Already! hey me"
*/

function capitalsFirst(str) {
	const words = str.split(' ').filter(word => /^[a-z]/i.test(word));
	const uppercase = [];
	const lowercase = [];
	words.forEach(word => {
		if (/^[A-Z]/.test(word)) {
			uppercase.push(word);
		} else {
			lowercase.push(word);
		}
	});
	return [...uppercase, ...lowercase].join(' ');
}

console.log(capitalsFirst('5u6cqm 3u 4ld at ek6s Hf nu'));
