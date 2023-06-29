/*
Are you a file extension master? Let's find out by checking if Bill's files are images or audio files. Please use regex if available natively for your language.

You will create 2 string methods:

isAudio/is_audio, matching 1 or + uppercase/lowercase letter(s) (combination possible))//, with the extension .mp3, .flac, .alac, or .aac.

isImage/is_image, matching 1 or + uppercase/lowercase letter(s) (combination possible))//, with the extension .jpg, .jpeg, .png, .bmp, or .gif.

Note that this is not a generic image/audio files checker. It's meant to be a test for Bill's files only. Bill doesn't like punctuation. He doesn't like numbers, neither. Thus, his filenames are letter-only

Rules

It should return true or false, simply.
File extensions should consist of lowercase letters and numbers only.
File names should consist of letters only (uppercase, lowercase, or both)
Good luck!
*/

// String must only contain letters, one dot followed by extension name
// extension name must be lower case, other letters can be any case

String.prototype.isAudio = function () {
	return /^[A-Za-z]+\.(mp3|flac|alac|aac)$/.test(this);
};

String.prototype.isImage = function () {
	return /^[A-Za-z]+\.(jpg|jpeg|png|bmp|gif)$/.test(this);
};

console.log('Nothing Else Matters.mp3'.isAudio()); //, false, "Filename contains spaces" )
console.log('NothingElseMatters.mp3'.isAudio()); //, true)
console.log('DaftPunk.FLAC'.isAudio()); //, false, "Extension may only be lower case" )
console.log('DaftPunk.flac'.isAudio()); //, true)
console.log('AmonTobin.aac'.isAudio()); //, true)
console.log(' Amon Tobin.alac'.isAudio()); //, false, "Filename contains spaces" )
console.log('tobin.alac'.isAudio()); //, true)
console.log('Home.jpg'.isImage()); //, true)
console.log('flat.jpeg'.isImage()); //, true)
console.log('icon.bmp'.isImage()); //, true)
console.log('icon2.jpg'.isImage()); //, false, "Filename contains a non-letter character")
console.log('bounce.gif'.isImage()); //, true)
console.log('animate bounce.GIF'.isImage()); //, false, "Extension not lower case" )
console.log('transparency.png'.isImage()); //, true)
