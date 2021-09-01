const Button = ({name, id}) => {
	return (
		<button className='btn' id={id} type={name === 'Submit' ? 'submit' : ''}>{name}</button>
	);
}

export default Button;