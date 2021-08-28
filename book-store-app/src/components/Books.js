import { getAxios } from "../services/API";
import { useState, useEffect } from 'react';
import Search from "./Search";
import Card from "./Card";

export default function Books() {
	const [books, setBooks] = useState([]);

	useEffect(_ => {
		getAxios('/books').then(res => setBooks(res.data));
	}, [setBooks]);

	return (
		<main className="main">
			<Search />
			<div className="books_container">
				{books.map(book => {
					const {id, picture, name, date_of_publication, description} = book;
					return (
						<Card
							key={id}
							path={picture}
							name={name}
							publication={date_of_publication}
							description={description}
						/>
					);
				})}
			</div>
		</main>
	);
}