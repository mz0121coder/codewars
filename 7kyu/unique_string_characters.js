/*DESCRIPTION:
In this Kata, you will be given two strings a and b and your task will be to return the characters that are not common in the two strings.

For example:

solve("xyab","xzca") = "ybzc" 
--The first string has 'yb' which is not in the second string. 
--The second string has 'zc' which is not in the first string. 
Notice also that you return the characters from the first string concatenated with those from the second string.

More examples in the tests cases.

Good luck!*/

function solve(a, b) {
	const uniqueChars = (x, y) =>
		x
			.split('')
			.filter(l => !y.includes(l))
			.join('');
	return uniqueChars(a, b) + uniqueChars(b, a);
}

console.log(solve('xyab', 'xzca')); //,"ybzc");
console.log(solve('xyabb', 'xzca')); //,"ybbzc");
console.log(solve('abcd', 'xyz')); //,"abcdxyz");
console.log(solve('xxx', 'xzca')); //,"zca");
