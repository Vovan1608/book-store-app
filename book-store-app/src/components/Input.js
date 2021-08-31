import { useState } from "react";

const Input = ({name, passData}) => {
	const [input, setInput] = useState('');

	const onInput = e => {
		const {value} = e.target;
		setInput(value);
		passData(value);
	}

	return (
		<>
			<label>{name}</label>
			<input placeholder={name} name={name} value={input} onInput={onInput}/>
		</>
	);
}

export default Input;