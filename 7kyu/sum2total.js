/*
Write a function that takes an array/list of numbers and returns a number such that

Explanation total([1,2,3,4,5]) => 48

1+2=3--\ 3+5 =>     8 \
2+3=5--/ \            ==  8+12=>20\     
          ==>5+7=> 12 / \           20+28 => 48
3+4=7--\ /            == 12+16=>28/
4+5=9--/ 7+9 =>     16  /

if total([1,2,3]) => 8 then

first+second => 3 \
                   then 3+5 => 8
second+third => 5 /

Examples
total([-1,-1,-1]) => -4
total([1,2,3,4])  => 20
Note: each array/list will have at least an element and all elements will be valid numbers.
*/

// recursive solution
// function total(arr) {
// 	const format = nums => {
// 		const newArr = [];
// 		for (let i = 1; i < nums.length; i++) {
// 			newArr.push(nums[i] + nums[i - 1]);
// 		}
// 		return newArr;
// 	};
// 	let result = [...arr];
// 	return result.length === 1 ? result[0] : total(format(result));
// }

// while loop
function total(arr) {
	const format = nums => {
		const newArr = [];
		for (let i = 1; i < nums.length; i++) {
			newArr.push(nums[i] + nums[i - 1]);
		}
		return newArr;
	};
	let result = [...arr];
	while (result.length > 1) result = format(result);
	return result[0];
}

console.log(total([1, 2, 3, 4, 5])); //,48);
console.log(total([5, 4, 3, 2, 1])); //,48);
console.log(total([1, 2, 3, 4])); //,20);
console.log(total([1, 2, 3])); //,8);
