/*
Returns the commom directory path for specified array of full filenames.

 @param {array} pathes
 @return {string}
Examples:

  ['/web/images/image1.png', '/web/images/image2.png']  => '/web/images/'
  ['/web/assets/style.css', '/web/scripts/app.js',  'home/setting.conf'] => ''
  ['/web/assets/style.css', '/.bin/mocha',  '/read.me'] => '/'
  ['/web/favicon.ico', '/web-scripts/dump', '/webalizer/logs'] => '/'
(c)RSS
*/

/*
loop from 0 to infinity, on each iteration:
if every string in pathes has same character at current index, add character to result string
else end the loop
return result up to last index of '/' + 1
*/

function getCommonDirectoryPath(pathes) {
	let result = '';
	for (let i = 0; i < 100; i++) {
		const chars = new Set();
		for (const path of pathes) chars.add(path[i]);
		if (chars.size === 1) {
			result += [...chars][0];
		} else {
			break;
		}
	}
	return result.slice(0, result.lastIndexOf('/') + 1);
}

console.log(
	getCommonDirectoryPath(['/web/images/image1.png', '/web/images/image2.png'])
);
console.log(
	getCommonDirectoryPath([
		'/web/assets/style.css',
		'/web/scripts/app.js',
		'home/setting.conf',
	])
);
console.log(
	getCommonDirectoryPath(['/web/assets/style.css', '/.bin/mocha', '/read.me'])
);
console.log(
	getCommonDirectoryPath([
		'/web/favicon.ico',
		'/web-scripts/dump',
		'/webalizer/logs',
	])
);
