/*
The student has big plans for summer vacation after a stressful academic year. He has saved up some money and decided to travel to a neighboring city for a few consecutive days. Inspired by the desire to spend time in a new place, he compiled a list of housing rental costs for each of the anticipated days and recorded them in an array named cost.

Task
Find the cheapest accommodation for student's vacation.
It is guaranteed that the length of the cost array is greater than or equal to the duration of the vacation.

If there is enough money for travelling, return the answer in the format:
"money: {minimum_money_for_vacation}"
Otherwise, return the maximum duration of the vacation in the format:
"days: {maximum_duration_of_vacation}" 
Help the student find the optimal solution for his summer vacation!

Examples
| money | days | cost          | result      |
|-------|------|---------------|-------------|
| 10    | 1    | [5]           | "money: 5"  |
| 10    | 1    | [3, 2, 4]     | "money: 2"  |
| 10    | 2    | [3, 7, 6]     | "money: 10" |
| 10    | 1    | [20, 15, 30]  | "days: 0"   |
| 10    | 2    | [9, 6, 7]     | "days: 1"   |
| 50    | 3    | [10, 40, 5]   | "days: 2"   |
Constraints for random tests (depends on language)
|                      | small   | medium | extra_large  |
|----------------------|---------|--------|--------------|
| tests                | 10      | 10     | 10           |
| money                | 1-10    | 1-50   | 1 to 30-300M |
| days                 | 1-4     | 1-20   | 1 to 0.03-3M |
| cost.length          | 1-10    | 1-50   | 1 to 0.1-15M |
| cost[i]              | 1-10    | 1-10   | 1 to 400     |
| cost.length >= days  | true    | true   | true         |
*/

function findMinCost(money, days, cost) {
	let minCost = Infinity;
	let maxDays = 0;
	let currTripDays = 0;
	let currTripCost = 0;

	for (let i = 0; i < cost.length; i++) {
		currTripCost += cost[i];
		currTripDays++;

		if (currTripCost > money || currTripDays > days) {
			if (cost[i] > money) {
				currTripCost = 0;
				currTripDays = 0;
			} else {
				currTripCost = cost[i];
				currTripDays = 1;
			}
		}

		maxDays = Math.max(maxDays, currTripDays);

		if (currTripDays === days && currTripCost <= money) {
			minCost = Math.min(minCost, currTripCost);
		}
	}

	return maxDays === days ? `money: ${minCost}` : `days: ${maxDays}`;
}
