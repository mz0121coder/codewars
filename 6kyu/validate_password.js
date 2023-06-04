/*I will give you a string. You respond with "VALID" if the string meets the requirements or "INVALID" if it does not.

Passwords must abide by the following requirements:

More than 3 characters but less than 20.

Must contain only alphanumeric characters.

Must contain letters and numbers.*/

const validPass = password =>
	password.length > 3 &&
	password.length < 20 &&
	/[a-z]/i.test(password) &&
	/[0-9]/.test(password) &&
	password.split('').every(char => /[a-z0-9]/i.test(char))
		? 'VALID'
		: 'INVALID';

console.log(validPass('Username123')); // , 'VALID' );
console.log(validPass('Username')); // , 'INVALID' );
console.log(validPass('1Username')); // , 'VALID' );
console.log(validPass('123')); // , 'INVALID' );
console.log(validPass('a12')); // , 'INVALID' );
console.log(validPass('1234')); // , 'INVALID' );
console.log(validPass('a123')); // , 'VALID' );
console.log(validPass('Username123!')); // , 'INVALID' );
console.log(validPass('passw0rdIsntTooLong')); // , 'VALID' )
console.log(validPass('passw0rd1CharTooLong')); // , 'INVALID' )
