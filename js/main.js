const contentElem = document.querySelector('.content');

const books = [
	{
		title: 'Psychology 101',
		author: 'George Anton'
	},
	{
		title: '1984',
		author: 'George Orwell'
	}
];

contentElem.innerHTML = `
	<h1>Book Site</h1>
	<h2>There are ${books.length} books:</h2>

	<div class="books">
		${books
			.map((book) => {
				return `
			<div class="book">
				<div class="title">${book.title}</div>
				<div class="description">${book.author}</div>
			</div>
			`;
			})
			.join('')}	
	</div>
`;
