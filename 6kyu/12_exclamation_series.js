/*Remove odd number continuous exclamation marks and question marks(from the left to the right), until no continuous exclamation marks and question marks exist. Please note: One exclamation mark or question mark is not a continuous exclamation marks or question marks. The string only contains ! and ?.

Examples
remove("") === ""
remove("!") === "!"
remove("!!") === "!!"
remove("!!!") === ""
remove("!??") === "!??"
remove("!???") === "!"
remove("!!!??") === "??"
remove("!!!???") === ""
remove("!??") === "!??"
remove("!???!!") === ""
("!???!!" --> "!!!" --> "")
remove("!????!!!?") === "!"
("!????!!!?" --> "!?????" --> "!")*/

function remove(s) {
	let isOdd = true;
	if (!s.match(/[!]|[?]/)) {
		return s;
	}
	return !s.match(/[!]|[?]/)
		? s
		: s
				.match(/[!]+|[?]+/g)
				.filter(item => item.length === 1 || item.length % 2 === 0)
				.join('');
}

console.log(remove('')); //, "")
console.log(remove('!')); //, "!")
console.log(remove('!!')); //, "!!")
console.log(remove('!!!')); //, "")
console.log(remove('!??')); //, "!??")
console.log(remove('!???')); //, "!")
console.log(remove('!!!??')); //, "??")
console.log(remove('!!!???')); //, "")
console.log(remove('!??')); //, "!??")
console.log(remove('!???!!')); //, "")
