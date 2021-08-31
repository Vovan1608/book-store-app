import Input from "./Input";
import Button from "./Button";
import { useState } from "react";
import { postAxios } from "../services/API";

const Form = _ => {
	const [createdAt, setCreatedAt] = useState('');
	const [id, setId] = useState('');
	const [name, setName] = useState('');
	const [surname, setSurname] = useState('');
	const [date_of_birth, setDateOfBirth] = useState('');
	const [date_of_death, setDateOfDeath] = useState('');

	const fields = ['createdAt', 'id', 'name', 'surname', 'date_of_birth', 'date_of_death'];
	const sets = [setCreatedAt, setId, setName, setSurname, setDateOfBirth, setDateOfDeath];

	const dataToPost = {createdAt, id, name, surname, date_of_birth, date_of_death}

	const modalEl = document.getElementById('modal_el');

	const onSubmit = e => {
		modalEl.classList.add('hide');
		postAxios(dataToPost);
		e.preventDefault();
	}

	const onClick = e => {
		if (e.target.id === 'close_btn') {
			modalEl.classList.add('hide');
		}

		if (e.target.id === 'edit_btn') {
			modalEl.classList.add('hide');
		}
	}

	return (
		<form onSubmit={onSubmit} onClick={onClick}>
			{fields.map((el, i) => {
				return (
					<Input key={el} name={el} passData={sets[i]} id={el}/>
				);
			})}
			<Button name="Submit" id="submit_btn"/>
			<Button name="Edit" id="edit_btn"/>
			<Button name="Close" id="close_btn"/>
		</form>
	);
}

export default Form;