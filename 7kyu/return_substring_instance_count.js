/*
Complete the solution so that it returns the number of times the search_text is found within the full_text.

Usage example:

solution('aa_bb_cc_dd_bb_e', 'bb') # should return 2 since bb shows up twice
solution('aaabbbcccc', 'bbb') # should return 1
Overlap is not permitted : "aaa" contains 1 instance of "aa", not 2.
*/

// without regex
// function solution(fullText, searchText) {
// 	let count = 0;
// 	while (fullText.includes(searchText)) {
// 		fullText = fullText.replace(searchText, '');
// 		count++;
// 	}
// 	return count;
// }

// with regex
// const solution = (fullText, searchText) =>
// 	fullText.match(new RegExp(searchText, 'g'))?.length ?? 0;

// more concise
const solution = (fullText, searchText) =>
	fullText.split(searchText).length - 1;

console.log(solution('abcdeb', 'b')); // 2
console.log(solution('abc', 'b')); // 1
console.log(solution('abbc', 'bb')); // 1
