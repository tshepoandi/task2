function square(size, character = '#') {
	for (let i = 0; i < size; i++) console.log(character.repeat(size));
}
square(2, '*');
