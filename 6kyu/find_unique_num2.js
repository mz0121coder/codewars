/*
Description:
Give you a array arr that contains some numebers. Numbers can be positive,negative,integer or float. Only one of these numbers is unique. Find and return it.

Some examples:
findUnique([1,2,3,5,7]) === 2
Because only 2 is an even number, the other numbers are odd.

findUnique([2,4,6,8,9]) === 9
Because only 9 is an odd number

findUnique([2,-4,6,8]) === -4
Because only -4 is a negative number

findUnique([-2,-4,-6,8]) === 8
Because only 8 is a positive number

findUnique([2,4.4,6,8]) === 4.4
Because only 4.4 is a float number

findUnique([2.2,4.4,6.6,8]) === 8
Because only 8 is a integer number

findUnique([2,2,2,4]) === 4
Because only 4 has a diffrent value
Priority level: float/integer > positive/negative > odd/even > diffrent value

Some edge case:

findUnique([-2,-4,-6.6,8]) === -6.6  //not 8
Because Priority level float/integer > positive/negative

findUnique([-2,-4,-7, 8]) === 8  //not -7
Because Priority level positive/negative > odd/even
Note: All inputs will be an array. The array contains at least 3 element. Only one unique number in it. 0 will not appear, do not worry about it ;-)
*/

function findUnique(arr) {
	const obj = {
		float: [],
		int: [],
		pos: [],
		neg: [],
		odd: [],
		even: [],
	};
	arr.forEach(num => {
		//     priority 1 - float and integer
		if (Math.round(num) !== num) obj.float.push(num);
		if (Math.round(num) === num) obj.int.push(num);
		//     priority 2 - +ve and -ve
		if (num >= 0) obj.pos.push(num);
		if (num < 0) obj.neg.push(num);
		//     priority 3 - odd and even
		if (num % 2 !== 0) obj.odd.push(num);
		if (num % 2 === 0) obj.even.push(num);
	});
	// return item from key with length 1
	for (const key in obj) {
		if (obj[key].length === 1) {
			return obj[key][0];
		}
	}
	//   return unique number otherwise
	return arr.find(num => arr.indexOf(num) === arr.lastIndexOf(num));
}

console.log(findUnique([1, 2, 3, 5, 7])); // , 2)
console.log(findUnique([2, 4, 6, 8, 9])); // , 9)
console.log(findUnique([2, -4, 6, 8])); // , -4)
console.log(findUnique([-2, -4, -6, 8])); // , 8)
console.log(findUnique([2, 4.4, 6, 8])); // , 4.4)
console.log(findUnique([2.2, 4.4, 6.6, 8])); // , 8)
console.log(findUnique([2, 2, 2, 4])); // , 4)
console.log(findUnique([-2, -4, -6.6, 8])); // , -6.6)
console.log(findUnique([-2, -4, -7, 8])); // , 8)
