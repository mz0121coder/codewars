/*
Check that the two provided arrays both contain the same number of different unique items, regardless of order. For example in the following:

[a,a,a,a,b,b] and [c,c,c,d,c,d]
Both arrays have four of one item and two of another, so balance should return true.

#Have fun!
*/

/*
PLAN
define 2 empty objects
loop through arr1, on each iteration:
if current item isn't a property in obj1, set it as a key with value of 1
otherwise increase the value by 1
do the same for arr2
access the values from both objects, sort them from low to high
check the values at each index are equal and both sets of values have the same length
*/

function balance(arr1, arr2) {
	const obj1 = {};
	const obj2 = {};
	arr1.forEach(item => {
		if (item in obj1) {
			obj1[item]++;
		} else {
			obj1[item] = 1;
		}
	});
	arr2.forEach(item => {
		if (item in obj2) {
			obj2[item]++;
		} else {
			obj2[item] = 1;
		}
	});
	const nums1 = Object.values(obj1).sort((a, b) => a - b);
	const nums2 = Object.values(obj2).sort((a, b) => a - b);
	return (
		nums1.every((el, i) => el === nums2[i]) && nums1.length === nums2.length
	);
}

let array1 = ['a', 'a', 'a', 'a', 'a', 'b', 'b', 'b'],
	array2 = ['c', 'c', 'c', 'c', 'c', 'd', 'd', 'd'];
console.log(balance(array1, array2)); //, true);
(array1 = ['a', 'a']), (array2 = ['c']);
console.log(balance(array1, array2)); //, false);
array1 = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'g'];
array2 = ['h', 'h', 'i', 'j', 'k', 'l', 'm', 'n'];
console.log(balance(array1, array2)); //, true);
array1 = ['a'];
array2 = ['c'];
console.log(balance(array1, array2)); //, true);
array1 = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'g'];
array2 = ['h', 'h', 'i', 'j', 'k', 'l', 'm', 'm'];
console.log(balance(array1, array2)); //, false);
