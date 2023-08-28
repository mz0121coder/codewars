/*
First, You will write a very basic compression algorithm

It gets a string:
string="aaaaaaaabaaaa"
And generates an array that sums all the repeating characters like so:
compressed=[[8,"a"],[1,"b"],[4,"a"]]
The compressed version is turned into a string:
compressed='[[8,"a"],[1,"b"],[4,"a"]]'

Finally,
If the compressed version is shorter than the original string, the function will return the compressed version.
Otherwise it will return the original string.

Example1:
string1="aaaaaaaaaaaaaaaaaaaaaaaaaabaaaaaaaaaaaaaaaaaa"
output1='[[26,"a"],[1,"b"],[18,"a"]]'

Example2:
string2="abcde"
output2="abcde"

After you created the compression algorithm, create a decompression algorithm:

It gets a string (output1, output2, etc.).
If the string is comrpessed, it returns the uncompressed version,
If it is uncompressed, it returns the original string unchanged.

//output1='[[26,"a"],[1,"b"],[18,"a"]]'
uncompress(output1)
//returns
"aaaaaaaaaaaaaaaaaaaaaaaaaabaaaaaaaaaaaaaaaaaa"

//output2="abcde"
uncompress(output2)
//returns
"abcde"
Note: The original string may not contain "[]" for obvious reasons.
*/
/*
COMPRESS
array with [[1, str[0]]]
start at idx 1, loop through str
if str[i] == str[i - 1] increase number in last arr item by 1
else add [1, str[i]] to array
result = stringify arr, if length < str length return result
else return str

DECOMPRESS
if c includes '[', parse c (convert to array), 
for each item in array, add letter.repeat(num) to result str
if result length > 0 return result else return c
*/

const compress = str => {
	const arr = [[1, str[0]]];
	for (let i = 1; i < str.length; i++) {
		if (str[i] === str[i - 1]) {
			arr[arr.length - 1][0]++;
		} else {
			arr.push([1, str[i]]);
		}
	}
	const result = JSON.stringify(arr);
	return result.length < str.length ? result : str;
};

const decompress = c => {
	let result = '';
	if (c.includes('[')) {
		JSON.parse(c).forEach(item => (result += item[1].repeat(item[0])));
	}
	return result.length > 0 ? result : c;
};

console.log(
	compress('aaaaaaaaaaaaaabaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaac')
);

console.log(decompress('[[14,"a"],[1,"b"],[41,"a"],[1,"c"]]'));
