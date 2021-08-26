import React from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react';

export default function PersonList() {
	const [pers, setPers] = useState([]);

	useEffect(_ => {
		axios.get(`http://localhost:3000/users`)
			.then(res => {
				const allPers = res.data;
				setPers(allPers);
    });
	}, [setPers]);

	return (
		<ul>
			{ pers.map(p => <li key={p.createdAt + p.id}>{p.email}</li>)}
		</ul>
	)
}