import React from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react';

export default function PersonList() {
	const [persons, setPersons] = useState([]);

	useEffect(() => {
		axios.get(`http://localhost:3000/users`)
			.then(res => {
				const allPersons = res.data;
				setPersons(allPersons);
    });
	}, [setPersons]);

	return (
		<ul>
			{ persons.map(person => <li key={person.createdAt + person.id}>{person.email}</li>)}
		</ul>
	)
}
// export default class PersonList extends React.Component {
//   state = {
//     persons: []
//   }

//   componentDidMount() {
//     axios.get(`http://localhost:3000/users`)
//       .then(res => {
//         const persons = res.data;
//         this.setState({ persons });
//       })
//   }

//   render() {
//     return (
//       <ul>
//         { this.state.persons.map(person => <li key={person.createdAt + person.id}>{person.email}</li>)}
//       </ul>
//     )
//   }
// }