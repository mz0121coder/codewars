/*
Task
Elections are in progress!

Given an array of numbers representing votes given to each of the candidates, and an integer which is equal to the number of voters who haven't cast their vote yet, find the number of candidates who still have a chance to win the election.

The winner of the election must secure strictly more votes than any other candidate. If two or more candidates receive the same (maximum) number of votes, assume there is no winner at all.

Note: big arrays will be tested.

Examples
votes = [2, 3, 5, 2]
voters = 3

result = 2
Candidate #3 may win, because he's already leading.
Candidate #2 may win, because with 3 additional votes he may become the new leader.
Candidates #1 and #4 have no chance, because in the best case scenario each of them can only tie with the candidate #3.
votes = [3, 1, 1, 3, 1]
voters = 2

result = 2
Candidate #1 and #4 can become leaders if any of them gets the votes.
If any other candidate gets the votes, they will get tied with candidates #1 and #4.
votes = [1, 3, 3, 1, 1]
voters = 0

result = 0
There're no additional votes to cast, and there's already a tie.
*/

function electionsWinners(votes, k) {
	const max = Math.max(...votes);
	let leaders = 0;
	let chasers = 0;
	for (const vote of votes) {
		if (vote == max) leaders++;
		if (vote + k > max) chasers++;
	}
	return leaders == 1 && k == 0 ? 1 : chasers;
}

console.log(electionsWinners([2, 3, 5, 2], 3)); //, 2);

console.log(electionsWinners([1, 3, 3, 1, 1], 0)); //, 0);

console.log(electionsWinners([5, 1, 3, 4, 1], 0)); //, 1);

console.log(electionsWinners([1, 1, 1, 1], 1)); //, 4);

console.log(electionsWinners([1, 1, 1, 1], 0)); //, 0);

console.log(electionsWinners([3, 1, 1, 3, 1], 2)); //, 2);
