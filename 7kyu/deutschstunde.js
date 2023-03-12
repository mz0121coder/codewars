/*Everybody knows a little german, right? But remembering the correct articles is a tough job. Write yourself a little helper, that returns the noun with the matching article:

each noun containing less than 2 vowels has the article "das"
each noun containing 2/3 vowels has the article "die"
each noun containing more than 3 vowels has the article "der"
Caution: Vowels are "a,e,i,o,u". Umlaute (ä ö ü) are also being counted!

(This Kata is a joke, there is no such grammar rule!)*/

function derDieDas(wort) {
	const vokale = wort.match(/[aeiouäöü]/gi)?.length;
	return !vokale || vokale < 2
		? `das ${wort}`
		: vokale > 3
		? `der ${wort}`
		: `die ${wort}`;
}

console.log(derDieDas('OOOpa')); // 'der OOOpa', '4 Vokale -> der OOOpa');
console.log(derDieDas('Suppenhuhn')); // 'die Suppenhuhn', '3 Vokale -> die Suppenhuhn');
console.log(derDieDas('Geheimdienst')); // 'der Geheimdienst', '5 Vokale -> der Geheimdienst');
console.log(derDieDas('Ofenkartoffel')); // 'der Ofenkartoffel', '5 Vokale -> der Ofenkartoffel');
console.log(derDieDas('Fisch')); // 'das Fisch', '1 Vokal -> das Fisch');
console.log(derDieDas('Knödel')); // 'die Knödel', '1 Umlaut, 1 Vokal -> die Knödel');
console.log(derDieDas('Leberkaassemmi')); // 'der Leberkaassemmi', '6 Vokale -> der Leberkaassemmi');
