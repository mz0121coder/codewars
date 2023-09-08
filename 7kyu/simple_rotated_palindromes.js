/*
In this Kata, you will be given a string and your task is to determine if that string can be a palindrome if we rotate one or more characters to the left.

solve("4455") = true, because after 1 rotation, we get "5445" which is a palindrome
solve("zazcbaabc") = true, because after 3 rotations, we get "abczazcba", a palindrome
More examples in test cases. Input will be strings of lowercase letters or numbers only.

Good luck!
*/

function solve(st) {
	const isPal = s => s.split('').reverse().join('') === s;
	let str = st;
	for (let i = 0; i < str.length; i++) {
		str = str.slice(-1) + str.slice(0, -1);
		if (isPal(str)) return true;
	}
	return false;
}

console.log(solve('aaab')); //,false);
console.log(solve('abcabc')); //,false);
console.log(solve('4455')); //,true);
console.log(solve('zazcbaabc')); //,true);
console.log(solve('223456776543')); //,true);
console.log(solve('432612345665')); //,false);
console.log(solve('qponmlkjihgfeeiefghijklmnopqrsttsr')); //,false);
