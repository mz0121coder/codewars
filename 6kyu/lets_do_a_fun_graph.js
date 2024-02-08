/*
You have done some data collection today and you want the data to be well presented by a graph so you have decided to make a quick diagram. Suppose that for this kata your data is presented by an array by their value eg [10,5,3,1,4], then you must present your data as follows:


for data = [10,5,3,1,4] :
 ____ ........................ ^ 10
|    |........................ | 9
|    |........................ | 8
|    |........................ | 7
|    |........................ | 6
|    | ____ .................. | 5
|    ||    |............ ____  | 4
|    ||    | ____ ......|    | | 3
|    ||    ||    |......|    | | 2
|    ||    ||    | ____ |    | | 1
|    ||    ||    ||    ||    | | 0
GOOD TO KNOW :
Each bar is always of width 6.

The vertical axis must be surrounded with one space character on each side.

No trailing spaces on any line.

For this kata we use :

the following characters : '_',' ','|','.','^'.
some numbers.
Return type :

Your code must return a character string joined by \n.
[] and [0] has different returns "" and " ____  ^ 0"
CRITERIA :
The length of the array is always less than 50.
The value of a data is also less than 50 and always positive.
GOOD LUCK :)
*/

/*
Create an obj to check if numbers in arr have peaked, start each as false
Find max value in arr, loop from max down to 0, on each iteration:
Loop through numbers:
if num === i, add ' ____ ' to row, set peak to true for that number,
if num !== i, add '|    |' if number has peaked, or '......' 
add '^' if i === max or '|' and '{i}' separated by spaces, to row
add row to graph 
return graph
*/

function graph(arr) {
	const peaks = {};
	arr.forEach(num => (peaks[num] = false));
	const max = Math.max(...arr);
	const graph = [];

	for (let i = max; i >= 0; i--) {
		let row = '';
		for (const num of arr) {
			if (num === i) {
				row += ' ____ ';
				peaks[num] = true;
			}
			if (num !== i) row += peaks[num] ? '|    |' : '......';
		}
		row += ` ${i === max ? '^' : '|'} ${i}`;
		graph.push(row);
	}

	return graph.join('\n');
}

console.log(graph([1, 3, 5, 4, 1])); //, "............ ____ ............ ^ 5\n............|    | ____ ...... | 4\n...... ____ |    ||    |...... | 3\n......|    ||    ||    |...... | 2\n ____ |    ||    ||    | ____  | 1\n|    ||    ||    ||    ||    | | 0");

console.log(graph([1, 4, 2])); //, "...... ____ ...... ^ 4\n......|    |...... | 3\n......|    | ____  | 2\n ____ |    ||    | | 1\n|    ||    ||    | | 0");

console.log(graph([10, 5, 3, 1, 4])); //, " ____ ........................ ^ 10\n|    |........................ | 9\n|    |........................ | 8\n|    |........................ | 7\n|    |........................ | 6\n|    | ____ .................. | 5\n|    ||    |............ ____  | 4\n|    ||    | ____ ......|    | | 3\n|    ||    ||    |......|    | | 2\n|    ||    ||    | ____ |    | | 1\n|    ||    ||    ||    ||    | | 0");

console.log(graph([])); //, "");

console.log(graph([0])); //, " ____  ^ 0");
