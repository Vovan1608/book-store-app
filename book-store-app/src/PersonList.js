import React from 'react';
import { useState, useEffect } from 'react';
// import API from './services/API';
import { getAxios, /* post, deleteAxios */ } from '../src/services/API';

export default function PersonList() {
	const [posts, setPosts] = useState([]);

	const getPosts = _ => {
		const resp = getAxios();
		return resp;
	}

	// const info = {
	// 	"id": 2,
	// 	"title": "java-script",
	// 	"author": "ECMAScript"
	// }

	// const sendInfo = async _ => {
	// 	const res = await post(info);
	// 	setPosts([...posts, res.data]);
	// }

	// sendInfo();

	useEffect(_ => {
		getPosts().then(res => setPosts(res.data));
	}, [setPosts]);

	// const del = async _ => {
	// 	setTimeout(() => {
	// 		deleteAxios(2);
	// 	}, 5000)
	// }

	// del()



	return (
		<ul>
			{ posts.map(p => <li key={p.id}>{p.author}</li>)}
		</ul>
	)
}