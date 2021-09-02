import React from "react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

import Input from "./Input";
import Button from "./Button";

import { postAxios, putAxios } from "../services/API";

const Form = () => {
	const initialState = {
		createdAt: '',
		id: '',
		name: '',
		surname: '',
		date_of_birth: '',
		date_of_death: ''
	}

	const initialValidate = {
		isNameField: false,
		isSurnameField: false,
		isBirthDate: false
	}

	const [state, setState] = useState(initialState);
	const [isValidate, setValidate] = useState(initialValidate);

	useEffect(() => {
		if (Object.entries(isValidate).every(el => el === true)) {
			document.getElementById('submit_btn').disabled = false;
			console.log('ok');
		}
	}, [isValidate]);

	const onClick = e => {
		if (e.target.id === 'submit_btn') {
			postAxios('authors', state);
		}

		if (e.target.id === 'edit_btn') {
			putAxios('authors', state.id, state);
		}
	}

	return (
		<form onClick={onClick}>
			{Object.keys(state).map(el => {
				return (
					<Input
						key={el}
						name={el}
						setState={setState}
						state={state}
						id={el}
						setValidate={setValidate}
						isValidate={isValidate}
					/>
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