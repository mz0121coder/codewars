/*
For King and Glory?
After a long conflict, the rulers of Nek and Glo have decided that a final duel should decide the fate of their countries. Each ruler will select their best knights and send them into battle, one after another. The last standing team will win the crown.

But the knights don't want to die for nothing, so they ask you, the wise technomagican, to derive which team will win. Can you help them?

Task
You're given two strings, s1 and s2. Both represent a team consisting of the characters a..z (repsenting life points 1..26) and A..Z (representing life points 27..52). In each round, the first two participants of both teams (aka their first characters) will duel.

The character with less life points will die and get removed, whereas the life points of the survivor get reduced by 2/3 (it has only 1/3 of its original value rounded to the closest integer). The winner will still participate in the duels. If both combatants have the same life points, they get both removed.

The duels stop whenever one of both strings is empty or null value. Unless both are empty or null value, you have to return the winning string and its remaining content, e.g. "Winner: s1(abc)". If both are empty string or null value, return "Draw".

Some easy example:
  combat("a","c")      == "Winner: s2(a)"    combat("a","a")     == "Draw"
  combat("abc","ab")   == "Winner: s1(c)"    combat("ab","ab")   == "Draw"
  combat("boy","girl") == "Winner: s2(fl)"   combat("dog","cat") == "Draw"
*/

/*
Get scores (index in alphabet + 1) of letters in both strings
index1 = 0, index2 = 0
while index1 < s1 length and index2 < s2 length:
  increment index with lower score and divide + round other value by 3
  OR if both values have same score, increase both indexes by 1
Return winner in correct format if index1 < s1 length or index2 < s2 length
If no winner return Draw
*/

function combat(s1, s2) {
	const alphabet = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
	const getScoresList = str => {
		const scores = [...str].map(char => alphabet.indexOf(char) + 1);
		return scores;
	};

	const scores1 = getScoresList(s1);
	const scores2 = getScoresList(s2);
	let index1 = 0;
	let index2 = 0;

	while (index1 < s1.length && index2 < s2.length) {
		if (scores1[index1] < scores2[index2]) {
			index1++;
			scores2[index2] = Math.round(scores2[index2] / 3);
		} else if (scores1[index1] > scores2[index2]) {
			index2++;
			scores1[index1] = Math.round(scores1[index1] / 3);
		} else {
			index1++;
			index2++;
		}
	}

	const getWinner = (winner, list, index) => {
		const result = list
			.slice(index)
			.map(num => alphabet[num - 1])
			.join('');
		return `Winner: ${winner}(${result})`;
	};

	const winner1 = getWinner('s1', scores1, index1);
	const winner2 = getWinner('s2', scores2, index2);

	if (index1 === s1.length && index2 === s2.length) return 'Draw';
	if (index1 < s1.length) return winner1;
	if (index2 < s2.length) return winner2;
}

console.log(combat('', '')); //, 'Draw', '');
console.log(combat('a', 'a')); //, 'Draw', '');
console.log(combat('a', 'b')); //, 'Winner: s2(a)', '');
console.log(combat('q', 'b')); //, 'Winner: s1(f)', '');
console.log(combat('dog', 'cat')); //, 'Draw', '');
console.log(combat('abcde', 'fghij')); //, 'Winner: s2(cj)', '');
console.log(combat('abCde', 'fghij')); //, 'Winner: s1(b)', '');
console.log(combat('iGnfQxJYy', 'MlHGtsGF')); //, 'Winner: s2(k)', '');
console.log(combat('vyTcJSGRGZcTq', 'GFyfgBkDxNvgf')); // 'Winner: s1(f)', '');
console.log(combat('vyTcJSGRGZcTq', 'GFyfgBkDxNvgeq')); //, 'Draw', '');
