/*
Welcome to my (amazing) kata!
You are given a gigantic number to decode. Each number is a code that alternates in a pattern between encoded text and a smaller, encoded number. The pattern's length varies with every test, but the alternation between encoded text and an encoded number will always be there. Following this rule, each number tested begins with encoded text and ends with an encoded number.

How the encoding works
Now, we should probably review how the string of numbers is formed - considering you have to unform it. So, first, some text is taken, and encoded. The system of encoding is taking each letter's position in the alphabet and adding 100 to it. For example, m in the real text would be 113 in the code-number.

After the text, there is a binary number. You should convert this number to a normal, base 10 decimal (all of them can be converted into whole, non-negative numbers).

Separating encoded text and encoded numbers, there is a 98. Because the numbers are in binary, the only digits they use are '0' and '1', and each letter of the alphabet, encoded, is between 101-127, all instances of 98 are to indicate a separation between encoded text and encoded numbers. There may also be a 98 at the very end of the number.

When you return your final answer, the text and numbers should always be separated by a comma (,)

Example
decode(103115104105123101118119981001098113113113981000) = "codewars, 18, mmm, 8"
The part of the code until the first 98 can be decoded to "codewars". 10010 is binary for 18. 113113113 translates to "mmm". And 1000 is binary for 8.

Here is a visualisation of the example:

103 115 104 105 123 101 118 119   98   10010   98   113 113 113   98   1000
 c   o   d   e   w   a   r   s     ,     18     ,    m   m   m     ,     8
Good luck!
*/

/*
remove '98' at end of number if it is there
replace all other '98' with ', '

loop through sections (split by ', '):
if index of section is even: 
replace every 3 digits by their letter
(subtract 101, return letter at this index in alphabet)

if index of section is odd: 
replace the binary number with its base 10 decimal
*/

function decode(number) {
	let str = number.replace(/98$/, '').replace(/98/g, ', ');
	const sections = str.split(', ');

	let result = '';
	const alphabet = 'abcdefghijklmnopqrstuvwxyz';
	sections.forEach((section, i) => {
		//     decode digits to letter
		if (i % 2 === 0) {
			const digits = section.match(/\d{3}/g);
			digits.forEach(num => {
				const index = Number(num) - 101;
				result += alphabet[index];
			});
		}
		//     decode binary to base 10
		if (i % 2 !== 0) {
			const baseTen = Number.parseInt(section, 2);
			console.log(baseTen);
			result += `${baseTen}`;
		}
		if (i < sections.length - 1) result += ', ';
	});

	return result;
}

