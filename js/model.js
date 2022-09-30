const techBooksUrl = 'https://edwardtanguay.netlify.app/share/techBooks.json';

export const books = [
	{
		title: 'Psychology 101',
		author: 'George Anton'
	},
	{
		title: '1984',
		author: 'George Orwell'
	}
];

export const getTechBooks = () => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			(async () => {
				const response = await fetch(techBooksUrl);
				console.log(response);
				const techBooks = await response.json();
				resolve(techBooks);
			})();
		}, 3000);
	});
};
