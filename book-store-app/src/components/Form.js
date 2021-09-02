import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";

import Input from "./Input";
import Button from "./Button";

import { postAxios } from "../services/API";

const Form = () => {
	const initialState = {
		createdAt: '',
		id: '',
		name: '',
		surname: '',
		date_of_birth: '',
		date_of_death: ''
	}

	const [state, setState] = useState(initialState);

	const onClick = e => {
		if (e.target.id === 'submit_btn') {
			postAxios('authors', state);
		}
	}

	return (
		<form onClick={onClick}>
			{Object.keys(state).map(el => {
				return (
					<Input key={el} name={el} setState={setState} state={state} id={el}/>
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