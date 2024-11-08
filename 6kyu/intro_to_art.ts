/*
Help prepare for the entrance exams to art school.

It is known in advance that this year, the school chose the symmetric letter “W” as the object for the image, and the only condition for its image is only the size that is not known in advance, so as training, you need to come up with a way that accurately depicts the object.

Write a function that takes an integer and returns a list of strings with a line-by-line image of the object.

Below is an example function:

get_w(3) # should return:
[
'*   *   *',
' * * * * ',
'  *   *  '
]

get_w(5) # should return:
[
'*       *       *',
' *     * *     * ',
'  *   *   *   *  ',
'   * *     * *   ',
'    *       *    '
]
Return an empty list for height < 2.
*/

export function getW(height: number) {
	if (height < 2) return [];
	const image: string[] = [];
	const stars: number[] = [0, height * 2 - 2, height * 2 - 2, height * 4 - 4];
	for (let i = height; i >= 1; i--) {
		const row: string[] = ' '.repeat(height * 4 - 3).split('');
		stars.forEach(idx => (row[idx] = '*'));
		image.push(row.join(''));
		stars[0]++;
		stars[1]--;
		stars[2]++;
		stars[3]--;
	}
	return image;
}

console.log(getW(50));
