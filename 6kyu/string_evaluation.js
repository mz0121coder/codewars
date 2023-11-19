/*
Evaluate the given string with the given conditons.

The conditions will be passed in an array and will be formatted like this:

{symbol or digit}{comparison operator}{symbol or digit}
Return the results in an array.

The characters in the conditions will always be in the string. Characters in the string are chosen from ascii letters + @#$%^&*()_{}[]

Example
input string: "aab#HcCcc##l#"
conditions: ["a<b", "#==4", "c>=C", "H!=a"]
The conditions in this example array can be interpreted as:

"a<b": The number of times "a" occurs in the string should be less than the number of times "b" occurs in the string
"#==4": "#" should occur exactly 4 times in the string
"c>=C": "c" should occur greater than or equal to the number of times "C" occurs
"H!=a": The number of times "H" occurs should not equal the number of times "a" occurs
In this example condition 1 is false and 2, 3, 4 are true. So the return value will be an array as such:

[False, True, True, True]
*/

function string_evaluation(string, condition) {
	const result = [];
	condition.forEach(el => {
		// extract items and condition to evaluate
		const [item1, item2] = [el[0], el.slice(-1)];
		const eval = el.slice(1, -1);
		// escape special characters in regex
		const escape = str => (/[\^\[\]\(\)\.\*\?\{\}\$]/.test(str) ? '\\' : '');
		// match items
		const count1 = /\d/.test(item1)
			? Number(item1)
			: string.match(new RegExp(escape(item1) + item1, 'g')).length;
		const count2 = /\d/.test(item2)
			? Number(item2)
			: string.match(new RegExp(escape(item2) + item2, 'g')).length;
		// result of comparison
		switch (eval) {
			case '<':
				result.push(count1 < count2);
				break;
			case '<=':
				result.push(count1 <= count2);
				break;
			case '==':
				result.push(count1 == count2);
				break;
			case '!=':
				result.push(count1 != count2);
				break;
			case '>':
				result.push(count1 > count2);
				break;
			case '>=':
				result.push(count1 >= count2);
		}
	});
	return result;
}

console.log(
	string_evaluation('aab#HcCcc##l#', ['a<b', '#==4', 'c>=C', 'H!=a'])
); //,[false,true,true,true]);
console.log(
	string_evaluation('abc#$%KDAyyaa@@@', ['#>@', 'A==2', 'a>A', '$!=2'])
); //,[false,false,true,true]);
console.log(
	string_evaluation('abb', [
		'a>b',
		'b==a',
		'b<=a',
		'b>a',
		'b!=b',
		'a==1',
		'b==1',
	])
); //,[false,false,false,true,false,true,false]);
