import { getAxios } from "../services/API";
import { useState, useEffect } from 'react';
import Search from "./Search";
import Card from "./Card";

const Books = _ => {
	const [books, setBooks] = useState([]);

	useEffect(_ => {
		getAxios('/books').then(res => setBooks(res.data));
	}, [setBooks]);

	return (
		<main className="main">
			<Search />
			<div className="books_container">
				{books.map(book => {
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