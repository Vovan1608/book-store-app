import Actions from "./Actions";
import { getAxios } from "../services/API";
import { useState, useEffect } from 'react';

const TableRow = ({search}) => {
	const [persons, setPers] = useState([]);
	const [filtered, setFiltered] = useState([]);

	useEffect(() => {
		getAxios('/authors').then(res => setPers(res.data));
	}, [persons]);

	useEffect(() => {
		const searchRegExp = new RegExp(`${search}`, 'i');

		if (search) {
			const filter = persons
				.filter(({name, surname}) => [name, surname].some(el => searchRegExp.test(el)));

			setFiltered(filter);
		}
	}, [search]);

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
							<Actions id={id}/>
						</td>
					</tr>
				);
			})}
		</tbody>
	);
}

export default TableRow;