import Input from "./Input";
import Button from "./Button";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { postAxios, putAxios, getAxios, deleteAxios } from "../services/API";

const Form = () => {
	const [createdAt, setCreatedAt] = useState('');
	const [id, setId] = useState('');
	const [name, setName] = useState('');
	const [surname, setSurname] = useState('');
	const [date_of_birth, setDateOfBirth] = useState('');
	const [date_of_death, setDateOfDeath] = useState('');
	const [data, setData] = useState({});

	const fields = ['createdAt', 'id', 'name', 'surname', 'date_of_birth', 'date_of_death'];
	const sets = [setCreatedAt, setId, setName, setSurname, setDateOfBirth, setDateOfDeath];
	
	// useEffect(() => {
	// 	getAxios('/modal').then(res => {
	// 		console.log(res.data)
	// 	});
	// }, []);

	const dataToPost = {createdAt, id, name, surname, date_of_birth, date_of_death}
	console.log(dataToPost);
	// const dataToPut = Object.fromEntries(Object.entries(dataToPost).filter(([, val]) => Boolean(val) === true));

	const onSubmit = e => {
		postAxios('authors', dataToPost);
		e.preventDefault();
	}

	const onClick = e => {

		if (e.target.id === 'edit_btn') {
			// deleteAxios('modal', id)
			// putAxios(dataToPut['id'], Object.fromEntries(Object.entries(dataToPut).filter(([key, ]) => key !== 'id')));
			e.preventDefault();
		}
	}

	return (
		<form onSubmit={onSubmit} onClick={onClick}>
			{fields.map((el, i) => {
				return (
					<Input key={el} name={el} passData={sets[i]} id={el}/>
				);
			})}
			<Link to="/authors">
				<Button name="Submit" id="submit_btn"/>
			</Link>
			<Link to="/authors">
				<Button name="Edit" id="edit_btn"/>
			</Link>
			<Link to="/authors">
				<Button name="Close" id="close_btn"/>
			</Link>
		</form>
	);
}

export default Form;