/*
Insert an "egg" after each consonant. If there are no consonants, there will be no eggs. Argument will consist of a string with only alphabetic characters and possibly some spaces.

eg:

hello => heggeleggleggo

eggs => egegggeggsegg

FUN KATA => FeggUNegg KeggATeggA

////

This Kata is designed for beginners to practice the basics of regular expressions. With this in mind a little bit of commenting in your solution could be very useful.

Check Eloquent Javascript p176

https://regex101.com/#javascript
*/

const heggeleggleggo = word =>
	word.replace(/[^aeiou ]/gi, char => `${char}egg`);

console.log(heggeleggleggo('hello')); //, "heggeleggleggo")
console.log(heggeleggleggo('code here')); //, "ceggodegge heggeregge")
