import Actions from "./Actions";
import { getAxios } from "../services/API";
import { useState, useEffect } from 'react';

const TableRow = ({search}) => {
	const [persons, setPers] = useState([]);
	const [filtered, setFiltered] = useState([]);

	useEffect(() => {
		getAxios('/authors').then(res => setPers(res.data));
	}, [setPers]);

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