/*
Build Tower Advanced
Build Tower by the following given arguments:

number of floors (integer and always greater than 0)
block size (width, height) (integer pair and always greater than (0, 0))
Tower block unit is represented as *. Tower blocks of block size (2, 1) and (2, 3) would look like respectively:

  **
  **
  **
  **
for example, a tower of 3 floors with block size = (2, 3) looks like below

[
  '    **    ',
  '    **    ',
  '    **    ',
  '  ******  ',
  '  ******  ',
  '  ******  ',
  '**********',
  '**********',
  '**********'
]
and a tower of 6 floors with block size = (2, 1) looks like below

[
  '          **          ', 
  '        ******        ', 
  '      **********      ', 
  '    **************    ', 
  '  ******************  ', 
  '**********************'
]
Don't return a whole string containing line-endings but a list/array/vector of strings instead!

This kata might looks like a 5.5kyu one. So challenge yourself!
*/

/*
tower array starts empty
calculate starting block width, block height and side gap
loop from 0 to floors - 1
if i > 0:
increase block width by starting block width * 2
if side gap >= starting block width, decrease by starting block width
each iteration's row:
' ' repeat by side gap + '*' repeat by block width + ' ' repeat by side gap
loop from 0 to block height - 1, pushing current row to tower
return tower
*/

function towerBuilder(nFloors, nBlockSz) {
	let [blockWidth, blockHeight] = [nBlockSz[0], nBlockSz[1]];
	let sideGap = nBlockSz[0] * nFloors - nBlockSz[0];
	const tower = [];
	for (let i = 0; i < nFloors; i++) {
		if (i > 0) {
			blockWidth += nBlockSz[0] * 2;
			if (sideGap >= nBlockSz[0]) sideGap -= nBlockSz[0];
		}
		const row =
			' '.repeat(sideGap) + '*'.repeat(blockWidth) + ' '.repeat(sideGap);
		for (let j = 0; j < blockHeight; j++) {
			tower.push(row);
		}
	}
	return tower;
}

console.log(JSON.stringify(towerBuilder(1, [1, 1]))); //, JSON.stringify(["*"]));
console.log(JSON.stringify(towerBuilder(3, [4, 2]))); //, JSON.stringify(['        ****        ', '        ****        ', '    ************    ', '    ************    ', '********************', '********************']));
