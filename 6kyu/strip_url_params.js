/*
Complete the method so that it does the following:
Removes any duplicate query string parameters from the url (the first occurence should be kept)
Removes any query string parameters specified within the 2nd argument (optional array)
Examples:
stripUrlParams('www.codewars.com?a=1&b=2&a=2') === 'www.codewars.com?a=1&b=2'
stripUrlParams('www.codewars.com?a=1&b=2&a=2', ['b']) === 'www.codewars.com?a=1'
stripUrlParams('www.codewars.com', ['b']) === 'www.codewars.com'
*/

function stripUrlParams(url, paramsToStrip = []) {
	let result = url;
	const map = {};
	for (const letter of paramsToStrip) map[letter] = 1;
	const queries = url.match(/(&?[a-z]=\d+)/g);
	if (!queries) return url;
	for (const str of queries) {
		const letter = str.match(/[a-z]/)[0];
		map[letter] = (map[letter] || 0) + 1;
		if (map[letter] > 1) result = result.replace(str, '');
	}
	return result.replace(/\?$/, '');
}

const url1 = 'www.codewars.com?a=1&b=2';
const url2 = 'www.codewars.com?a=1&b=2&a=1&b=3';
const url3 = 'www.codewars.com?a=1';
const url4 = 'www.codewars.com';

console.log(stripUrlParams(url1, url1)); // "Didn't return correct value when given a url that had nothing to be stripped"
console.log(stripUrlParams(url2, url1)); // "Didn't strip duplicates from url"
console.log(stripUrlParams(url2, ['b']), url3); // "Didn't strip param that was specified in paramsToStrip array"
console.log(stripUrlParams(url4, ['b'], url4)); // "Didn't return an un-modifed url when there was nothing to strip"
console.log(stripUrlParams(url1, ['a', 'b'], url4)); // "Didn't strip all parameters"
