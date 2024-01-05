/*
You're fed up about changing the version of your software manually. Instead, you will create a little script that will make it for you.

Exercice
Create a function nextVersion, that will take a string in parameter, and will return a string containing the next version number.

For example:

Current           ->  Next version
"1.2.3"           ->  "1.2.4"
"0.9.9"           ->  "1.0.0"
"1"               ->  "2"
"1.2.3.4.5.6.7.8" ->  "1.2.3.4.5.6.7.9"
"9.9"             ->  "10.0"
Rules
All numbers, except the first one, must be lower than 10: if there are, you have to set them to 0 and increment the next number in sequence.

You can assume all tests inputs to be valid.
*/

/*
increment ending digit in version, then split by '.' to extract digits
loop backwards through digits, from second last item:
if digit[i + 1] === '10':
increment current digit, reassign digit[i + 1] to '0'
else break the loop
return digits.join('.')
*/

function nextVersion(version) {
	const digits = version.replace(/\d$/, n => `${Number(n) + 1}`).split('.');
	for (let i = digits.length - 2; i >= 0; i--) {
		if (digits[i + 1] === '10') {
			digits[i] = `${Number(digits[i]) + 1}`;
			digits[i + 1] = '0';
		} else {
			break;
		}
	}
	return digits.join('.');
}

console.log(nextVersion('1.2.3')); //,"1.2.4");
console.log(nextVersion('0.9.9')); //,"1.0.0");
console.log(nextVersion('1')); //,"2");
console.log(nextVersion('1.2.3.4.5.6.7.8')); //,"1.2.3.4.5.6.7.9");
console.log(nextVersion('9.9')); //,"10.0");
