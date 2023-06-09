/* Naming multiple files can be a pain sometimes.

Task:
Your job here is to create a function that will take three parameters, fmt, nbr and start, and create an array of nbr elements formatted according to frm with the starting index start. fmt will have <index_no> inserted at various locations; this is where the file index number goes in each file.

Description of edge cases:
If nbr is less than or equal to 0, or not whole, return an empty array.
If fmt does not contain '<index_no>', just return an array with nbr elements that are all equal to fmt.
If start is not an integer, return an empty array.
What each parameter looks like:
typeof frm #=> 'string'
  : "text_to_stay_constant_from_file_to_file <index_no>"
typeof nbr #=> 'number'
  : number_of_files
typeof start #=> 'number'
  : index_no_of_first_file
typeof (nameFile(frm, nbr, start)) #=> 'array'
Some examples:
nameFile("IMG <index_no>", 4, 1)
  #=> ["IMG 1", "IMG 2", "IMG 3", "IMG 4"])
nameFile("image #<index_no>.jpg", 3, 7)
  #=> ["image #7.jpg", "image #8.jpg", "image #9.jpg"]
nameFile("#<index_no> #<index_no>", 3, -2)
  #=> ["#-2 #-2", "#-1 #-1", "#0 #0"]
 */

// loop from start to start + nbr, 1 at a time
// replace <index_no> with current iteration number (i)
// push to result
// return empty array if nbr < 1 or start is not an integer
// otherwise return result

function nameFile(fmt, nbr, start) {
	const result = [];
	for (let i = start; i < start + nbr; i++) {
		result.push(fmt.replace(/<index_no>/g, `${i}`));
	}
	return start % 1 || nbr < 1 ? [] : result;
}

console.log(nameFile('IMG <index_no>', 4, 1)); //, ["IMG 1", "IMG 2", "IMG 3", "IMG 4"]);
console.log(nameFile('image #<index_no>.jpg', 3, 7)); //, ["image #7.jpg", "image #8.jpg", "image #9.jpg"]);
console.log(nameFile('#<index_no> #<index_no>', 3, -2)); //, ["#-2 #-2", "#-1 #-1", "#0 #0"]);
console.log(nameFile('<file> number <index_no>', 5, 0)); //, ["<file> number 0", "<file> number 1", "<file> number 2", "<file> number 3", "<file> number 4"]);
console.log(nameFile('<file_no> number <index_no>', 2, -1)); //, ["<file_no> number -1", "<file_no> number 0"]);
console.log(nameFile('file', 2, 3)); //, ["file", "file"]);
console.log(nameFile('<file_no> number <index_no>', -1, 0)); //, []);
console.log(nameFile('file <index_no>', 2, 0.1)); //, []);
console.log(nameFile('file <index_no>', 0.2, 0)); //, []);
console.log(nameFile('file <index_no>', 0, 0)); //, []);
