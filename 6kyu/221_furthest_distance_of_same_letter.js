/*
Task
Given a string s of lowercase letters ('a' - 'z'), get the maximum distance between two same letters, and return this distance along with the letter that formed it.

If there is more than one letter with the same maximum distance, return the one that appears in s first.

Input/Output
[input] string s
A string of lowercase Latin letters, where at least one letter appears twice.

[output] a string
The letter that formed the maximum distance and the distance itself.

Example
For s = "fffffahhhhhhaaahhhhbhhahhhhabxx", the output should be "a23".

The maximum distance is formed by the character 'a' from index 5 to index 27 (0-based). Therefore, the answer is "a23".
*/

function distSameLetter(str) {
	let maxDistance = 0;
	let maxLetter = '';
	const distances = {};

	for (let i = 0; i < str.length; i++) {
		const letter = str[i];
		if (!(letter in distances)) {
			distances[letter] = [i, i];
		} else {
			distances[letter][1] = i;
			const distance = distances[letter][1] - distances[letter][0];
			if (distance > maxDistance) {
				maxDistance = distance;
				maxLetter = letter;
			}
		}
	}
	return `${maxLetter}${maxDistance + 1}`;
}

console.log(distSameLetter('fffffahhhhhhaaahhhhbhhahhhhabxx')); //,"a23")

console.log(distSameLetter('ucabcabcabcdfxhuizfgrsuixacbcx')); //,"c28")

console.log(distSameLetter('iaufzhaifxhuzofghabcbacdbuzoxih')); //,"i30")

console.log(distSameLetter('axaxfaaiiiofizxuiox')); //,"x18")

console.log(distSameLetter('fxfaufhacaaacaaabbbabaddb')); //,"a19")

console.log(distSameLetter('haaafhahhhuuuiuuuuiiifxxx')); //,"f18")

console.log(distSameLetter('fxauf')); //,"f5")
