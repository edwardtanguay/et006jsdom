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
			const techBooks = [
				{
					title: 'aaa'
				},
				{
					title: 'bbb'
				},
				{
					title: 'ccc'
				}
			];
			resolve(techBooks);
		}, 3000);
	});
};
