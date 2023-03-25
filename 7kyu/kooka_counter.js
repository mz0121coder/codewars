/*Hint
The trick to counting kookaburras is to listen carefully

The males sound like HaHaHa...

The females sound like hahaha...

And they always alternate male/female

Examples
ha = female => 1
Ha = male => 1
Haha = male + female => 2
haHa = female + male => 2
hahahahaha = female => 1
hahahahahaHaHaHa = female + male => 2
HaHaHahahaHaHa = male + female + male => 3*/

const kookaCounter = function (laughing) {
	let males = 0;
	let females = 0;
	laughing.split('Ha').forEach(item => {
		if (item.includes('ha')) {
			females++;
		}
	});
	laughing.split('ha').forEach(item => {
		if (item.includes('Ha')) {
			males++;
		}
	});
	return males + females;
};

console.log(kookaCounter('')); //0);
console.log(kookaCounter('hahahahaha')); //1);
console.log(kookaCounter('hahahahahaHaHaHa')); //2);
console.log(kookaCounter('HaHaHahahaHaHa')); //3);
