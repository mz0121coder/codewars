/*Introduction
Slot machine (American English), informally fruit machine (British English), puggy (Scottish English slang), the slots (Canadian and American English), poker machine (or pokies in slang) (Australian English and New Zealand English) or simply slot (American English), is a casino gambling machine with three or more reels which spin when a button is pushed. Slot machines are also known as one-armed bandits because they were originally operated by one lever on the side of the machine as distinct from a button on the front panel, and because of their ability to leave the player in debt and impoverished. Many modern machines are still equipped with a legacy lever in addition to the button. (Source Wikipedia)

Task
You will be given three reels of different images and told at which index the reels stop. From this information your job is to return the score of the resulted reels.
Rules
1. There are always exactly three reels

2. Each reel has 10 different items.

3. The three reel inputs may be different.

4. The spin array represents the index of where the reels finish.

5. The three spin inputs may be different

6. Three of the same is worth more than two of the same

7. Two of the same plus one "Wild" is double the score.

8. No matching items returns 0.
Scoring
Item
Three of the same
Two of the same
Two of the same plus one Wild
Wild
100
10
N/A
Star
90
9
18
Bell
80
8
16
Shell
70
7
14
Seven
60
6
12
Cherry
50
5
10
Bar
40
4
8
King
30
3
6
Queen
20
2
4
Jack
10
1
2

Returns
Return an integer of the score.
Example
Initialise
reel1 = ["Wild","Star","Bell","Shell","Seven","Cherry","Bar","King","Queen","Jack"];
reel2 = ["Wild","Star","Bell","Shell","Seven","Cherry","Bar","King","Queen","Jack"];
reel3 = ["Wild","Star","Bell","Shell","Seven","Cherry","Bar","King","Queen","Jack"];
spin = [5,5,5];
result = fruit([reel1,reel2,reel3],spin);
Scoring
reel1[5] == "Cherry"
reel2[5] == "Cherry"
reel3[5] == "Cherry"

Cherry + Cherry + Cherry == 50
Return
result == 50
Good luck and enjoy!*/

// make 3 arrays
// one for all items
// one for score if two of same
// one for score if two of same + wild
// one for score if three of same
// make a result variable to get 3 items from their indexes in spin

function fruit(reels, spins) {
	let score = 0;
	const items = [
		'Wild',
		'Star',
		'Bell',
		'Shell',
		'Seven',
		'Cherry',
		'Bar',
		'King',
		'Queen',
		'Jack',
	];
	const twoOfSame = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
	const result = reels.map((reel, i) => reel[spins[i]]);
	//   if all items are different return 0
	if ([...new Set(result)].length === 3) {
		return 0;
	}
	//  if all 3 items are same, get index in items array for any item in result
	// return item's twoOfScore score * 10
	if ([...new Set(result)].length === 1) {
		const index = items.indexOf(result[0]);
		console.log({ index });
		return twoOfSame[index] * 10;
	}
	//  if 2 unique items, find item that occurs twice
	//  get its score from twoOfSame, double the score if single item is 'Wild'
	if ([...new Set(result)].length === 2) {
		const double = result.filter(
			(el, i, arr) => arr.indexOf(el) !== arr.lastIndexOf(el)
		)[0];
		const single = result.filter(el => !double.includes(el))[0];
		const index = items.indexOf(double);
		const score = twoOfSame[index];
		return single === 'Wild' ? score * 2 : score;
	}
}
