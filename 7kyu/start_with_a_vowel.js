/*
Create a function that takes any sentence and redistributes the spaces (and adds additional spaces if needed) so that each word starts with a vowel. The letters should all be in the same order but every vowel in the sentence should be the start of a new word. The first word in the new sentence may start without a vowel. It should return a string in all lowercase with no punctuation (only alphanumeric characters).

EXAMPLES
'It is beautiful weather today!' => 'it isb e a ut if ulw e ath ert od ay'
'Coding is great' => 'c od ing isgr e at'
'my number is 0208-533-2325' => 'myn umb er is02085332325'
*/

/*
define result string
define variable s equal to str lowercased, removing non letters and non digits
loop through s, on each iteration:
if s[i] is a vowel, add " s[i]" to result
otherwise add s[i] as it is

trim result, replace extra spaces with a single space, 
remove spaces between consonants that are otherwise next to each other
e.g. 't z' => 'tz'
*/

function vowelStart(str) {
	let result = '';
	const s = str.toLowerCase().replace(/[^a-z0-9]/g, '');
	for (let i = 0; i < s.length; i++) {
		result += /[aeiou]/i.test(s[i]) ? ` ${s[i]}` : s[i];
	}
	return result
		.trim()
		.replace(/\s+/g, ' ')
		.replace(/([^aeiou])(\s)([^aeiou])/g, '$1$3');
}

console.log(vowelStart('It is beautiful weather today!')); //, 'it isb e a ut if ulw e ath ert od ay',)
console.log(vowelStart('Coding is great')); //, 'c od ing isgr e at');
console.log(vowelStart('my number is 0208-533-2325')); //'myn umb er is02085332325'
console.log(vowelStart('oranges, apples, melon, pineapple')); //, 'or ang es appl esm el onp in e appl e', )
console.log(vowelStart('under_score')); //, 'und ersc or e')
