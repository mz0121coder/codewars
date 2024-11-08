function blockPrint(input) {
	if (/^\s*$/.test(input)) return '';
	const map = {
		A: [' AAA ', 'A   A', 'A   A', 'AAAAA', 'A   A', 'A   A', 'A   A'],
		B: ['BBBB ', 'B   B', 'B   B', 'BBBB ', 'B   B', 'B   B', 'BBBB '],
		C: [' CCC ', 'C   C', 'C    ', 'C    ', 'C    ', 'C   C', ' CCC '],
		D: ['DDDD ', 'D   D', 'D   D', 'D   D', 'D   D', 'D   D', 'DDDD '],
		E: ['EEEEE', 'E    ', 'E    ', 'EEEEE', 'E    ', 'E    ', 'EEEEE'],
		F: ['FFFFF', 'F    ', 'F    ', 'FFFFF', 'F    ', 'F    ', 'F    '],
		G: [' GGG ', 'G   G', 'G    ', 'G GGG', 'G   G', 'G   G', ' GGG '],
		H: ['H   H', 'H   H', 'H   H', 'HHHHH', 'H   H', 'H   H', 'H   H'],
		I: ['IIIII', '  I  ', '  I  ', '  I  ', '  I  ', '  I  ', 'IIIII'],
		J: ['JJJJJ', '    J', '    J', '    J', '    J', '    J', 'JJJJ '],
		K: ['K   K', 'K  K ', 'K K  ', 'KK   ', 'K K  ', 'K  K ', 'K   K'],
		L: ['L    ', 'L    ', 'L    ', 'L    ', 'L    ', 'L    ', 'LLLLL'],
		M: ['M   M', 'MM MM', 'M M M', 'M   M', 'M   M', 'M   M', 'M   M'],
		N: ['N   N', 'NN  N', 'N   N', 'N N N', 'N   N', 'N  NN', 'N   N'],
		O: [' OOO ', 'O   O', 'O   O', 'O   O', 'O   O', 'O   O', ' OOO '],
		P: ['PPPP ', 'P   P', 'P   P', 'PPPP ', 'P    ', 'P    ', 'P    '],
		Q: [' QQQ ', 'Q   Q', 'Q   Q', 'Q   Q', 'Q Q Q', 'Q  QQ', ' QQQQ'],
		R: ['RRRR ', 'R   R', 'R   R', 'RRRR ', 'R R  ', 'R  R ', 'R   R'],
		S: [' SSS ', 'S   S', 'S    ', ' SSS ', '    S', 'S   S', ' SSS '],
		T: ['TTTTT', '  T  ', '  T  ', '  T  ', '  T  ', '  T  ', '  T  '],
		U: ['U   U', 'U   U', 'U   U', 'U   U', 'U   U', 'U   U', ' UUU '],
		V: ['V   V', 'V   V', 'V   V', 'V   V', 'V   V', ' V V ', '  V  '],
		W: ['W   W', 'W   W', 'W   W', 'W W W', 'W W W', 'W W W', ' W W '],
		X: ['X   X', 'X   X', ' X X ', '  X  ', ' X X ', 'X   X', 'X   X'],
		Y: ['Y   Y', 'Y   Y', ' Y Y ', '  Y  ', '  Y  ', '  Y  ', '  Y  '],
		Z: ['ZZZZZ', '    Z', '   Z ', '  Z  ', ' Z   ', 'Z    ', 'ZZZZZ'],
	};

	const result = [];
	const characters = input.toUpperCase().trim();

	for (let i = 0; i < 7; i++) {
		const row = [...characters]
			.map(char => (char in map ? map[char][i] : '     '))
			.join(' ')
			.replace(/[A-Z]\s+$/, x => x[0]);
		result.push(row);
	}

	return result.join('\n');
}
