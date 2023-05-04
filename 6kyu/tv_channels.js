/*Program channels into your TV's memory. An array with channels (strings) will be passed as an argument to the function redarr(). Sort the channels in an alphabetical order, remove duplicates and, finally, return an object where each channel (object's value) is assigned to a whole number (objects's key))//, starting with 0.

Examples:

var arr = ["BBC1", "BBC2", "MTV"];

redarr(arr) // returns {"0":"BBC1", "1":"BBC2", "2":"MTV"}

var arr = ["BBC1", "BBC1", "BBC2", "MTV"];

redarr(arr) // returns {"0":"BBC1", "1":"BBC2", "2":"MTV"}
*/

// sort arr alphabetically, make a new array with no duplicates
// add the indexes and channel names as key-value pairs in the result

function redarr(arr) {
	const result = {};
	[...new Set(arr)].sort().forEach((item, index) => (result[index] = item));
	return result;
}

console.log(redarr(['BBC1', 'BBC2', 'MTV'])); //, {'0': 'BBC1','1': 'BBC2','2': 'MTV'}, "should return {'0': 'BBC1','1': 'BBC2','2': 'MTV'}");
console.log(redarr(['BBC1', 'BBC1', 'BBC2', 'MTV'])); //, {'0': 'BBC1','1': 'BBC2','2': 'MTV'}, "should return {'0': 'BBC1','1': 'BBC2','2': 'MTV'}");
