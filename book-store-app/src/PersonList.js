import React from 'react';
import { useState, useEffect } from 'react';
import { get, post } from './services/API';

export default function PersonList() {
	const [pers, setPers] = useState([]);

	const user = {
		"createdAt": "2021-08-27T18:37:05.218Z",
		"name": "Tomas",
		"avatar": "https://cdn.fakercloud.com/avatars/stefanotirloni_128.jpg",
		"surname": "Jonson",
		"email": "Tom_Jnglas21@gmail.com",
		"phone": "(063) 122-7206",
		"id": "26"
	}

	post(user);

	useEffect(_ => {
		get().then(res => setPers(res.data));
	}, [setPers]);

	return (
		<ul>
			{ pers.map(p => <li key={p.createdAt + p.id}>{p.email}</li>)}
		</ul>
	)
}