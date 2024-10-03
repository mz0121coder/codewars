/*
#Sort the columns of a csv-file

You get a string with the content of a csv-file. The columns are separated by semicolons.
The first line contains the names of the columns.
Write a method that sorts the columns by the names of the columns alphabetically and incasesensitive.

An example:

Before sorting:
As table (only visualization):
|myjinxin2015|raulbc777|smile67|Dentzil|SteffenVogel_79|
|17945       |10091    |10088  |3907   |10132          |
|2           |12       |13     |48     |11             |

The csv-file:
myjinxin2015;raulbc777;smile67;Dentzil;SteffenVogel_79\n
17945;10091;10088;3907;10132\n
2;12;13;48;11

----------------------------------

After sorting:
As table (only visualization):
|Dentzil|myjinxin2015|raulbc777|smile67|SteffenVogel_79|
|3907   |17945       |10091    |10088  |10132          |
|48     |2           |12       |13     |11             |

The csv-file:
Dentzil;myjinxin2015;raulbc777;smile67;SteffenVogel_79\n
3907;17945;10091;10088;10132\n
48;2;12;13;11
There is no need for prechecks. You will always get a correct string with more than 1 line und more than 1 row. All columns will have different names.

Have fun coding it and please don't forget to vote and rank this kata! :-)

I have created other katas. Have a look if you like coding and challenges.
*/

function sortCsvColumns(csvFileContent) {
	const columnNames = csvFileContent
		.split('\n')[0]
		.split(';')
		.map(name => name.toLowerCase());

	const indexes = columnNames.reduce((obj, name, i) => {
		obj[name] = i;
		return obj;
	}, {});

	const sortedIndexes = [...columnNames].sort().map(name => indexes[name]);
	const result = [];

	for (const row of csvFileContent.split('\n')) {
		const sortedRow = [];
		const cells = row.split(';');
		for (const index of sortedIndexes) sortedRow.push(cells[index]);
		result.push(sortedRow.join(';'));
	}

	return result.join('\n');
}

const preSorting1 =
	'myjinxin2015;raulbc777;smile67;Dentzil;SteffenVogel_79\n' +
	'17945;10091;10088;3907;10132\n' +
	'2;12;13;48;11';
const postSorting1 =
	'Dentzil;myjinxin2015;raulbc777;smile67;SteffenVogel_79\n' +
	'3907;17945;10091;10088;10132\n' +
	'48;2;12;13;11';

console.log(sortCsvColumns(preSorting1));

const preSorting2 =
	'IronMan;Thor;Captain America;Hulk\n' +
	'arrogant;divine;honorably;angry\n' +
	'armor;hammer;shield;greenhorn\n' +
	'Tony;Thor;Steven;Bruce';
const postSorting2 =
	'Captain America;Hulk;IronMan;Thor\n' +
	'honorably;angry;arrogant;divine\n' +
	'shield;greenhorn;armor;hammer\n' +
	'Steven;Bruce;Tony;Thor';

console.log(sortCsvColumns(preSorting2));
