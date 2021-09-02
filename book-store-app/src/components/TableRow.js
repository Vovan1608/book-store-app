import React from "react";
import Actions from "./Actions";
import { fetchData } from "../services/API";
import { useState, useEffect } from 'react';

const TableRow = ({search}) => {
	const [persons, setPers] = useState([]);
	const [filtered, setFiltered] = useState([]);

	useEffect(() => fetchData('/authors', setPers), [setPers]);

	useEffect(() => {
		const searchRegExp = new RegExp(`${search}`, 'i');
		const filter = persons
			.filter(({name, surname}) => [name, surname].some(el => searchRegExp.test(el)));

		setFiltered(filter);

	}, [search, persons, setFiltered]);

	const data = search ? filtered : persons;

	return (
		<tbody>
			{data.map(person => {
				const {createdAt, id, name, surname, date_of_birth, date_of_death} = person;

				return (
					<tr key={createdAt + id + name}>
						<td>{id}</td>
						<td>{name}</td>
						<td>{surname}</td>
						<td>{date_of_birth}</td>
						<td>{date_of_death}</td>
						<td>
							<Actions id={id} setPers={setPers} persons={persons}/>
						</td>
					</tr>
				);
			})}
		</tbody>
	);
}

export default TableRow;