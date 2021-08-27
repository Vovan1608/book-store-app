import React from 'react';
import { useState, useEffect } from 'react';
import { get } from './services/API';

export default function PersonList() {
	const [pers, setPers] = useState([]);

	useEffect(_ => {
		get().then(res => setPers(res.data));
	}, [setPers]);

	return (
		<ul>
			{ pers.map(p => <li key={p.createdAt + p.id}>{p.email}</li>)}
		</ul>
	)
}