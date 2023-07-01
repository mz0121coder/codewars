/*
Given a string, determine if it's a valid identifier.

Here is the syntax for valid identifiers:
Each identifier must have at least one character.
The first character must be picked from: alpha, underscore, or dollar sign. The first character cannot be a digit.
The rest of the characters (besides the first) can be from: alpha, digit, underscore, or dollar sign. In other words, it can be any valid identifier character.
Examples of valid identifiers:
i
wo_rd
b2h
Examples of invalid identifiers:
1i
wo rd
!b2h
*/

// check first character match either a letter, underscore or dollar sign
// check all other characters match either a letter, underscore, dollar sign or digit

const isValid = idn => /^[a-z$_]+[a-z$_\d]*$/i.test(idn);

console.log(isValid('1ok0okay')); //, false, "Wrong result for '1ok0okay'");
console.log(isValid('!Ok')); //, false, "Wrong result for '!Ok'");
console.log(isValid('')); //, false, "Wrong result for an empty string");
console.log(isValid('str-str')); //, false, "Wrong result for 'str-str'");
console.log(isValid('no no')); //, false, "Wrong result for 'no no'");
