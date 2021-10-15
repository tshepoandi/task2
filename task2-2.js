function triangle(size, mode = 'left') {
	if (mode === 'left') {
		for (let i = 1; i <= size; i++) console.log('#'.repeat(i));
	}
	if (mode === 'right') {
		for (let i = size - 1; i >= 0; i--)
			console.log(' '.repeat(i) + '#'.repeat(parseInt(size) - i));
	}
	if (mode === 'isosceles' && size > 0) {
		let oddNumbers = 1;
		for (let i = size; i > 0; i--) {
			console.log(
				' '.repeat(i - 1) + '#'.repeat(oddNumbers) + ' '.repeat(i - 1),
			);
			oddNumbers = oddNumbers + 2;
		}
	}
	if (mode === 'isosceles' && size < 0) {
		size = size * -1;
		let numberOfCharacters = size - 1 + size;
		for (let i = 0; i < size; i++) {
			console.log(
				' '.repeat(i) + '#'.repeat(numberOfCharacters) + ' '.repeat(i),
			);
			numberOfCharacters = numberOfCharacters - 2;
		}
	} else {
		return ' ';
	}
}
triangle(-4, 'isosceles');
