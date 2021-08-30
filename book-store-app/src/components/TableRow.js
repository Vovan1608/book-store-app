import Actions from "./Actions";
import { getAxios } from "../services/API";
import { useState, useEffect } from 'react';

const TableRow = ({search}) => {
	const [persons, setPers] = useState([]);
	const [filteredPersons, setFilteredPersons] = useState([]);

	useEffect(_ => {
		getAxios('/authors').then(res => setPers(res.data));
	}, [setPers]);


	useEffect((persons, search) => {
		if (search) {
			const searchRegExp = new RegExp(`${search}`, 'i');
			const filtered = persons
				.filter(({name, surname}) => [name, surname].some(el => searchRegExp.test(el)));

			setFilteredPersons(filtered);
		}
	}, [setFilteredPersons]);

	const data = search ? filteredPersons : persons;

	return (
		<tbody>
			{data.map(person => {
				const {createdAt, id, name, surname, phone, email} = person;

				return (
					<tr key={createdAt}>
						<td>{id}</td>
						<td>{name}</td>
						<td>{surname}</td>
						<td>{phone}</td>
						<td>{email}</td>
						<td>
							<Actions />
						</td>
					</tr>
				);
			})}
		</tbody>
	);
}

export default TableRow;