import { useState } from "react";

const Input = ({name, id, state, setState}) => {
	const [input, setInput] = useState('');

	const onInput = e => {
		const {value} = e.target;
		setInput(value);
		state[id] = value;
		setState({...state});
	}

	return (
		<>
			<label>{name}</label>
			<input placeholder={name} name={name} value={input} onInput={onInput} id={id}/>
		</>
	);
}

export default Input;