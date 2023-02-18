function towerBuilder(nFloors) {
  const tower = [];
  let count = -1;
  // spacing on each side, increase by 1 for each floor
  let spaceCount = nFloors;
  let space = ' ';
  // decrease bricks by 2 for each floor
  let brick = '*';
  for (let i = 0; i < nFloors; i++) {
    count += 2;
    spaceCount--;
    tower.push(
      `${space.repeat(spaceCount)}${brick.repeat(count)}${space.repeat(
        spaceCount
      )}`
    );
  }
  return tower;
}

console.log(towerBuilder(6));

/* 
[
  "     *     ", 
  "    ***    ", 
  "   *****   ", 
  "  *******  ", 
  " ********* ", 
  "***********"
]
*/
