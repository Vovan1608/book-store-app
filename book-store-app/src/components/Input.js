import React from "react";
import { useState } from "react";

const Input = ({name, state, setState, setValidate, isValidate}) => {
	const [input, setInput] = useState('');

	const onInput = e => {
		const {value} = e.target;
		setInput(value);
		state[name] = value;
		setState({...state});

		if (name === 'name') {
			setValidate({...isValidate, ...{isNameField: true}});
		}

		if (name === 'surname') {
			setValidate({...isValidate, ...{isSurnameField: true}});
		}

		if (name === 'date_of_birth') {
			setValidate({...isValidate, ...{isBirthDate: true}});
		}
	}

	return (
		<>
			<label>
				{name}
			</label>
			<input
				placeholder={name}
				name={name}
				value={input}
				onInput={onInput}
				required={name === 'name' || name === 'surname' || name ==='date_of_birth'}
			/>
		</>
	);
}

export default Input;