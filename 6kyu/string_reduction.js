/*
In this Kata, we are going to see how a Hash (or Map or dict) can be used to keep track of characters in a string.

Consider two strings "aabcdefg" and "fbd". How many characters do we have to remove from the first string to get the second string? Although not the only way to solve this, we could create a Hash of counts for each string and see which character counts are different. That should get us close to the answer. I will leave the rest to you.

For this example, solve("aabcdefg","fbd") = 5. Also, solve("xyz","yxxz") = 0, because we cannot get second string from the first since the second string is longer.

More examples in the test cases.

Good luck!
*/

/*
create a hash map for both strings
loop through mapA:
for each key that isn't in mapB:
add its value to a total
for each key that is also in mapB:
check diff in values from mapA and mapB:
if diff > 0 add diff to total
if diff < 0 return 0
*/

function solve(a, b) {
	const createMap = str =>
		[...str].reduce((obj, char) => {
			obj[char] = char in obj ? obj[char] + 1 : 1;
			return obj;
		}, {});
	const mapA = createMap(a);
	const mapB = createMap(b);

	let total = 0;
	for (const char in mapA) {
		if (!(char in mapB)) total += mapA[char];
		if (char in mapB) {
			const diff = mapA[char] - mapB[char];
			if (diff > 0) total += diff;
			if (diff < 0) return 0;
		}
	}
	return total;
}

console.log(solve('xyz', 'yxz')); // 0
console.log(solve('abcxyz', 'ayxz')); // 2
console.log(solve('abcdexyz', 'yxz')); // 5
console.log(solve('axyyz', 'yxxz')); // 0
console.log(solve('abdegfg', 'ffdb')); // 0
console.log(solve('aabcdefg', 'fbd')); // 5
console.log(solve('aabcdefg', 'fdb')); // 5
