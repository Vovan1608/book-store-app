import Actions from "./Actions";
import { getAxios } from "../services/API";
import { useState, useEffect } from 'react';

const TableRow = _ => {
	const [persons, setPers] = useState([]);

	useEffect(_ => {
		getAxios('/authors').then(res => setPers(res.data));
	}, [setPers]);

	return (
		<tbody>
			{persons.map(person => {
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