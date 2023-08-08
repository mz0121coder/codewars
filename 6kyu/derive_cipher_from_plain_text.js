/*
This is a substitution cipher kata with a twist. You will be given two string arguments. The first argument is a rather lengthy nonsensical text in plaintext form. The second argument is a shorter encoded string. Your task is to derive the cipher from the plaintext, then apply it to decipher the encoded string.

How to derive the cipher: Create an object in which the keys are all of the lower-case letters of the English alphabet, in alphabetical order. To each of these keys, assign the next unique letter from the plaintext (case-insensitive). In other words, the order of the substituted values is the order in which the letters first occur in the plaintext.

Here's a partial example: Plaintext: "Despite the constant negative press covfefe, my goal is to promote the possibility of lasting peach in the region in an unpresidented act. I hearby tapp DeBois' phones... "

In this example, the first part of the cipher would look like: {"a":"d", "b":"e", "c":"s", "d":"p", "e":"i", "f":"t", "g":"h", "h":"c", "i":"o", "j":"n" [etc.]}

This represents the cipher that was used to encode the second argument. To decipher it, you would apply the cipher in reverse (i.e., turn "d" back into "a", "e" back into "b", etc.). Finally, return the deciphered string.

You can assume that all letters of the alphabet will be included in the plaintext. Non-letters should be left in place, unchanged. Please note that any upper-case letters in the encoded string would remain unchanged.

Special thanks to @Voile, @smile67, and @St3f4n for tips on improving the tests!
*/

/*
PLAN
extract unique letters from plainText (ignore case)
create an object with keys a-z, values of each unique letter
decipher the object
from the encodedText, replace letters with their new values from the deciphered object
*/

function cipherFromPlaintext(plainText, encodedText) {
	const alphabet = [...'abcdefghijklmnopqrstuvwxyz'];
	const obj = {};
	const uniqueLetters = [...new Set(plainText.toLowerCase().match(/[a-z]/gi))];
	alphabet.forEach((char, i) => (obj[char] = uniqueLetters[i]));
	const decipher = {};
	for (const key in obj) {
		decipher[obj[key]] = key;
	}
	return encodedText.replace(/[a-z]/g, x => decipher[x]);
}

console.log(
	cipherFromPlaintext(
		'Far that diverse quetzal hence crud hey prior lynx a much far darn and swung much smelled slapped helpfully far blankly unlike away by contrary house as some tortoise a close pessimistically on dachshund the split dear furrowed clung and and skeptically some jeez whimsically ouch scorpion mournful outbid courteous below and grew so much wow educationally and tonal the outside swanky horse piranha inversely gecko much less as much goodness this and crud changed a paternal filled slept lizard pending perilously that and goodness murky ouch rode dived much anteater checked occasional.',
		'dnpxk dhhx ahung xgn zeuuenl cnmlto fph ampeht'
	)
); //, 'forty feet below two million pounds are buried');
console.log(
	cipherFromPlaintext(
		'Pounded never patted much haltered extra humorously indecently ouch glared ouch fittingly and contemplated less or greedy angrily badger well and comfortably alas a the while this proud jerkily yikes ouch less frequently despite lorikeet symbolically far then laggardly owing ouch compositely some rapt fish ocelot otter one chromatically unwound more ignorant giggled more jeez one aside well far within other far darn threw some apart contemplated ignobly more hey much because and sentimental endearingly a yikes overlaid hello and regardless a spiteful necessarily jeez dwelled quick curious evilly but much much before that black mammoth some frenetic including that.',
		'tpumad eagrdi jrx pid qxb? nidpnlxbvrf'
	)
); //, 'jackie fisher who are you? dreadnought');
console.log(
	cipherFromPlaintext(
		'This just since far less far quicker some very assiduous soothingly disbanded sexy ouch capybara more dear some zoo woodchuck among some while therefore goodness hence and red-handedly because slid toward pending and ouch far cosmetic extrinsic endlessly that knelt that won one stern some beneath next thus browbeat copious firmly more oh ouch then near beheld less and in therefore overtook foully cheered some held more that alas ouch and apart yikes but around gosh but far much cursed roughly foresaw soberly while alas congenially broadcast the dear sadly thanks drank burst by outside unsociable through hey.',
		'kqj eu hz rtqs; dxk eu hz yjt'
	)
); //, 'one if by land; two if by sea');
console.log(
	cipherFromPlaintext(
		'Some kids jeez authentically next brightly loudly one cracked this darn far less added forecast or told this goodness alas eagerly morally some so eloquently oh gagged ocelot while much jeepers that paid imprecisely man-of-war therefore robin over one bat watchful fox and and more tightly amongst sought messy a radically wanton absurdly one dynamically and panda placed on well swept because guiltily mislaid wherever one ritual under baboon the more and provident therefore one therefore hardheadedly and until neglectful far far needlessly then amazing much jeez instead turtle far so.',
		'bjcq hk rjk hcnukp!'
	)
); //, 'show me the monkey!');
console.log(
	cipherFromPlaintext(
		'Anteater quickly when ethically decisive a next woolly overdrew limp strenuous however outside much moronic limpet immaculate jeepers jeepers tiger constant much rode the goodness feverish onto lavishly well before cheerfully inaudible subconsciously where much cow and vicariously some one humorously a after a less a unicorn save jeepers measurable and much grizzly with that meagerly some darn other much away far remade cuddled baneful well this compact lavish cagy anteater some some hippopotamus while and before on cuttingly until sleazily a nervelessly hey unbearably and firmly dismissively weasel wallaby much sped after jeepers together before far more by darn depending.',
		"cm'o omcyy aycjr."
	)
); //, 'it\'s still alive.');

function roofFix(f, r) {
	let result = true;
	f.split('').forEach((char, i) => {
		if ('/'.includes(char) && r[i] !== ' ') {
			result = false;
		}
	});
	return result;
}
