/*
In this Kata you have to create a function,named insertMissingLetters,that takes in a string and outputs the same string processed in a particular way.

The function should insert only after the first occurrence of each character of the input string, all the alphabet letters that:

-are NOT in the original string
-come after the letter of the string you are processing

Each added letter should be in uppercase, the letters of the original string will always be in lowercase.

Example:

input: "holly"

missing letters: "a,b,c,d,e,f,g,i,j,k,m,n,p,q,r,s,t,u,v,w,x,z"

output: "hIJKMNPQRSTUVWXZoPQRSTUVWXZlMNPQRSTUVWXZlyZ"

You don't need to validate input, the input string will always contain a certain amount of lowercase letters (min 1 / max 50).
*/

/*
define a new set
result string starts empty
loop through str, for each char:
if set doesn't have char, add it to result
followed by alphabet after index of char (uppercase)
also remove chars in alphabet that are in str
add char to set

return result
*/

function insertMissingLetters(str) {
	const set = new Set();
	const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

	let result = '';
	for (const char of str) {
		const idx = alphabet.indexOf(char.toUpperCase());
		result += set.has(char)
			? char
			: `${char}${alphabet
					.slice(idx + 1)
					.replace(/[A-Z]/g, x => (str.toUpperCase().includes(x) ? '' : x))}`;
		set.add(char);
	}
	return result;
}

console.log(insertMissingLetters('hello')); // "hIJKMNPQRSTUVWXYZeFGIJKMNPQRSTUVWXYZlMNPQRSTUVWXYZloPQRSTUVWXYZ"
