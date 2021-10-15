function columns(sentence = [' ']) {
	let column = [];
	let longestWord = [];
	sentence.forEach((word) => {
		longestWord.push(word.length);
	});
	longestWord.sort((a, b) => {
		return b - a;
	});
	for (let i = 0; i < longestWord[0]; i++)
		sentence.forEach((element) => {
			if (element.charAt(i) !== '') {
				column.push(element.charAt(i));
			}
			if (element.charAt(i) === '') {
				column.push(' ');
			}
			if (column.length == sentence.length) {
				console.log(column.join(' '));
				column = [];
			}
		});
}
columns(['write', 'good', 'code', 'every', 'day']);
