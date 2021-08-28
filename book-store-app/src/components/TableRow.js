import Actions from "./Actions";
import { getAxios } from "../services/API";
import { useState, useEffect } from 'react';

export default function TableRow() {
	const [persons, setPers] = useState([]);

	useEffect(_ => {
		getAxios('/authors').then(res => setPers(res.data));
	}, [setPers]);

	return (
		<tbody>
			{persons.map(person => {
				return (
					<tr key={person.createdAt}>
						<td>{person.id}</td>
						<td>{person.name}</td>
						<td>{person.surname}</td>
						<td>{person.phone}</td>
						<td>{person.email}</td>
						<td>
							<Actions />
						</td>
					</tr>
				);
			})}
		</tbody>
	);
}