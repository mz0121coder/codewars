/*Mirror - Mirror
Can you mirror the properties on an object?

Given an object with properties with no value

abc: -
arara: -
xyz: -
Return a new object that have the properties with its mirrored key!

abc: cba
arara: arara
xyz: zyx
"You cannot change the original object, because if you did that the reflection would change."*/

const mirror = obj => {
	const newObj = {};
	for (const key in obj) {
		newObj[key] = key.toString().split('').reverse().join('');
	}
	return newObj;
};
