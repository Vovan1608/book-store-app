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
			isValidate['isNameField'] = true;
			setValidate({...isValidate});
		}

		if (name === 'surname') {
			isValidate['isSurnameField'] = true;
			setValidate({...isValidate});
		}

		if (name === 'date_of_birth') {
			isValidate['isBirthDate'] = true;
			setValidate({...isValidate});
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