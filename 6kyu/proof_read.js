/*You've just finished writing the last chapter for your novel when a virus suddenly infects your document. It has swapped the 'i's and 'e's in 'ei' words and capitalised random letters. Write a function which will:

a) remove the spelling errors in 'ei' words. (Example of 'ei' words: their, caffeine, deceive, weight)

b) only capitalise the first letter of each sentence. Make sure the rest of the sentence is in lower case.

Example: He haD iEght ShOTs of CAffIEne. --> He had eight shots of caffeine.*/

const proofread = str => {
	const replace = str.replace(/ie/gi, 'ei');
	let result = replace[0].toUpperCase();
	let newSentence = false;
	for (let i = 1; i < replace.length; i++) {
		if (replace[i] === '.') {
			newSentence = true;
		}
		if (newSentence && replace[i].match(/[a-z]/i)) {
			result += replace[i].toUpperCase();
			newSentence = false;
		} else {
			result += replace[i].toLowerCase();
		}
	}
	return result;
};

console.log(
	proofread('ThiEr DEcIEt wAs INconcIEVablE. sHe SIeZeD thE moMENT.')
); //, "Their deceit was inconceivable. She seized the moment.");
console.log(proofread('HIs nieghBOur wAs oVerwieGht.')); //, "His neighbour was overweight.");
console.log(proofread('SHe rEcieveD a pIegNor.')); //, "She received a peignor.");
