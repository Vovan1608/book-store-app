import { getAxios } from "../services/API";
import { useState, useEffect } from 'react';
import Search from "./Search";
import Card from "./Card";

const Books = () => {
	const [books, setBooks] = useState([]);
	const [searchExp, setSearchExp] = useState('');
	const [filtered, setFiltered] = useState([]);

	useEffect(_ => {
		getAxios('/books').then(res => setBooks(res.data));
	}, [setBooks]);

	useEffect(() => {
		const searchRegExp = new RegExp(`${searchExp}`, 'i');

		if (searchExp) {
			const filter = books
				.filter(({author}) => searchRegExp.test(author));

			setFiltered(filter);
		}
	}, [searchExp]);

	const data = searchExp ? filtered : books;


	return (
		<main className="main">
			<Search passData={setSearchExp} />
			<div className="books_container">
				{data.map(book => {
					const {id, picture, name, author, description} = book;
					return (
						<Card
							key={id}
							path={picture}
							name={name}
							author={author}
							description={description}
						/>
					);
				})}
			</div>
		</main>
	);
}

export default Books;