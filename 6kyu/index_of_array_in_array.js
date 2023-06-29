// THROW AN ERROR IF THESE CONDITIONS ARE NOT MET:
// every item in arrayToSearch must be an array of length 2
// query must be an array of length 2
// IF THE CONDITIONS ARE MET:
// return index of first item in arrayToSearch that matches this requirement:
// every element must match element at same index in query array

const searchArray = function (arrayToSearch, query) {
	if (
		!Array.isArray(query) ||
		query.length !== 2 ||
		arrayToSearch.some(item => !Array.isArray(item) || item.length !== 2)
	) {
		throw Error;
	}
	const match = arrayToSearch.findIndex(
		item =>
			Array.isArray(item) &&
			item.length === 2 &&
			item.every((el, i) => el === query[i])
	);
	return match;
};
