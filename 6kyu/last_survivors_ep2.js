/*
Substitute two equal letters by the next letter of the alphabet (two letters convert to one):

"aa" => "b", "bb" => "c", .. "zz" => "a".
The equal letters do not have to be adjacent.
Repeat this operation until there are no possible substitutions left.
Return a string.

Example:

let str = "zzzab"
    str = "azab"
    str = "bzb"
    str = "cz"
return "cz"
Notes
The order of letters in the result is not important.
The letters "zz" transform into "a".
There will only be lowercase letters.
*/

function lastSurvivors(str) {
	//   check for 2 or more of same letter
	const has2 = s =>
		[...s].some(char => s.indexOf(char) !== s.lastIndexOf(char));
	const alphabet = 'abcdefghijklmnopqrstuvwxyz'.repeat(2);
	// count instances of each letter
	let result = '';
	const obj = {};
	str.split('').forEach(char => {
		if (char in obj) {
			obj[char]++;
		} else {
			obj[char] = 1;
		}
	});
	// change result based on letter counts
	Object.keys(obj).forEach(char => {
		const index = alphabet.indexOf(char);
		if (obj[char] >= 2) {
			result += alphabet[index + 1];
			result += char.repeat(obj[char] - 2);
		} else {
			result += char;
		}
	});
	// repeat function until no more doubles
	return has2(result) ? lastSurvivors(result) : result;
}

console.log(lastSurvivors(`abaa`));
console.log(lastSurvivors(`zzab`));
console.log(
	lastSurvivors(
		`xsdlafqpcmjytoikojsecamgdkehrqqgfknlhoudqygkbxftivfbpxhxtqgpkvsrfflpgrlhkbfnyftwkdebwfidmpauoteahyh`
	)
);
