/*
Write a function that will randomly upper and lower characters in a string - randomCase() (random_case() for Python).

A few examples:

randomCase("Lorem ipsum dolor sit amet, consectetur adipiscing elit") == "lOReM ipSum DOloR SiT AmeT, cOnsEcTEtuR aDiPiSciNG eLIt"

randomCase("Donec eleifend cursus lobortis") == "DONeC ElEifEnD CuRsuS LoBoRTIs"
Notes:

This function will work within the basic ASCII character set to make this kata easier - so no need to make the function multibyte safe.

The letters MUST be selected randomly - filters are set to make sure there is no cheating!
*/

function randomCase(x) {
	//   indexes of letters in string
	const letters = [...x]
		.map((el, i) => (/[a-z]/i.test(el) ? i : el))
		.filter(item => typeof item === 'number');
	// change case of letters at random indexes
	letters.forEach(el => {
		const index = Math.floor(Math.random() * letters.length);
		x = x.replace(x[index], char =>
			/[A-Z]/.test(char) ? char.toLowerCase() : char.toUpperCase()
		);
	});
	return x;
}

console.log(
	randomCase('Lorem ipsum dolor sit amet, consectetur adipiscing elit')
);
console.log(randomCase('Donec eleifend cursus lobortis'));
