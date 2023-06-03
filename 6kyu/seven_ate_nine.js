/*Seven is a hungry number and its favourite food is number 9. Whenever it spots 9 through the hoops of 8, it eats it! Well, not anymore, because you are going to help the 9 by locating that particular sequence (7,8,9) in an array of digits and tell 7 to come after 9 instead. Seven "ate" nine, no more! (If 9 is not in danger, just return the same array)*/

// replace sequences of (7,8,9) in arr with (8,9,7)
// push new arr to result array
// repeat this for new arr until there are no more sequences of (7,8,9) in last item of result array
// return last item of result array

function hungrySeven(arr) {
	const moveSeven = nums =>
		nums
			.join('')
			.replace(/789/g, '897')
			.split('')
			.map(el => Number(el));
	const result = [moveSeven(arr)];
	while (result[result.length - 1].join('').includes('789')) {
		result.push(moveSeven(result[result.length - 1]));
	}
	// console.log({ result });
	return result[result.length - 1];
}

console.log(hungrySeven([7, 8, 9])); //,[8,9,7]);
console.log(hungrySeven([7, 7, 7, 8, 9])); //,[8,9,7,7,7]);
console.log(hungrySeven([8, 7, 8, 9, 8, 9, 7, 8])); //,[8,8,9,8,9,7,7,8]);
console.log(hungrySeven([8, 7, 8, 7, 9, 8])); //,[8,7,8,7,9,8]);
