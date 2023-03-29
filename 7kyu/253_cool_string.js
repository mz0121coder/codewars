/*DESCRIPTION:
Task
Let's call a string cool if it is formed only by Latin letters and no two lowercase and no two uppercase letters are in adjacent positions. Given a string, check if it is cool.

Input/Output
[input] string s

A string that contains uppercase letters, lowercase letters numbers and spaces.

1 ≤ s.length ≤ 20.

[output] a boolean value

true if s is cool, false otherwise.

Example
For s = "aQwFdA", the output should be true

For s = "aBC", the output should be false;

For s = "AaA", the output should be true;

For s = "q q", the output should be false.*/

const coolString = s =>
	!s.match(/\W|\d|_|[A-Z]{2,}|[a-z]{2,}/) && s.length > 0 && s.length < 21;

console.log(coolString('aQwFdA')); //,true)
console.log(coolString('aBC')); //,false)
console.log(coolString('AaA')); //,true)
console.log(coolString('q q')); //,false)
console.log(coolString('wWw1')); //,false)
console.log(coolString('2')); //,false)
console.log(coolString('aAaAaAa')); //,true)
console.log(coolString('    ')); //,false)

function getDropdownMenu() {
	return (
		<ul id='dropdown-menu' className='dropdown'>
			<li>Profile</li>
			<li>Orders</li>
			<li className='separator'></li>
			<li>Logout</li>
		</ul>
	);
}
