/*
Task
You are given a string s.

Let us call a substring of s with 2 or more adjacent identical letters a group (such as "aa", "bbb", "cccc"...).

Let us call a substring of s with 2 or more adjacent groups a big group (such as "aabb","bbccc"...).

Your task is to count the number of big groups in the given string.

Examples
"ccccoodeffffiiighhhhhhhhhhttttttts" => 3

The groups are "cccc", "oo", "ffff", "iii", "hhhhhhhhhh", "ttttttt".

The big groups are "ccccoo", "ffffiii", "hhhhhhhhhhttttttt".

"gztxxxxxggggggggggggsssssssbbbbbeeeeeeehhhmmmmmmmitttttttlllllhkppppp" => 2

The big groups are :

"xxxxxggggggggggggsssssssbbbbbeeeeeeehhhmmmmmmm" and "tttttttlllll"

"soooooldieeeeeer" => 0

There is no big group.

Input/Output
[input] string s

A string of lowercase Latin letters.

[output] an integer

The number of big groups.
*/

/*
Start lastChar and groups as empty strings, and count at 1
loop through s:
if char equals lastChar:
	increment count
	if i is last iteration:
	add `-{count}-` to groups
else
	add `-{count}-` to groups
	reset count to 1
	reassign lastChar to current char from loop 

Replace all '-1-' with ' '
split by spaces
filter groups -> big groups only
return length of filtered groups
*/

function repeatAdjacent(s) {
	let lastChar = '';
	let groups = '';
	let count = 1;

	for (let i = 0; i < s.length; i++) {
		const char = s[i];
		if (char === lastChar) {
			count++;
			if (i === s.length - 1) groups += `-${count}-`;
		} else {
			groups += `-${count}-`;
			count = 1;
			lastChar = char;
		}
	}

	return groups
		.replaceAll('-1-', ' ')
		.split(/\s+/)
		.filter(group => group.match(/[0-9]+/g)?.length > 1).length;
}

/*
Regex 1 liner by user: myjinxin2015
function repeatAdjacent(s) {
  return (s.match(/((.)\2+(?!\2)){2,}/g)||[]).length
}
*/
