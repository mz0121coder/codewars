/*
Implement String#ipv4_address?, which should return true if given object is an IPv4 address - four numbers (0-255) separated by dots.

It should only accept addresses in canonical representation, so no leading 0s, spaces etc.
*/

String.prototype.ipv4Address = function () {
	const digits = this.split('.');
	return (
		digits.length === 4 &&
		digits.every(
			num =>
				/^0$|^[1-9][0-9]{0,2}$/.test(num) &&
				Number(num) >= 0 &&
				Number(num) <= 255
		)
	);
};

console.log('127.0.0.1'.ipv4Address());
console.log('0.0.0.0'.ipv4Address());
console.log('255.255.255.255'.ipv4Address());
console.log('10.20.30.40'.ipv4Address());

console.log(''.ipv4Address());
console.log('10.256.30.40'.ipv4Address());
console.log('10.20.030.40'.ipv4Address());
console.log('127.0.1'.ipv4Address());
console.log('127.0.0.0.1'.ipv4Address());
console.log('..255.255'.ipv4Address());
console.log('127.0.0.1\n'.ipv4Address());
console.log('\n127.0.0.1'.ipv4Address());
console.log(' 127.0.0.1'.ipv4Address());
console.log('127.0.0.1 '.ipv4Address());
console.log(' 127.0.0.1 '.ipv4Address());
console.log('127.0.0.1.'.ipv4Address());
console.log('.127.0.0.1'.ipv4Address());
console.log('127..0.1'.ipv4Address());
