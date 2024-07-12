/*
There is a queue for the self-checkout tills at the supermarket. Your task is write a function to calculate the total time required for all the customers to check out!

input
customers: an array of positive integers representing the queue. Each integer represents a customer, and its value is the amount of time they require to check out.
n: a positive integer, the number of checkout tills.
output
The function should return an integer, the total time required.

Important
Please look at the examples and clarifications below, to ensure you understand the task correctly :)

Examples
queueTime([5,3,4], 1)
// should return 12
// because when there is 1 till, the total time is just the sum of the times

queueTime([10,2,3,3], 2)
// should return 10
// because here n=2 and the 2nd, 3rd, and 4th people in the 
// queue finish before the 1st person has finished.

queueTime([2,3,10], 2)
// should return 12
Clarifications
There is only ONE queue serving many tills, and
The order of the queue NEVER changes, and
The front person in the queue (i.e. the first element in the array/list) proceeds to a till as soon as it becomes free.
N.B. You should assume that all the test input will be valid, as specified above.

P.S. The situation in this kata can be likened to the more-computer-science-related idea of a thread pool, with relation to running multiple processes at the same time: https://en.wikipedia.org/wiki/Thread_pool
*/

/*
Make a copy of customers called 'remaining'
If n == 1 return sum of remaining
If n > remaining length return max number in remaining or 0 if remaining is empty

Start time as 0
Remove first n items from remaining, add to array called 'queues'

Inside a while loop:
  increment time
  update queues by decreasing the numbers by 1 (down to 0),
  when a number is 0: 
    if there are remaining items, replace queue item with first remaining item
  when all queues are empty (0) return time taken
*/

function queueTime(customers, n) {
	const remaining = [...customers];
	if (n === 1) return remaining.reduce((a, b) => a + b, 0);
	if (n > remaining.length)
		return remaining.length ? Math.max(...remaining) : 0;

	let timeTaken = 0;
	let queues = [];
	for (let i = 0; i < n; i++) queues.push(remaining.shift());

	while (true) {
		timeTaken++;
		let emptyQueues = 0;
		queues = queues.map(num => {
			const newNum =
				num === 1 && remaining[0] !== undefined
					? remaining.shift()
					: Math.max(num - 1, 0);
			if (newNum === 0) emptyQueues++;
			return newNum;
		});
		if (emptyQueues === n) return timeTaken;
	}
}

console.log(queueTime([], 1)); //, 0);
console.log(queueTime([1, 2, 3, 4], 1)); //, 10);
console.log(queueTime([2, 2, 3, 3, 4, 4], 2)); //, 9);
console.log(queueTime([1, 2, 3, 4, 5], 100)); //, 5);
console.log(queueTime([5, 3, 4], 1)); //, 12);
console.log(queueTime([10, 2, 3, 3], 2)); //, 10);
console.log(queueTime([2, 3, 10, 2], 2)); //, 12);
