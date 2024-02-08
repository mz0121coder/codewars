/*
Complete the function that takes a string as an input, and return a list of all the unpaired characters (i.e. they show up an odd number of times in the string), in the order they were encountered as an array.

In case of multiple appearances to choose from, take the last occurence of the unpaired character.

Notes:

A wide range of characters is used, and some of them may not render properly in your browser.
Your solution should be linear in terms of string length to pass the last test.
Examples
"Hello World"   -->  ["H", "e", " ", "W", "r", "l", "d"]
"Codewars"      -->  ["C", "o", "d", "e", "w", "a", "r", "s"]
"woowee"        -->  []
"wwoooowweeee"  -->  []
"racecar"       -->  ["e"]
"Mamma"         -->  ["M"]
"Mama"          -->  ["M", "m"]
*/

/*
Use a hash map to count occurrences of characters in string
Loop through keys in hash map, 
if value is odd, add key to a result array
return result array, sorted by last index of the characters it contains (low to high)
*/

function oddOneOut(str) {
	const map = {};
	for (const char of str) map[char] = char in map ? map[char] + 1 : 1;
	return Object.keys(map)
		.filter(key => map[key] % 2)
		.sort((a, b) => str.lastIndexOf(a) - str.lastIndexOf(b));
}

console.log(oddOneOut('Hello World')); // ["H", "e", " ", "W", "r", "l", "d"]);
console.log(oddOneOut('Codewars')); // ["C", "o", "d", "e", "w", "a", "r", "s"]);
console.log(oddOneOut('woowee'), []);
console.log(oddOneOut('wwoooowweeee'), []);
console.log(oddOneOut('racecar')); // ["e"]);
console.log(oddOneOut('Mamma')); // ["M"]);
console.log(oddOneOut('Mama')); // ["M", "m"]);
console.log(oddOneOut('¼ x 4 = 1')); // ["¼", "x", "4", "=", "1"]);
console.log(oddOneOut('¼ x 4 = 1 and ½ x 4 = 2')); // ["¼", "1", "a", "n", "d", "½", "2"]);
