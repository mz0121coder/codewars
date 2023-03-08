/*DESCRIPTION:
Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.

moveZeros([false,1,0,1,2,0,1,3,"a"]) // returns[false,1,1,2,1,3,"a",0,0]
*/
function moveZeros(arr) {
	let count = 0;
	const newArr = [];
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] !== 0) {
			// push numbers above 0 to newArr
			newArr.push(arr[i]);
		} else {
			// increment count by 1 for each 0 in arr
			count++;
		}
	}
	for (let x = count; x > 0; x--) {
		// push a 0 for every count
		newArr.push(0);
	}
	return newArr;
}
