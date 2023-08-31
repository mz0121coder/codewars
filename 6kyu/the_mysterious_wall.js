/*
In this Kata you are a builder and you are assigned a job of building a wall with a specific size (God knows why...).

Create a function called build_a_wall (or buildAWall in JavaScript) that takes x and y as integer arguments (which represent the number of rows of bricks for the wall and the number of bricks in each row respectively) and outputs the wall as a string with the following symbols:

■■ => One full brick (2 of ■)

■ => Half a brick

| => Mortar (between bricks on same row)

There has to be a | between every two bricks on the same row. For more stability each row's bricks cannot be aligned vertically with the bricks of the row above it or below it meaning at every 2 rows you will have to make the furthest brick on both sides of the row at the size of half a brick (■) while the first row from the bottom will only consist of full bricks. Starting from the top, every new row is to be represented with \n except from the bottom row. See the examples for a better understanding.

If one or both of the arguments aren't valid (less than 1, isn't integer, isn't given...etc) return None in Python or null in JavaScript.

If the number of bricks required to build the wall is greater than 10000 return "Naah, too much...here's my resignation."

Examples, based on Python:

build_a_wall(5,5) => '■■|■■|■■|■■|■■\n■|■■|■■|■■|■■|■\n■■|■■|■■|■■|■■\n■|■■|■■|■■|■■|■\n■■|■■|■■|■■|■■'

build_a_wall(10,7) => '■|■■|■■|■■|■■|■■|■■|■\n■■|■■|■■|■■|■■|■■|■■\n■|■■|■■|■■|■■|■■|■■|■\n■■|■■|■■|■■|■■|■■|■■\n■|■■|■■|■■|■■|■■|■■|■\n■■|■■|■■|■■|■■|■■|■■\n■|■■|■■|■■|■■|■■|■■|■\n■■|■■|■■|■■|■■|■■|■■\n■|■■|■■|■■|■■|■■|■■|■\n■■|■■|■■|■■|■■|■■|■■'

build_a_wall("eight",[3]) => None  }
                                   }> Invalid input
build_a_wall(12,-4) => None        }

build_a_wall(123,987) => "Naah, too much...here's my resignation."
123 * 987 = 121401 > 10000
BTW this is my first Kata so I hope I did well. ^_^
*/

function buildAWall(rows, bricks) {
	if ([rows, bricks].some(el => typeof el !== 'number' || el < 1 || el % 1)) {
		return null;
	}
	if (rows * bricks > 10000) {
		return `Naah, too much...here's my resignation.`;
	}
	const wall = [];
	// rows with half or full brick on sides
	const halfSides = '■|' + '■■|'.repeat(bricks - 1) + '■';
	const fullSides = '■■|'.repeat(bricks - 1) + '■■';
	// odd and even numbered rows
	const oddRow = rows % 2 ? fullSides : halfSides;
	const evenRow = rows % 2 ? halfSides : fullSides;
	// fill wall
	for (let i = 1; i <= rows; i++) {
		wall.push(i % 2 ? oddRow : evenRow);
	}
	return wall.join('\n');
}

console.log(buildAWall(4, 5)); //, "■|■■|■■|■■|■■|■\n■■|■■|■■|■■|■■\n■|■■|■■|■■|■■|■\n■■|■■|■■|■■|■■");
console.log(buildAWall(10, 7)); //, "■|■■|■■|■■|■■|■■|■■|■\n■■|■■|■■|■■|■■|■■|■■\n■|■■|■■|■■|■■|■■|■■|■\n■■|■■|■■|■■|■■|■■|■■\n■|■■|■■|■■|■■|■■|■■|■\n■■|■■|■■|■■|■■|■■|■■\n■|■■|■■|■■|■■|■■|■■|■\n■■|■■|■■|■■|■■|■■|■■\n■|■■|■■|■■|■■|■■|■■|■\n■■|■■|■■|■■|■■|■■|■■");
console.log(buildAWall()); //, null);
console.log(buildAWall('eight', [3])); //, null);
console.log(buildAWall(12, -4)); //, null);
console.log(buildAWall(0, 9)); //, null);
console.log(buildAWall(123, 987)); //, "Naah, too much...here's my resignation.");
