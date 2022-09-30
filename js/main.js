import { books, getTechBooks } from './model.js';

const contentElem = document.querySelector('.content');

const techBooks = await getTechBooks();

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
	<div class="techBooks">
		${techBooks
			.map((techBook) => {
				return `
			<div class="book">
				<div class="title">${techBook.title}</div>
			</div>
			`;
			})
			.join('')}	
	</div>
`;
