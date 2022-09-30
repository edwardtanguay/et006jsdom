const contentElem = document.querySelector('.content');

const books = [
	{
		title: "Psychology 101",
		author: "George Anton"
	},
	{
		title: "1984",
		author: "George Orwell"
	}
];

contentElem.innerHTML = `
	<h1>Book Site</h1>
	<h2>There are ${books.length} books:</h2>

	<div className="books">
		${books.map(book => {
			return `
			<div>${book.title}</div>
			<div class="description">${book.author}</div>
			`;
		}).join('')}	
	</div>
`; 