/*In democracy we have a lot of elections. For example, we have to vote for a class representative in school, for a new parliament or a new government.

Usually, we vote for a candidate, i.e. a set of eligible candidates is given. This is done by casting a ballot into a ballot-box. After that, it must be counted how many ballots (= votes) a candidate got.

A candidate will win this election if he has the absolute majority.

Your Task
Return the name of the winner. If there is no winner, return null / nil / None depending on the language.

Task Description
There are no given candidates. An elector can vote for anyone. Each ballot contains only one name and represents one vote for this name. A name is an arbitrary string, e.g. "A", "B", or "XJDHD". There are no spoiled ballots.

The ballot-box is represented by an unsorted list of names. Each entry in the list corresponds to one vote for this name. You do not know the names in advance (because there are no candidates).

A name wins the election if it gets more than n / 2 votes (n = number of all votes, i.e. the size of the given list).

Examples
# 3 votes for "A", 2 votes for "B"  -->  "A" wins the election
["A", "A", "A", "B", "B"]  -->  "A"

# 2 votes for "A", 2 votes for "B"  -->  no winner
["A", "A", "B", "B"]  -->  None / nil / null

# 1 vote for each name --> no winner
["A", "B", "C", "D"]  -->  None / nil / null

# 3 votes for "A", 2 votes for "B", 1 vote for "C"  -->  no winner, as "A" does not have more than n / 2 = 3 votes
["A", "A", "A", "B", "B", "C"] -->  None / nil / null
Note
Please keep in mind the list of votes can be large (n <= 1 200 000). The given list is immutable, i.e. you cannot modify the list (otherwise this could lead to vote rigging).

Good luck and have fun.*/

// let winner = null
// set winning votes to list length / 2
// start with empty result object
// loop through each item in ballots list
// add/update value of each item as a property of result object
// when an item's value is greater than winning votes, return the item
// otherwise return null after looping through each item

function getWinner(listOfBallots) {
	let winner = null;
	const winningVotes = listOfBallots.length / 2;
	const result = {};
	listOfBallots.forEach(el => {
		if (!result.hasOwnProperty(`${el}`)) {
			result[`${el}`] = 1;
		} else {
			result[`${el}`]++;
		}
		if (result[`${el}`] > winningVotes) {
			winner = el;
			return el;
		}
	});
	return winner;
}

console.log(getWinner(['A'])); //, "A", "\"A\" expected");
console.log(getWinner(['A', 'A', 'A', 'B', 'B', 'B', 'A'])); //, "A", "\"A\" expected");
console.log(getWinner(['A', 'A', 'A', 'B', 'B', 'B'])); //, null, "NULL expected");
console.log(getWinner(['A', 'A', 'A', 'B', 'C', 'B'])); //, null, "NULL expected");
console.log(getWinner(['A', 'A', 'B', 'B', 'C'])); //, null, "NULL expected");
