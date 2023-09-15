/*
Mary wrote a recipe book and is about to publish it, but because of a new European law, she needs to update and include all measures in grams.

Given all the measures in tablespoon (tbsp) and in teaspoon (tsp), considering 1 tbsp = 15g and 1 tsp = 5g, append to the end of the measurement the biggest equivalent integer (rounding up).

Examples
"2 tbsp of butter"    -->  "2 tbsp (30g) of butter"

"1/2 tbsp of oregano" -->  "1/2 tbsp (8g) of oregano"

"1/2 tsp of salt"     -->  "1/2 tsp (3g) of salt"

"Add to the mixing bowl and coat well with 1 tbsp of olive oil & 1/2 tbsp of dried dill" -->
"Add to the mixing bowl and coat well with 1 tbsp (15g) of olive oil & 1/2 tbsp (8g) of dried dill"
*/

/*
find measures to convert in the recipe string
loop through measures
calculate correct amount in grams
add in brackets to the end of each measure
*/

function convertRecipe(recipe) {
	let result = recipe;
	const measures = recipe.match(/[0-9]+\/?[0-9]* (tb?sp)/g);
	// calculate amount for each measure
	measures?.forEach(item => {
		const amountPerUnit = item.includes('tbsp') ? 15 : 5;
		//     handle fractions
		if (item.includes('/')) {
			const fractions = item.split('/').map(el => Number(el.match(/\d+/)[0]));
			const total = fractions[0] / fractions[1];
			result = result.replace(
				item,
				`${item} (${Math.ceil(total * amountPerUnit)}g)`
			);
		} else {
			const total = item.match(/\d+/);
			result = result.replace(
				item,
				`${item} (${Math.ceil(total * amountPerUnit)}g)`
			);
		}
	});
	return result;
}

console.log(convertRecipe('2 tbsp of butter')); //, "2 tbsp (30g) of butter");
console.log(
	convertRecipe(
		'Add to the mixing bowl and coat well with 1 tbsp of olive oil & 1/2 tbsp of dried dill'
	)
); //, "Add to the mixing bowl and coat well with 1 tbsp (15g) of olive oil & 1/2 tbsp (8g) of dried dill");
