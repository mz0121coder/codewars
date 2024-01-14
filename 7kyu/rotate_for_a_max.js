/*
Let us begin with an example:

Take a number: 56789. Rotate left, you get 67895.

Keep the first digit in place and rotate left the other digits: 68957.

Keep the first two digits in place and rotate the other ones: 68579.

Keep the first three digits and rotate left the rest: 68597. Now it is over since keeping the first four it remains only one digit which rotated is itself.

You have the following sequence of numbers:

56789 -> 67895 -> 68957 -> 68579 -> 68597

and you must return the greatest: 68957.

Task
Write function max_rot(n) which given a positive integer n returns the maximum number you got doing rotations similar to the above example.

So max_rot (or maxRot or ... depending on the language) is such as:

max_rot(56789) should return 68957

max_rot(38458215) should return 85821534
*/

function maxRot(n) {
	let max = n;
	let num = `${n}`;
	const rotate = str => str.slice(1) + str[0];
	for (let i = 0; i < num.length; i++) {
		num = `${num.slice(0, i)}${rotate(num.slice(i))}`;
		if (Number(num) > max) max = Number(num);
	}
	return max;
}

console.log(maxRot(38458215)); // 85821534
console.log(maxRot(195881031)); // 988103115
console.log(maxRot(896219342)); // 962193428
console.log(maxRot(69418307)); // 94183076
