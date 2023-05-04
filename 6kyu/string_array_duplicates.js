/*DESCRIPTION:
In this Kata, you will be given an array of strings and your task is to remove all consecutive duplicate letters from each string in the array.

For example:

dup(["abracadabra","allottee","assessee"]) = ["abracadabra","alote","asese"].

dup(["kelless","keenness"]) = ["keles","kenes"].

Strings will be lowercase only, no spaces. See test cases for more examples.

Good luck!*/
// loop through each item in array
// remove consecutive duplicate letters
// push new string to result

function dup(s) {
	const result = [];
	s.forEach(item => {
		let str = item[0];
		for (let i = 1; i < item.length; i++) {
			if (str[str.length - 1] !== item[i]) {
				str += item[i];
			}
		}
		result.push(str);
	});
	return result;
}

/* 
function dup(s) {
  return s.map(x => x.replace(/(.)\1+/g,'$1'))
};
*/

console.log(
	dup(['ccooddddddewwwaaaaarrrrsssss', 'piccaninny', 'hubbubbubboo'])
); //,['codewars','picaniny','hubububo']);
console.log(dup(['abracadabra', 'allottee', 'assessee'])); //,['abracadabra','alote','asese']);
console.log(dup(['kelless', 'keenness'])); //, ['keles','kenes']);
console.log(dup(['Woolloomooloo', 'flooddoorroommoonlighters', 'chuchchi'])); //, ['Wolomolo','flodoromonlighters','chuchchi']);
console.log(dup(['adanac', 'soonness', 'toolless', 'ppellee'])); //, ['adanac','sones','toles','pele']);
console.log(dup(['callalloo', 'feelless', 'heelless'])); //, ['calalo','feles','heles']);
console.log(dup(['putteellinen', 'keenness'])); //, ['putelinen','kenes']);
console.log(dup(['kelless', 'voorraaddoosspullen', 'achcha'])); //, ['keles','voradospulen','achcha']);
