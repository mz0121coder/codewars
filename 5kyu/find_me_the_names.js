/*
Overview

This function is supposed to take a string input containing 0 or more names as well as some text. It should locate all of the names and return them in the form of an array.

Each person's name will be listed in the form "Name: sub-name1 sub-name2 sub-name3;". There will be between 1 and 3 sub-names for each person's "Name:" and the final subname will always be followed by a ";".

##A person's Name:

Can be located in the input text by: "Name: name-here;"

A name is made up of 1 to 3 subnames

A sub-name is made up of one or more upper or lowercase letters

However, a sub-name may be double barralled and can therefore contain a dash "-" between two sub-strings of alphabetic characters only. So "Name: Tony-Joe anDy robERT;" has first sub-name "Tony-Joe" and last sub-name "Robert"

If a sub-name begins or ends with a dash "-", it should be considered a mistake and removed from the returned name. So "Name: -barack -obaMa-;" has first sub-name "Barack" and last sub-name "Obama"

##To be returned: An array whose elements correspond to each person's first sub-name and, if they have more than one sub-name, then also their last sub-name.

One array element represents one person's name
Each element should be of the form: "Last sub-name, first sub-name"
If a person's name is made up of just one sub-name, the element should simply be "first sub-name"
Capitalize first letter of each sub-name including double barralled names
The rest of the letters should be lower case
If there are no legitimate names in the input, then an empty array should be returned
##Some examples:

getNames("Here is one person. Name: MarilYN MONroe;") 
=> ["Monroe, Marilyn"]

getNames("Now we have 2 people.. Name: john fitzgerald kennedy; Name: STING;") 
=> ["Kennedy, John", "Sting"]

getNames("Here is one name. Name: -voldemort-; and then we can add two more names. Name: ian BAKER-finch; Name: -Tara -jess -Palmer-Thompkinson;")
=> ["Voldemort", "Baker-Finch, Ian", "Palmer-Thompkinson, Tara"]
*/

function getNames(input) {
	// Check if the input contains a valid name
	if (!/Name:.+[a-z]+/.test(input)) {
		return [];
	}
	const result = [];
	// Split the input by ';' and filter out the items that don't contain 'Name'
	const fullNames = input
		.slice(0, -1)
		.split(';')
		.filter(el => el.includes('Name'))
		.map(el => el.replace(/^.*Name: /, ''));
	// Check if there are no full names
	if (fullNames.length === 0) {
		return [];
	}
	// Process each full name
	fullNames.forEach(item => {
		// Split the full name by ' ' and process each part
		const names = item.split(' ').map(el => {
			// Remove any non-alphabetic characters from the start and end of the part
			const str = el.replace(/^[^a-z]+/i, '').replace(/[^a-z]+$/i, '');
			// Capitalize the first letter, make the rest lowercase, and handle hyphenated names
			const name = `${str[0].toUpperCase()}${str
				.slice(1)
				.toLowerCase()}`.replace(/-[a-z]/i, x => `-${x[1].toUpperCase()}`);
			return name;
		});
		// Add the processed names to the result array
		result.push(
			names.length > 1 ? `${names[names.length - 1]}, ${names[0]}` : names[0]
		);
	});
	return result;
}

console.log(getNames('a list of names: Name: jay raay Okocha; Name: -jay-;')); //,["Okocha, Jay", "Jay"])
console.log(getNames('Name: -jay- -raay- -Okocha-; Name: -jay-;')); //,["Okocha, Jay", "Jay"])
console.log(
	getNames(
		'Hello this is a list of names Name: -FRANK-fURTER -raay-MAY -dank-Durtur-; Name: simon-cowell jeff jack-jones-; Name: frank ocean; yes that is all the names'
	)
); //,["Dank-Durtur, Frank-Furter", "Jack-Jones, Simon-Cowell", "Ocean, Frank"])
console.log(
	getNames(
		'Hello this is a list of names Name: Jack Murphy; Name: jack- -murphy; Name: -jack- --murphy; Name: jack- tho- -murphy; Name: jack- -thomas- -murphy; Name: -jack- mor- -murphy-; Name: jack- franc-fro- -murphy; yes that is all the names'
	)
); //,["Murphy, Jack", "Murphy, Jack", "Murphy, Jack", "Murphy, Jack", "Murphy, Jack", "Murphy, Jack", "Murphy, Jack"])
console.log(getNames('Here is no names.')); //,[])
console.log(getNames('Still no names. Name: ;')); //,[])
console.log(getNames('Again no legitimate names. Name: -;')); //,[])
