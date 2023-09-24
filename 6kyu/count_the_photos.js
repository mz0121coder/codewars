/*
In a string we describe a road. There are cars that move to the right and we denote them with ">" and cars that move to the left and we denote them with "<". There are also cameras that are indicated by: " . ".
A camera takes a photo of a car if it moves to the direction of the camera.

Task
Your task is to write a function such that, for the input string that represents a road as described, returns the total number of photos that were taken by the cameras. The complexity should be strictly O(N) in order to pass all the tests.


Examples
For ">>." -> 2 photos were taken
For ".>>" -> 0 photos were taken
For ">.<." -> 3 photos were taken
For ".><.>>.<<" -> 11 photos were taken
*/

function countPhotos(road) {
	let right = -1;
	let rightCars = 0;
	let rightPhotos = 0;

	let left = road.length;
	let leftCars = 0;
	let leftPhotos = 0;

	while (right < road.length - 1 && left > 0) {
		right++;
		if (road[right] === '>') rightCars++;
		if (road[right] === '.') rightPhotos += rightCars;
		left--;
		if (road[left] === '<') leftCars++;
		if (road[left] === '.') leftPhotos += leftCars;
	}
	return rightPhotos + leftPhotos;
}

console.log(countPhotos('>.>..<')); //, 8);

console.log(countPhotos('.><.>>.<<')); //, 11);

console.log(countPhotos('.>>>')); //, 0);

console.log(countPhotos('>..<<.>.<.')); //, 15);

console.log(countPhotos('.<>>..><.<<<<<.')); //, 34);

console.log(countPhotos('<..>>..>>.><.<.><..<')); //, 57);

console.log(countPhotos('<<.')); //, 0);

console.log(countPhotos('>>>.<<<')); //, 6);

console.log(countPhotos('..')); //, 0);

console.log(countPhotos('>>><<<')); //, 0);

console.log(countPhotos('..<>.>>.><>>.<<<.<>>.>.>>>>>..><<.>.>>..>.>>><><>.')); //, 248);