console.log(decode('103115104105123101118119981001098')); //, "codewars, 18");
console.log(
	decode(
		'103115104105123101118119981001098103115104105123101118119981001098103115104105123101118119981001098'
	)
); //, "codewars, 18, codewars, 18, codewars, 18");
console.log(
	decode(
		'1091011161151121151071091261051061151181081151231191201211161091041201081091191111011201011091199810010981051221051141201081151211071081091201191021181091121121091011141209810001'
	)
); //, "iapologizeforhowstupidthiskatais, 18, eventhoughitsbrilliant, 17");
console.log(
	decode('119112105105116981000981091199810019810612111498100000110001')
); //, "sleep, 8, is, 9, fun, 2097");
console.log(
	decode(
		'109106125115121108101122105101114125103115113116112101109114120119109120119114115120113125106101121112120981100019810911210911110511911210510511698111000100100981191131091121051251061011031059810001'
	)
); //, "ifyouhaveanycomplaintsitsnotmyfault, 49, ilikesleep, 3620, smileyface, 17");
console.log(
	decode(
		'12310810511498100010981091231011191011251151211141071021151259810001109811312510610112010810511812011511511111310510911412011512010810510310912012598100100098113103118109119101123105119115113105981000198'
	)
); //, "when, 34, iwasayoungboy, 70, myfathertookmeintothecity, 72, mcrisawesome, 17");
console.log(
	decode(
		'120108105118105109119101112109107108120981001010101098102105108109114104125115121118105125105119981000'
	)
); //, "thereisalight, 1194, behindyoureyes, 8");
console.log(
	decode(
		'1251151211191081151211121041061051051121191251131161011201081251061151181131059810001009812010810911911611811510711810111310711210912010310810510410111410410410511210512010510411312510610911811912012210511811910911511411510612010810911911110112010198100001098109120119114115120115111101125981000109811110911410411510611210911110510911311411512011511110112510911611811511310911910598100010'
	)
); //, "youshouldfeelsympathyforme, 68, thisprogramglitchedanddeletedmyfirstversionofthiskata, 66, itsnotokay, 34, kindoflikeimnotokayipromise, 34");
console.log(
	decode(
		'1091011131021151181051041191151091011131071151091141071201151201251161051181011141041151131121051201201051181199810000001001010100101010101010198102112101108101112119104110111106101112104119111106110101119104108107101119112104108107101119121112109104107108981000101001011981011191041111081071121041121011111101081079810001010010198119112105105116101104112106110112104101119104106104106104119115113105120108109114107109119114115120118101114104115113104101106104101106108104101112111110106108109114108105118105981000001010010101001010100101010101098117105118120125121109115116101119104106107108110111112126124103122102114113123123123123123117105118120125121109115116101119104106107108110111112126124103122102114113123123123123123117105118120125121109115116101119104106107108110111112126124103122102114113123123123123123117105118120125121109115116101119104106107108110111112126124103122102114113123123123123123117105118120125121109115116101119104106107108110111112126124103122102114113123123123123123117105118120125121109115116101119104106107108110111112126124103122102114113123123123123123117105118120125121109115116101119104106107108110111112126124103122102114113123123123123123981000101010'
	)
); //, "iamboredsoiamgoingtotyperandomletters, 541758805, blahalsdjkfaldskfjasdhgasldhgasulidgh, 4427, asdkhgldlakjhg, 2213, sleepadlfjldasdfdfdsomethingisnotrandomdafdafhdalkjfhinhere, 17526510250, qertyuiopasdfghjklzxcvbnmwwwwwqertyuiopasdfghjklzxcvbnmwwwwwqertyuiopasdfghjklzxcvbnmwwwwwqertyuiopasdfghjklzxcvbnmwwwwwqertyuiopasdfghjklzxcvbnmwwwwwqertyuiopasdfghjklzxcvbnmwwwwwqertyuiopasdfghjklzxcvbnmwwwww, 554");
console.log(
	decode(
		'1091061251151211231051181051211191091141071201081051161181091141201031151131131011141041151181191151131051201081091141071011141041181051011041091141071201081091191021181091121121011091141201031151141221051181191011201091151141091081151161051251151211051141101151251051041091201011141041201081011201091201131011041051211161061151181201081051201051181181091021121051111011201011201081011201091131011041051151201081051181231091191051091071211051191191091011131201011121111091141071201151131251191051121061011121191151091031011141201211191051191161011031051191151181161211141031201211011201091151141151061011141251191151181201011141041091201091191041181091221091141071131051011021191151121211201051121251091141191011141051231051121121251151211071051201201081051161151091141201191151211131081011221051011141091031051041011251011141041021251051011141041121091191201051141201151131251031081051131091031011121181151131011141031051201081051251011181051011131011261091141071201081011201091191011121121061151181201151041011251201081051231051011201081051181091191141091031051071151161121011251151211201191091041059810010010100101010010101010100101010001001001'
	)
); //, "ifyouwereusingtheprintcommandorsomethingandreadingthisbrillaintconversationihopeyouenjoyeditandthatitmadeupfortheterriblekatathatimadeotherwiseiguessiamtalkingtomyselfalsoicantusespacesorpunctuationofanysortanditisdrivingmeabsolutelyinsanewellyougetthepointsoumhaveanicedayandbyeandlistentomychemicalromancetheyareamazingthatisallfortodaytheweatherisnicegoplayoutside, 10073085203529");
