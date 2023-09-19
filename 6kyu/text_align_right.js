/*
Your task in this Kata is to emulate text justify right in monospace font. You will be given a single-lined text and the expected justification width. The longest word will never be greater than this width.

Here are the rules:

Use spaces to fill in the gaps on the left side of the words.
Each line should contain as many words as possible.
Use '\n' to separate lines.
Gap between words can't differ by more than one space.
Lines should end with a word not a space.
'\n' is not included in the length of a line.
Last line should not contain '\n'
Example with width=30:

        Bacon ipsum dolor amet
excepteur ut kevin burgdoggen,
   shankle cupim dolor officia
       ground round id ullamco
   deserunt nisi. Commodo tail
    qui salami, brisket boudin 
tri-tip. Labore flank laboris,
  cow enim proident aliqua sed
      hamburger consequat. Sed
     consequat ut non bresaola
   capicola shoulder excepteur
 veniam, bacon kevin. Pastrami
   shank laborum est excepteur
 non eiusmod bresaola flank in
nostrud. Corned beef ex pig do
   kevin filet mignon in irure
 deserunt ipsum qui duis short
        loin. Beef ribs dolore
  meatball officia rump fugiat
  in enim corned beef non est.
*/

function alignRight(text, width) {
	const lines = [];
	const words = text.split(' ');

	let line = [];
	for (let i = 0; i < words.length; i++) {
		const linePlusWord = [...line, words[i]].join(' ');

		if (linePlusWord.length <= width) {
			line.push(words[i]);
		}

		if (linePlusWord.length > width || i === words.length - 1) {
			const currLine =
				' '.repeat(width - line.join(' ').length) + line.join(' ');
			lines.push(currLine);
			line = [words[i]];
		}
	}
	return lines.join('\n');
}

console.log(alignRight('abc def', 10)); //,'   abc def');
console.log(alignRight('I take up the whole line', 24)); //,'I take up the whole line');
console.log(alignRight('Two lines, I am', 10)); //,'Two lines,\n      I am');
