/*Your task is to determine how many files of the copy queue you will be able to save into your Hard Disk Drive. The files must be saved in the order they appear in the queue.

Input:
Array of file sizes (0 <= s <= 100)
Capacity of the HD (0 <= c <= 500)
Output:
Number of files that can be fully saved in the HD.
Examples:
save([4,4,4,3,3], 12) -> 3
# 4+4+4 <= 12, but 4+4+4+3 > 12
save([4,4,4,3,3], 11) -> 2
# 4+4 <= 11, but 4+4+4 > 11
Do not expect any negative or invalid inputs.*/

// start with empty result array & capacity variable equal to hd
// loop through sizes, subtract each from capacity
// if capacity minus current item >= 0, push item to result
// otherwise end the loop and return length of result

function save(sizes, hd) {
	let capacity = hd;
	const result = [];
	for (let i = 0; i < sizes.length; i++) {
		capacity -= sizes[i];
		if (capacity >= 0) {
			result.push(sizes[i]);
		} else {
			break;
		}
	}
	return result.length;
}
