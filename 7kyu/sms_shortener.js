/*
SMS messages are limited to 160 characters. It tends to be irritating, especially when freshly written message is 164 characters long.

Your task is to shorten the message to 160 characters, starting from end, by replacing spaces with camelCase, as much as necessary.

If all the spaces are replaced but the resulting message is still longer than 160 characters, just return that resulting message.

Example 1:

Original message (169 chars):

No one expects the Spanish Inquisition! Our chief weapon is surprise, fear and surprise; two chief weapons, fear, surprise, and ruthless efficiency! And that will be it.
Shortened message (160 chars):

No one expects the Spanish Inquisition! Our chief weapon is surprise, fear and surprise; two chief weapons, fear,Surprise,AndRuthlessEfficiency!AndThatWillBeIt.
Example 2:

Original message (269 chars):

SMS messages are limited to 160 characters. It tends to be irritating, especially when freshly written message is 164 characters long. SMS messages are limited to 160 characters. It tends to be irritating, especially when freshly written message is 164 characters long.
Shortened message (228 chars):

SMSMessagesAreLimitedTo160Characters.ItTendsToBeIrritating,EspeciallyWhenFreshlyWrittenMessageIs164CharactersLong.SMSMessagesAreLimitedTo160Characters.ItTendsToBeIrritating,EspeciallyWhenFreshlyWrittenMessageIs164CharactersLong.
*/

// if message length <= 160 return 'This message is already short enough!'
// otherwise use a result array
//  track characters over 160
// loop backwards through message string
// decrease over160 count by 1 for each space and add '*' to beginning of result (until count reaches 0 or message is finished)
// add other characters as they are to beginning of result array
// join result and replace '*' and next character with just the character uppercased to return the camelCased result

const shortener = function (message) {
	if (message.length <= 160) {
		return 'This message is already short enough!';
	}
	let over160 = message.length - 160;
	const result = [];
	for (let i = message.length - 1; i >= 0; i--) {
		if (message[i] === ' ' && over160 > 0) {
			result.unshift('*');
			over160--;
		} else {
			result.unshift(message[i]);
		}
	}
	return result.join('').replace(/\*./g, x => x[1].toUpperCase());
};
