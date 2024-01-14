/*
Implement the function longest(array,n) where you will be given an array of strings and then return the nth longest string in that array. For example         arr = ['Hello','World','Codewars','Katas']  with n = 3  should return 'World' because 'Codewars' length = 8 , 'Hello' length = 5, so that is the 2nd longest word and then 'World' (although also word length of 5, 'World' is after 'Hello' in the array). When words have the same lengths, treat them in the order in which they exist in the array. Array will never be empty and n > 0 always.
*/

function longest(arr, n) {
	const lengths = [...new Set(arr.map(s => s.length))].sort((a, b) => b - a);
	const strings = [];
	for (const num of lengths) {
		const matches = arr.filter(s => s.length === num);
		strings.push(...matches);
	}
	return strings[n - 1];
}

console.log(longest(['Hello', 'World', 'Codewars', 'Katas'], 3)); // 'World'
console.log(longest(['Hello', 'World', 'Codewars', 'Katas'], 4)); // 'Katas'
console.log(
	longest(['aa', 'bb', 'cc', 'dd', 'eee', 'b', 'f', 'ff', 'hhh', 'gggg'], 4)
); // 'aa'
console.log(longest(['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'k'], 1)); // 'a'
console.log(
	longest(['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'k', 'l'], 1)
); // 'a'
