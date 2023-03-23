/*Given a mixed array of number and string representations of integers, add up the non-string integers and subtract the total of the string integers.
Return as a number.*/
function divCon(x) {
	let stringInt = 0;
	let nonString = 0;
	x.forEach(n => {
		if (typeof n === 'string') {
			stringInt += Number(n);
		} else {
			nonString += n;
		}
	});
	return nonString - stringInt;
}

console.log(divCon([9, 3, '7', '3'])); // 2);
console.log(divCon(['5', '0', 9, 3, 2, 1, '9', 6, 7])); // 14);
console.log(divCon(['3', 6, 6, 0, '5', 8, 5, '6', 2, '0'])); // 13);
