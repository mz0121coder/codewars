/*
Similarly to the previous kata, you will need to return a boolean value if the base string can be expressed as the repetition of one subpattern.

This time there are two small changes:

if a subpattern has been used, it will be present at least twice, meaning the subpattern has to be shorter than the original string;
the strings you will be given might or might not be created repeating a given subpattern, then shuffling the result.
For example:

hasSubpattern("a") === false; //no repeated shorter sub-pattern, just one character
hasSubpattern("aaaa") === true; //just one character repeated
hasSubpattern("abcd") === false; //no repetitions
hasSubpattern("babababababababa") === true; //repeated "ba"
hasSubpattern("bbabbaaabbaaaabb") === true; //same as above, just shuffled
Strings will never be empty and can be composed of any character (just consider upper- and lowercase letters as different entities) and can be pretty long (keep an eye on performances!).
*/

/*
Create object to count occurrences of characters in string
Loop through keys in object, adding values to a new set
Reassign min value every time a lower value is found

Loop from 2 up to min:
return true if every digit in frequencies set is divisible by current number

return false otherwise
*/

function hasSubpattern(string) {
	const map = {};
	for (const char of string) {
		if (char in map) {
			map[char]++;
		} else {
			map[char] = 1;
		}
	}

	const frequencies = new Set();
	let min = Infinity;
	for (const key in map) {
		if (map[key] < min) min = map[key];
		frequencies.add(map[key]);
	}

	for (let num = 2; num <= min; num++) {
		if ([...frequencies].every(el => el % num === 0)) return true;
	}
	return false;
}

console.log(hasSubpattern('a')); //, false);
console.log(hasSubpattern('aaaa')); //, true);
console.log(hasSubpattern('abcd')); //, false);
console.log(hasSubpattern('babababababababa')); //, true);
console.log(hasSubpattern('bbabbaaabbaaaabb')); //, true);
console.log(hasSubpattern('123a123a123a')); //, true);
console.log(hasSubpattern('123A123a123a')); //, false);
console.log(hasSubpattern('12aa13a21233')); //, true);
console.log(hasSubpattern('12aa13a21233A')); //, false);
console.log(hasSubpattern('abcdabcaccd')); //, false);
