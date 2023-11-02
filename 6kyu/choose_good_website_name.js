/*
Solemn declaration:
This Kata is purely fictitious and any similarity is just coincidence ;-)

Story
John wants to create a website that he wants to give his site a good name.

What is a good name? John's idea is:

Find a famous site, and then modify one character, 
make it look like the famous site.
Please help John write some code to do it. You should coding in function goodName, accept 1 parameter name, its the name of famous site.

Rules:
If website's name contains "o", replace it to "0". like this:

codewars.com ---> c0dewars.com
If website's name contains "l", replace it to "1". like this:

leetcode.com ---> 1eetcode.com
If website's name has a substring contains two or more duplicated characters, one of them will be removed. like this:

leetcode.com ---> letcode.com
facebook.com ---> facebok.com
fighter2000.com ---> fighter200.com
The top-level domain name of the site should not be changed, such as .com .net .org etc.

John wants to see all the schemes, so the results should contain all the possible changes. That is, the return should be a string array. Each scheme has only one character different from the original name.

The returned array should be sorted(in Unicode code point order). If the name of the site can not change the character, return an empty array.

Some examples:
goodName("codewars.com") = ["c0dewars.com"]
        
goodName("microsoft.com") = ["micr0soft.com", "micros0ft.com"]
        
goodName("leetcode.com") = ["1eetcode.com","leetc0de.com","letcode.com"]
        
goodName("goodlink.com") = ["g0odlink.com","go0dlink.com","godlink.com","good1ink.com"]

goodName("fighter2000.com") = ["fighter200.com"]

goodName("fighter20000.com") = ["fighter2000.com"]

goodName("pex4fun.com") = []  
*/

function goodName(name) {
	const names = [];
	const dotIndex = name.indexOf('.');
	for (let i = 0; i < dotIndex; i++) {
		const char = name[i];
		if (char === 'o') names.push(name.slice(0, i) + '0' + name.slice(i + 1));
		if (char === 'l') names.push(name.slice(0, i) + '1' + name.slice(i + 1));
		if (char === name[i - 1] && name[i + 1] !== char)
			names.push(name.slice(0, i) + name.slice(i + 1));
	}
	return names.sort();
}

console.log(goodName('codewars.com')); //, ["c0dewars.com"]);
console.log(goodName('microsoft.com')); //, ["micr0soft.com","micros0ft.com"]);
console.log(goodName('leetcode.com')); //, ["1eetcode.com","leetc0de.com","letcode.com"]);
console.log(goodName('goodlink.com')); //, ["g0odlink.com","go0dlink.com","godlink.com","good1ink.com"]);
console.log(goodName('fighter2000.com')); //, ["fighter200.com"]);
console.log(goodName('fighter20000.com')); //, ["fighter2000.com"]);
console.log(goodName('pex4fun.com')); //, []);
