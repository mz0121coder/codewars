/*
This kata requires you to write a function which merges two strings together. It does so by merging the end of the first string with the start of the second string together when they are an exact match.

"abcde" + "cdefgh" => "abcdefgh"
"abaab" + "aabab" => "abaabab"
"abc" + "def" => "abcdef"
"abc" + "abc" => "abc"
NOTE: The algorithm should always use the longest possible overlap.
*/

const mergeStrings = (first: string, second: string): string => {
	let index = second.length;
	while (!first.endsWith(second.slice(0, index))) {
		index--;
	}
	return `${first}${second.slice(index)}`;
};
