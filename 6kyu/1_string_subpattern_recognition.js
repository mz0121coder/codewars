/*
In this kata you need to build a function to return either true/True or false/False if a string can be seen as the repetition of a simpler/shorter subpattern or not.

For example:

hasSubpattern("a") === false; //no repeated pattern
hasSubpattern("aaaa") === true; //created repeating "a"
hasSubpattern("abcd") === false; //no repeated pattern
hasSubpattern("abababab") === true; //created repeating "ab"
hasSubpattern("ababababa") === false; //cannot be entirely reproduced repeating a pattern
Strings will never be empty and can be composed of any character (just consider upper- and lowercase letters as different entities) and can be pretty long (keep an eye on performances!).
*/

// regex 1 liner
// const hasSubpattern = string => /^(.*)\1+$/.test(string);

function hasSubpattern(string) {
	for (let i = 1; i <= string.length / 2; i++) {
		const substring = string.slice(0, i);
		const repetitions = string.length / substring.length;
		if (string === substring.repeat(repetitions)) return true;
	}
	return false;
}

console.log(hasSubpattern('a')); //, false);
console.log(hasSubpattern('aaaa')); //, true);
console.log(hasSubpattern('abcd')); //, false);
console.log(hasSubpattern('abababab')); //, true);
console.log(hasSubpattern('ababababa')); //, false);
console.log(hasSubpattern('123a123a123a')); //, true);
console.log(hasSubpattern('123A123a123a')); //, false);
console.log(hasSubpattern('abbaabbaabba')); //, true);
console.log(hasSubpattern('abbabbabba')); //, false);
console.log(hasSubpattern('abcdabcabcd')); //, false);
