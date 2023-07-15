/*
start with empty result string
loop through chars in str, 1 at a time
if current char is a digit and result doesn't include it, 
add char to result string
return "One more run!" if result is still empty
otherwise return result
*/

function lottery(str) {
	let result = '';
	for (let i = 0; i < str.length; i++) {
		if (/\d/.test(str[i]) && !result.includes(str[i])) {
			result += str[i];
		}
	}
	return result === '' ? 'One more run!' : result;
}

console.log(lottery('wQ8Hy0y5m5oshQPeRCkG')); //, '805'); //,

console.log(lottery('ffaQtaRFKeGIIBIcSJtg')); //, 'One more run!');
