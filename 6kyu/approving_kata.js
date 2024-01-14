/*
DESCRIPTION:
Approving Kata
The Story
You have just become a moderator at Codewars and have just been sifting through a few of the many beta Kata you have completed in the distant past. Suddenly, a thought comes to mind: I liked the idea of this Kata a lot. Perhaps I should approve it? However, at second glance, you suddenly realise that this Kata has no random test cases. Your red alert suddenly comes to life as you raise a Major Issue on that Kata asking the author to include some random test cases. Looks like you will have to pick another Kata to approve.

The Task
Define a function called approve which accepts an object literal kata as an argument containing details about the Kata. Your function should follow the rules mentioned below.

I. Basic Requirements (for the Kata, NOT your function!)
First and foremost, before you check anything else regarding the Kata, you must first check if the Kata has random test cases. You must then check if the Kata has too many Major or Minor Issues. Below are the details:

hasRandomTests - unless this property of the kata is set to true, you must throw the following string: "**Needs random test cases**"
"Minor Issues" - this property of the kata will be assigned either a positive integer or 0. If there are 6 or more minor issues the following error must be thrown: "NUMBER_OF_MINOR_ISSUES_HERE Minor Issues pending - kata cannot be approved yet" (of course not the literal string - replace NUMBER_OF_MINOR_ISSUES_HERE with the number of minor issues in the Kata)
"Major Issues" - if this property of kata is 3 or above you must throw the following error: "NUMBER_OF_MAJOR_ISSUES_HERE Major Issues pending - kata cannot be approved yet"
II. Suggestions
The kata may also have a property suggestions which is either a positive integer or 0 - if the number of suggestions is 10 or above your function should console.log the following line: "SUGGESTION_COUNT Suggestions Pending; you may want to take a look at the suggestions and improve the Kata".

III. Point Calculation and Kata Approval
If your function did not throw an error in the previous steps, you should then proceed to calculate the total "score" of the Kata. If the Kata has at least 30 points then you "approve" the Kata by returning the following string: "Total Score: SCORE_HERE - Kata Approved", otherwise, return "Kata not approved yet - not enough upvotes". The method for calculating the total score of the Kata is as follows:

greenlit - this is the total number of upvotes from the "ordinary" members of the Codewars community. Each greenlit adds 1 to the total score of the Kata.
"2x-greenlit" - this is the total number of upvotes from members of the Codewars community with 500-1000 honor. Each "2x-greenlit" has double the weighing compared to an ordinary greenlit.
"3x-greenlit" - this is the total number of upvotes from members of the Codewars community with 1000-2000 honor. Each "3x-greenlit" has 3 times the weighing of a normal greenlit.
"4x-greenlit" - this is the total number of upvotes from Codewars users with >2000 honor. Each "4x-greenlit" has 4 times the weighing of a normal greenlit.
Each "Minor Issues" deducts 1 mark from the total score of the Kata.
Each "Major Issues" has double weighing compared to "Minor Issues".
Please note that sometimes a Kata may NOT have all the details. Your function will have to deal with it properly. For example, if the object passed in does not have a "4x-greenlit" property, assume that the value of that property is equal to 0.

Have fun :D
*/

function approve(kata) {
	if (kata.hasRandomTests !== true) throw '**Needs random test cases**';
	if (kata['Minor Issues'] >= 6)
		throw `${kata['Minor Issues']} Minor Issues pending - kata cannot be approved yet`;
	if (kata['Major Issues'] >= 3)
		throw `${kata['Major Issues']} Major Issues pending - kata cannot be approved yet`;
	if (kata.suggestions >= 10)
		console.log(
			`${kata.suggestions} Suggestions Pending; you may want to take a look at the suggestions and improve the Kata`
		);

	let score = 0;
	score -= 2 * (kata['Major Issues'] || 0);
	score -= kata['Minor Issues'] || 0;
	score += kata['greenlit'] || 0;
	score += 2 * (kata['2x-greenlit'] || 0);
	score += 3 * (kata['3x-greenlit'] || 0);
	score += 4 * (kata['4x-greenlit'] || 0);

	return score < 30
		? 'Kata not approved yet - not enough upvotes'
		: `Total Score: ${score} - Kata Approved`;
}
