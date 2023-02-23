function validPhoneNumber(phoneNumber) {
	return phoneNumber.match(/^\([0-9]{3}\) [0-9]{3}\-[0-9]{4}$/) !== null;
}
console.log(validPhoneNumber('(123) 456-7890'));
