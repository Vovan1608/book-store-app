const Button = ({name, id}) => {
	return (
		<button className='btn' id={id}>{name}</button>
	);
}

export default Button;