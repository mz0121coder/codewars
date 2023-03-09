/*DESCRIPTION:
Complete the solution so that the function will break up camel casing, using a space between words.

Example
"camelCasing"  =>  "camel Casing"
"identifier"   =>  "identifier"
""             =>  ""*/

function solution(string) {
	const letters = string.split('');
	for (let i = 1; i < letters.length; i++) {
		if (letters[i].match(/[A-Z]/)) {
			letters[i] = ` ${letters[i].match(/[A-Z]/)}`;
		}
	}
	return letters.join('');
}

console.log(solution('camelCasingTest'));
