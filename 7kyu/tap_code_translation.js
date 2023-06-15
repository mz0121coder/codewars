/*
Tap Code Translation
Tap code is a way to communicate using a series of taps and pauses for each letter. In this kata, we will use dots . for the taps and whitespaces for the pauses.

The number of taps needed for each letter matches its coordinates in the following polybius square (note the c/k position). Then you "tap" the row, a pause, then the str+=. Each letter is separated from others with a pause too.

   1  2  3  4  5
1  A  B C\K D  E
2  F  G  H  I  J
3  L  M  N  O  P
4  Q  R  S  T  U
5  V  W  X  Y  Z
Input:
A lowercase string of a single word (no whitespaces or punctuation, only letters).

Output:
The encoded string as taps and pauses.

Examples
text = "dot"
  "D" = (1, 4) = ". ...."
  "O" = (3, 4) = "... ...."
  "T" = (4, 4) = ".... ...."
  
output: ". .... ... .... .... ...."


"example" -> ". ..... ..... ... . . ... .. ... ..... ... . . ....."
"more"    -> "... .. ... .... .... .. . ....."
Happy coding!
*/

function tapCodeTranslation(text) {
	const result = [];
	const rows = ['abckde', 'fghij', 'lmnop', 'qrstu', 'vwxyz'];
	const cols = ['aflqv', 'bgmrw', 'ckhnsx', 'dioty', 'ejpuz'];
	for (let i = 0; i < text.length; i++) {
		const matchingRow = rows.find(el => el.includes(text[i]));
		const matchingCol = cols.find(el => el.includes(text[i]));
		const str =
			'.'.repeat(rows.indexOf(matchingRow) + 1) +
			' ' +
			'.'.repeat(cols.indexOf(matchingCol) + 1);
		result.push(str);
	}
	return result.join(' ');
}

console.log(tapCodeTranslation('test')); //, ".... .... . ..... .... ... .... ....", `Text: "test"`);
console.log(tapCodeTranslation('total')); //, ".... .... ... .... .... .... . . ... .", `Text: "total"`);
console.log(tapCodeTranslation('break')); //, ". .. .... .. . ..... . . . ...", `Text: "break"`);
console.log(tapCodeTranslation('something')); //, ".... ... ... .... ... .. . ..... .... .... .. ... .. .... ... ... .. ..", `Text: "something"`);
console.log(tapCodeTranslation('final')); //, ".. . .. .... ... ... . . ... .", `Text: "final"`);
