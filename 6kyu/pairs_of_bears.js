/*
In order to prove it's success and gain funding, the wilderness zoo needs to prove to environmentalists that it has x number of mating pairs of bears.

Task:
You must check within a string (s) to find all of the mating pairs, returning a list/array of the string containing valid mating pairs and a boolean indicating whether the total number of bears is greater than or equal to x.

Rules for a 'valid' mating pair:
Bears are either 'B' (male) or '8' (female),
Bears must be together in male/female pairs 'B8' or '8B',
Mating pairs must involve two distinct bears each ('B8B' may look fun, but does not count as two pairs).
Return an array containing a string of the valid mating pairs available (empty string if there are no pairs), and a boolean indicating whether the total number of bears is greater than or equal to x. , e.g:

(6, 'EvHB8KN8ik8BiyxfeyKBmiCMj') ---> ['B88B', false]; in this example, the number of bears(=4) is lesser than the given value of x(=6)
*/

/*
define 2 empty strings and a count
loop through s
if char is 8 or B and str1 doesn't end with char:
add char to str1
if char isn't 8 or B, empty str1

if str1 == 8B or B8, add str1 to str2, 
increase count by 1
return [str2, count >= x]
*/

function bears(x, s) {
	let str = '';
	let pairs = '';
	let count = 0;

	for (const char of s) {
		if (/[8B]/.test(char) && !str.endsWith(char)) str += char;
		if (/[^8B]/.test(char)) str = '';
		if (/^(8B|B8)$/.test(str)) {
			pairs += str;
			str = '';
			count++;
		}
	}

	return [pairs, count >= x];
}

console.log(bears(7, '8j8mBliB8gimjB8B8jlB')); //, ["B8B8B8",false]);
console.log(bears(3, '88Bifk8hB8BB8BBBB888chl8BhBfd')); //, ["8BB8B8B88B",true]);
console.log(bears(8, '8')); //, ["",false]);
