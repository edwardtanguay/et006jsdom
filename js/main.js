import { books, getTechBooks } from './model.js';

const contentElem = document.querySelector('.content');

const techBooks = await getTechBooks();
const frenchTechBooks = await getTechBooks('french');

console.log(techBooks);

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
	<h2>There are ${techBooks.length} tech books:</h2>
	<div class="techBooks">
		${techBooks
			.map((techBook) => {
				return `
			<div class="techBook">
				<div class="title">${techBook.title}</div>
				<div class="description">${techBook.description}</div>
			</div>
			`;
			})
			.join('')}	
	</div>
`;
