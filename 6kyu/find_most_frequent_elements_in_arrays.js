/*
Input: A 5-day JSON weather forecast which consist of 5 arrays. Each of the 5 arrays includes 8 numbers which represent 3-hourly temperature forecast for a given day.

Output: An array which includes the most frequent number (temperature) from each of the 5 arrays (days). In case there is a tie, return the value present later in a given array (day).

Example input:

var forecast_01 = {
   "temperature": [
       [15,17,19,21,21,21,20,16],
       [16,17,22,22,22,22,20,16],
       [12,17,19,20,20,20,20,18],
       [14,15,19,19,20,22,18,17],
       [15,17,24,24,24,20,20,20]
   ]
};

Example output:

getMostFrequent(forecast_01)  // should return [21,22,20,19,20]

Explanation of the example above:

The output is [21,22,20,19,20] because given 5 arrays,
[15,17,19,21,21,21,20,16] 21 is the most frequent in 1st array
[16,17,22,22,22,22,20,16] 22 is the most frequent in 2nd array
[12,17,19,20,20,20,20,18] 20 is the most frequent in 3rd array
[14,15,19,19,20,22,18,17] 19 is the most frequent in 4th array
[15,17,24,24,24,20,20,20] 24 and 20 appear 3 times each in 5th array so 20 is included in the output as the last 20 appears later than the last 24.
*/

/*
define helper method that takes in an array
and generates map of numbers and their frequencies,
then returns array of numbers with the highest frequency
(sort numbers from low to high by their last index in the array)

loop through each day's array:
call the method on array, add last number from output to a result array
return result array
*/
function getMostFrequent(json) {
	// helper method to return most frequent items in an array
	const format = arr => {
		const result = [];
		const map = {};
		for (const num of arr) {
			map[num] = num in map ? map[num] + 1 : 1;
		}
		const max = Math.max(...Object.values(map));
		for (const key in map) {
			if (map[key] === max) result.push(Number(key));
		}
		return result.sort((a, b) => arr.lastIndexOf(a) - arr.lastIndexOf(b));
	};
	const frequent = [];
	const data = json.temperature;
	for (const arr of data) {
		const items = format(arr);
		frequent.push(items.at(-1));
	}
	return frequent;
}

const forecast_01 = {
	temperature: [
		[15, 17, 19, 21, 21, 21, 20, 16],
		[16, 17, 22, 22, 22, 22, 20, 16],
		[12, 17, 19, 20, 20, 20, 20, 18],
		[14, 15, 19, 19, 20, 22, 18, 17],
		[15, 17, 24, 24, 24, 20, 20, 20],
	],
};

console.log(getMostFrequent(forecast_01)); // [21,22,20,19,20]
