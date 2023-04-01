/*DESCRIPTION:
This is a follow up from my kata Insert Dashes.
Write a function insertDashII(num) that will insert dashes ('-') between each two odd numbers and asterisk ('*') between each even numbers in num
For example:
insertDashII(454793) --> 4547-9-3
insertDashII(1012356895) --> 10123-56*89-5

Zero shouldn't be considered even or odd.
*/

function insertDashII(num) {
	return num
		.toString()
		.replace(/([2468])(?=[2468])/g, '$1*')
		.replace(/([13579])(?=[13579])/g, '$1-');
}

console.log(insertDashII(454793)); //, '4547-9-3');
console.log(insertDashII(123456)); //, '123456');
console.log(insertDashII(40546793)); //, '4054*67-9-3');
console.log(insertDashII(1012356895)); //, '10123-56*89-5');
