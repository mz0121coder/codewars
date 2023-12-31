/*
You are given two strings (st1, st2) as inputs. Your task is to return a string containing the numbers in st2 which are not in str1. Make sure the numbers are returned in ascending order. All inputs will be a string of numbers.

Here are some examples:

findAdded('4455446', '447555446666'); // '56667'
findAdded('44554466', '447554466'); // '7'
findAdded('9876521', '9876543211'); // '134'
findAdded('678', '876'); // ''
findAdded('678', '6'); // ''
*/

function findAdded(st1, st2) {
	const countNums = str =>
		[...str].reduce((obj, num) => {
			obj[num] = num in obj ? obj[num] + 1 : 1;
			return obj;
		}, {});
	const obj1 = countNums(st1);
	const obj2 = countNums(st2);
	let added = '';
	for (const num in obj2) {
		if (!(num in obj1)) added += num.repeat(obj2[num]);
		if (obj2[num] > obj1[num]) added += num.repeat(obj2[num] - obj1[num]);
	}
	return added;
}

console.log(findAdded('4455446', '447555446666'));
console.log(findAdded('44554466', '447554466'));
console.log(findAdded('9876521', '9876543211'));
console.log(findAdded('678', '876'));
console.log(findAdded('678', '6'));
