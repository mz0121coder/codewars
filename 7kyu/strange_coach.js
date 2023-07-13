/*
Task
Mirko has been moving up in the world of basketball. He started as a mere spectator, but has already reached the coveted position of the national team coach!

Mirco is now facing a difficult task: selecting five primary players for the upcoming match against Tajikistan. Since Mirko is incredibly lazy, he doesn't bother remembering players' names, let alone their actual skills. That's why he has settled on selecting five players who share the same first letter of their surnames, so that he can remember them easier. If there are no five players sharing the first letter of their surnames, Mirko will simply forfeit the game!

Your task is to find the first letters Mirko's players' surnames can begin with(In alphabetical order), or return "forfeit" if Mirko can't gather a team.

Input/Output
[input] string array players
Array of players' surnames, consisting only of lowercase English letters.

[output] a string
A sorted string of possible first letters, or "forfeit" if it's impossible to gather a team.

Example
For players = ["michael","jordan","lebron","james","kobe","bryant"], the output should be "forfeit".

For

players = ["babic","keksic","boric","bukic",
             "sarmic","balic","kruzic","hrenovkic",
             "beslic","boksic","krafnic","pecivic",
             "klavirkovic","kukumaric","sunkic","kolacic",
             "kovacic","prijestolonasljednikovic"]
the output should be "bk".
*/

// loop through array of players
// add the first letter of their names to an object as a key
// increment value of that key by 1 whenever:
// another player's first name starts with that letter
// loop through the object
// if value of key is greater than 4, add it to a result string
// return sorted result string if it isn't empty, or 'forfeit otherwise'
function strangeCoach(players) {
	let result = '';
	const firstLetters = {};
	players.forEach(player => {
		if (!firstLetters.hasOwnProperty(player[0])) {
			firstLetters[player[0]] = 1;
		} else {
			firstLetters[player[0]]++;
		}
	});
	for (const letter in firstLetters) {
		if (firstLetters[letter] > 4) {
			result += letter;
		}
	}
	return result === '' ? 'forfeit' : result.split('').sort().join('');
}

console.log(
	strangeCoach(['michael', 'jordan', 'lebron', 'james', 'kobe', 'bryant'])
); // 'forfeit'

console.log(
	strangeCoach([
		'babic',
		'keksic',
		'boric',
		'bukic',
		'sarmic',
		'balic',
		'kruzic',
		'hrenovkic',
		'beslic',
		'boksic',
		'krafnic',
		'pecivic',
		'klavirkovic',
		'kukumaric',
		'sunkic',
		'kolacic',
		'kovacic',
		'prijestolonasljednikovic',
	])
); // 'bk'

console.log(
	strangeCoach([
		'jgztazpytubijfsmjz',
		'bokvgratzzdibku',
		'qineboilzoqdqivc',
		'bfctyltibtkbxq',
		'vioxcuhqhikxeqwekqkjo',
		'nrvsdhttr',
		'eiaoajuwxpwmyliqikzcchid',
		'bxrwawgor',
		'gbsqaxotzmblxttj',
		'kwchrcaconuwaivhvnyf',
		'neiemapiica',
		'bppao',
		'bxujiwivsjfbqrzygpdgkyz',
		'jnzrhhmcgcpffflpzwmqib',
		'jhozlevckrrwimdmyzc',
		'bomojotkqqditelsk',
		'ywmbheywzfyqjjs',
		'snwrclyjkbspysjftcmyak',
		'eelrsgkuhu',
		'dnyzsvqjjuqoc',
	])
); // 'b'
