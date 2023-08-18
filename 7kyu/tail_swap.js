/*
You'll be given a list of two strings, and each will contain exactly one colon (":") in the middle (but not at beginning or end). The length of the strings, before and after the colon, are random.

Your job is to return a list of two strings (in the same order as the original list))//, but with the characters after each colon swapped.

Examples
["abc:123", "cde:456"]  -->  ["abc:456", "cde:123"]
["a:12345", "777:xyz"]  -->  ["a:xyz", "777:12345"]
*/

/*
transform array
for first string, return characters before ':' and characters from ':' and onwards in second string
for second string, return characters before ':' and characters from ':' and onwards in first string
*/

const tailSwap = arr =>
	arr.map((str, i) =>
		i === 0
			? `${str.slice(0, str.indexOf(':'))}${arr[1].slice(arr[1].indexOf(':'))}`
			: `${str.slice(0, str.indexOf(':'))}${arr[0].slice(arr[0].indexOf(':'))}`
	);

console.log(tailSwap(['abc:123', 'cde:456'])); //, ['abc:456', 'cde:123']);
console.log(tailSwap(['a:12345', '777:xyz'])); //, ['a:xyz', '777:12345']);
