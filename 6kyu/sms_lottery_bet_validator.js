/*
You were asked to write a simple validator for a company that is planning to introduce lottery betting via text messages. The same validator will be used for multiple games: e.g. 5 out of 90, 7 out of 35, etc. (N out of M)

The text messages should contain exactly N unique numbers between 1 and M (both included), separated by a comma (,) and/or space(s). Any other character makes the bet invalid.

Your task
You receive the game type and the user's text message as input, and you need to check if the bet is valid or not. If it's valid, return the chosen numbers as a list, sorted in increasing order. If it's invalid, return None, null, nil as appropriate to your language.

Note: Leading and trailing spaces will not be tested. Tabs, newlines and other whitespaces are not tested either. Think of a classic Nokia 3310 user for reference :-)

Examples
validate_bet([5, 90], "1 2 3 4 5")       -->  [1, 2, 3, 4, 5]
validate_bet([5, 90], "5 , 3, 1  4,2")   -->  [1, 2, 3, 4, 5]
validate_bet([5, 90], "1, 2; 3, 4, 5")   -->  None / null / nil
validate_bet([5, 90], "1, 2, 3, 4")      -->  None / null / nil
validate_bet([5, 90], "1, 2, 3, 4, 95")  -->  None / null / nil
*/

// split text by commas or spaces to get items
// check length of items === length of unique items and === N
// check every item is a unique number between 1 and M
// return array of items sorted in increasing order if conditions are met
// otherwise return null

function validateBet(game, text) {
	const items = text.split(/[\s+|,]/).filter(x => x !== '');
	const uniqueItems = [...new Set(items)];
	return items.length === uniqueItems.length &&
		uniqueItems.length === game[0] &&
		uniqueItems.every(
			el => el.match(/\d+/) && Number(el) > 0 && Number(el) <= game[1]
		)
		? uniqueItems.map(x => Number(x)).sort((a, b) => a - b)
		: null;
}
